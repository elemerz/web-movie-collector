(function(e){function s(n){t||(t=e(e.message.defaults.template).appendTo(document.body),e(window).bind("mousemove click keypress",o)),t[n?"addClass":"removeClass"]("jquery-error")}function o(){t.is(":visible")&&!t.is(":animated")&&!n&&t.animate({opacity:0},e.message.defaults.fadeOutDuration,function(){e(this).hide()})}var t,n,r,i;e.fn.message=function(u,a){u=e.trim(u||this.text());if(!u)return;clearTimeout(r),clearTimeout(i),s(a),t.find("p").html(u),t.show().animate({opacity:e.message.defaults.opacity},e.message.defaults.fadeInDuration),n=!0,active=!1,r=setTimeout(function(){n=!1},e.message.defaults.minDuration+e.message.defaults.displayDurationPerCharacter*Math.sqrt(u.length)),i=setTimeout(o,e.message.defaults.totalTimeout)},e.message={},e.message.defaults={opacity:.8,fadeOutDuration:500,fadeInDuration:200,displayDurationPerCharacter:125,minDuration:2500,totalTimeout:6e3,template:'<div class="jquery-message"><div class="round"></div><p></p><div class="round"></div></div>'}})(jQuery);(function($, NS, SuperClass, SubClass) {
	window[NS][SubClass] = window[NS][SubClass] || window[NS][SuperClass].extend({
		$ctx: $('#searchPage'),
		$msg: $('#searchPage .messages'),
		$contentArea:$('.search-results','#searchPage'),
		$accordion : null,
		$communicationChannel : null,
		$socket : $.atmosphere,
		$initialRequest : 0,
		$addButton : $("button.add",'#searchPage'),
		$searchTerm : $("input.movie-title",'#searchPage'),
		// used to store the data for the tooltip
		dataArray : [],
		// used to store the data for the detailed info of the movies
		dataObject : {},
		// JSON with the data to be searched
		searchData : '',
		briefMovieInfo : [],

		toString : function() {
			return NS + '.' + SubClass;
		},
		/** Constructor. */
		init : function(cfg) {
			this.doLayout();
			this.handshake();
			this.$addButton.on('click', $.proxy(this.processRequest, this));
			this.$accordion=this.$contentArea.accordion({heightStyle: "content", collapsible: true, active: false});			
		},
		/**Initializes the communication channel between browser and server*/
		handshake: function(){
			var $request = new $.atmosphere.AtmosphereRequest(), that=this;
			$request.url = 'http://'+document.location.host+'/wmc/searchMovies';
			$request.contentType = "application/json"; //send json to server
			$request.dataType = "text";//expect text from server
			$request.method = "POST";
	        $request.transport = "websocket";
	        $request.fallbackTransport = "long-polling";	    
	        $request.onOpen = $.proxy(this.channelOpened, this);
	        $request.onReconnect = this.channelReconnected;
	        $request.onError = this.channelError;
	        $request.onMessage = this.messageReceived;
			
	        this.$communicationChannel = this.$socket.subscribe($request);
		},
		/**
		 * On Message received (from server) event callback
		 * @param response
		 */
		messageReceived: function(response){
		    console.log(response.responseBody);
        	/*$.proxy(this.buildTemplate, this);	            
            $('.search-term').on('click',function(){
				console.log('removing the searched item');
				var $contentDiv = $(this).parent().next('div');					
				$(this).closest('h1').remove();
				$contentDiv.remove();
			});
			
            $('.accordion-movie-id').on('click',function(){
				$('.ui-layout-east').append($(this).closest('ul').html());
			});*/
		},
		/**Called when communication channel has been opened*/
		channelOpened : function(response){
			this.$addButton.removeAttr('disabled');
			$().message(this.$msg.data('searchpage.comm.ready'));
			this.$searchTerm.focus();
		},
		
		/**Called when communication channel has been re-opened*/
		channelReconnected : function(request,response){
			$().message(this.$msg.data('searchpage.comm.reconnected'));
		},
		
		/**Called when error occured on communication channel*/
		channelError : function(request,response){
			$().message(this.$msg.data('searchpage.comm.error'),true);
		},
		
		/**Called when a message from the server has been received on communication channel*/
		
		/**Sends a request to server and then*/
		processRequest: function(e){
			var that= this,
			$el = $(e.target), 
			movieData = {
			"searchTerms" : [],
			"infoSourceKeys" : []
			}, 
			movieTitle = $('.movie-title',this.$ctx).val(), 
			contentArea = $('.search-results',this.$ctx), 
			searchItemTmpl = $('#searchItemTmpl').val();						
	
			// map all the checked checkboxes' values into an array
			movieData.infoSourceKeys = $('.info-sources :checked',this.$ctx).map(function() {
				return this.value;
			}).get();
			// put the search term into the movieData object
			if($('.movie-title').val()!==""){
				movieData.searchTerms.push($('.movie-title').val());	
			}		
	
			if (movieData.infoSourceKeys.length === 0) {
				$().message(this.$msg.data('searchpage.no.infosource.selected'),true);
				return false;
			}
			if (movieData.searchTerms.length === 0) {
				$().message(this.$msg.data('searchpage.movie.required'),true);
				return false;
			}
	        console.log(JSON.stringify(movieData));    
	        	        		
        	this.$communicationChannel.push(JSON.stringify(movieData));		       
		},
		
		/**Builds up the markup for one search result*/
		buildTemplate : function(response){
	        var contentArea = $('.search-results',this.$ctx),
	        	searchItemTmpl = $('#searchItemTmpl').val(),
				movieDataSourceTmpl = $('#movieDataSourceTmpl').val(),
				movieItemTmpl = $('#movieItemTmpl').val(),
				briefMovieInfo = null;						

			if(response.state === "messageReceived"){	            	
            	if(response.responseBody!=="[]"){
            		briefMovieInfo = $.parseJSON(response.responseBody);
            			            		
            		$.each(briefMovieInfo,function(key,value){
            			console.log(key+" "+value);
            			
            			$(movieDataSourceTmpl.tmpl({
							"movieDataSource" : key
						})).appendTo("#searchItemTmpl");
            			
            			$.each(value, function(){
            				$(movieItemTmpl.tmpl({
								"movieItemData" : value
							})).appendTo(movieDataSourceTmpl);
            			});
            		});
            		            		
            	}else{ //the response is empty
	            		$(searchItemTmpl.tmpl({
							"label" : movieTitle + "(empty)"
						})).appendTo(contentArea).addClass("ui-state-disabled").accordion({heightStyle: "content", collapsible: true, active: false});
	            }
	        }// end if(response.state==="messageReceived")	        
		},
		
		/**Renders the page's dynamic layout*/
		doLayout : function(e) {
			var cfgLayout = {
				spacing_open:3,
				spacing_closed:3,
				north : {
					resizable : false,
					closable : false
				},
				south : {
					resizable : false,
					closable : false
				}
			};
			this.$ctx.layout(cfgLayout);
			$('#header').layout($.extend({},cfgLayout,{
				east:{
					size:0.5
				}
			}));
			$('.layout-inner').layout($.extend({},cfgLayout,{
				east:{
					size:0.66
				}
			}));
			$('.user-input-zone').layout(cfgLayout);
		},
			
	    showDetailedData: function(e) {            
			console.log('To be implemented');
        }		
	});

	/* Attach page specific behavior on page load */
	$(function() {
		return new window[NS][SubClass]();
	});
}(window.jQuery, "WMC", "Base", "SearchPage")); 