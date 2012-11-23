(function($, NS, SuperClass, SubClass) {
	window[NS][SubClass] = window[NS][SubClass] || window[NS][SuperClass].extend({
		$ctx: $('#searchPage'),
		$msg: $('#searchPage .messages'),
		$contentArea:$('.search-results','#searchPage'),
		$accordion : null,
		$communicationChannel : null,
		$socket : $.atmosphere,
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
			this.$addButton.on('click', $.proxy(this.srcMoviesAtm, this));
			this.$accordion=this.$contentArea.accordion({heightStyle: "content", collapsible: true, active: false});
			this.handshake();
		},
		/**Initializes the communication channel between browser and server*/
		handshake: function(){
			request = new $.atmosphere.AtmosphereRequest();
			request.url = 'http://localhost:8080/wmc/srcMoviesAtm';
			request.contentType = "application/json"; //send json to server
			request.dataType = "text";//expect text from server
			request.method = "POST";
	        request.transport = "websocket";
	        request.fallbackTransport = "long-polling";
	        request.onOpen = this.channelOpened();
	        request.onReconnect = this.channelReconnected();
	        request.onError = this.channelError();
	        request.onMessage = this.channelMessageReceived();
	        
		},
		
		/**called when communication channel has been opened*/
		channelOpened : function(response){
			this.$addButton.removeAttr('disabled');
			$().message(this.$msg.data('searchpage.comm.ready'));
			this.$searchTerm.focus();
		},
		
		/**called when communication channel has been re-opened*/
		channelReconnected : function(request,response){
			$().message(this.$msg.data('searchpage.comm.reconnected'));
		},
		
		/**called when error occured on communication channel*/
		channelError : function(request,response){
			$().message(this.$msg.data('searchpage.comm.error'),true);
		},
		
		/**called when a message from the server has been received on communication channel*/
		channelMessageReceived : function(response){
			
		},
		
		/**Builds up the markup for one search result*/
		buildResultItem : function(response){
	        	
	            $.atmosphere.log('info', ["response.state: " + response.state]);
	            $.atmosphere.log('info', ["response.transport: " + response.transport]);
	            $.atmosphere.log('info', ["response.responseBody: " + response.responseBody]);
	            
	            if(response.state === "messageReceived"){
	            	$.atmosphere.log('info', ["message received: " + response.state]);
	            	if(response.responseBody!=="[]"){
	            		var transform = {"tag":"ul","class":"accordionContent","children":[
	                                    {'tag':'li','class':'delimiter', 'html':''},   							                                                                  
						                {'tag':'li', 'class':'accordion-movie-info', 'html':'${title}'},
						                {'tag':'li', 'class':'accordion-movie-info', 'html':'${year}'},
						                {'tag':'li', 'class':'accordion-movie-info', 'html':'${director}'},
						                {'tag':'li', 'class':'accordion-movie-info', 'html':'<a class="accordion-movie-id" id=${id} href="#">${id}</a>'}
						                ]},
						    movieDataMapBySite = {},
	   						briefMovieInfo = $.parseJSON(response.responseBody),
	   						item = null, site = null,moviesArrayPerSite = null,
	   						movieTitle = $('.movie-title',this.$ctx).val();
	            		
	            		contentArea.accordion("destroy");
	            		$(searchItemTmpl.tmpl({
							"label" : movieTitle
						})).appendTo(contentArea);
	            		contentArea.accordion({heightStyle: "content", collapsible: true, active: false});
	            		
	            		for (item in briefMovieInfo) {
							 if(briefMovieInfo.hasOwnProperty(item)){
								 site = briefMovieInfo[item].site;							 
								 if(!(site in movieDataMapBySite)) {
									 movieDataMapBySite[site] = [];
								 }	
								 moviesArrayPerSite = movieDataMapBySite[site];
								 moviesArrayPerSite.push(briefMovieInfo[item]);
							 }
						 }
													 
						 for(item in movieDataMapBySite){
							 if(movieDataMapBySite.hasOwnProperty(item)){
								 $('#'+movieTitle).append("<div class=\"" + item + " site"+"\"/>");
								 $('.'+item).append("<p class=\"tooltip-header\">" + item.toUpperCase() + "</p>");
								 $('.'+item).json2html(movieDataMapBySite[item],transform);	 
							 }
						 }
						 		
						that.briefMovieInfo = response.responseBody;
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
			$('.layout-inner').layout($.extend({},cfgLayout,{
				east:{
					size:0.66
				}
			}));
			$('.user-input-zone').layout(cfgLayout);
		},
		
		/***/
		srcMoviesAtm: function(e) {
            
			var that= this,
				request = null,
				subSocket = null,
				$el = $(e.target), 
				movieData = {
				"sites" : [],
				"movies" : []
				}, 
				movieTitle = $('.movie-title',this.$ctx).val(), 
				contentArea = $('.search-results',this.$ctx), 
				searchItemTmpl = $('#searchItemTmpl').val();
	
			// map all the checked checkboxes' values into an array
			movieData.sites = $('.info-sources :checked',this.$ctx).map(function() {
				return this.value;
			}).get();
			// put the search term into the movieData object
			if($('.movie-title').val()!==""){
				movieData.movies.push($('.movie-title').val());	
			}		
	
			if (movieData.sites.length === 0) {
				$().message(this.$msg.data('searchpage.no.infosource.selected'),true);
				return false;
			}
			if (movieData.movies.length === 0) {
				$().message(this.$msg.data('searchpage.movie.required'),true);
				return false;
			}
	            
	        
	        //request.callback = buildTemplate;
	        
	        
	        
	        request.onMessage = function(response){
	            
	        	buildTemplate(response);
	            
	            $('.search-term').on('click',function(){
					console.log('removing the searched item');
					var $contentDiv = $(this).parent().next('div');					
					$(this).closest('h1').remove();
					$contentDiv.remove();
				});
				
	            $('.accordion-movie-id').on('click',function(){
					$('.ui-layout-east').append($(this).closest('ul').html());
				});
	        };
	
	        request.onMessagePublished = function(response){
	
	        };
	
	        request.onOpen = function() { 
	        	$.atmosphere.log('info', ['socket open']); 	        	
	        };
	        request.onError =  function() { $().message(that.$msg.data('searchpage.server.error'),true);$.atmosphere.log('info', ['socket error']); };
	        request.onReconnect =  function() { $.atmosphere.log('info', ['socket reconnect']); };
	
	        subSocket = socket.subscribe(request);
        },
        showDetailedData: function(e) {            
			var that= this,
				socket = $.atmosphere,
				request = null,
				subSocket = null,
				$el = $(e.target), 
				movieData = {
				"sites" : [],
				"movies" : []
				}, 
				movieTitle = $('.movie-title',this.$ctx).val(), 
				contentArea = $('.search-results',this.$ctx), 
				searchItemTmpl = $('#searchItemTmpl').val();

			window.alert('detailedData was requested');
	        request = new $.atmosphere.AtmosphereRequest();
	        request.transport = "websocket";
	        request.url = 'http://localhost:8080/wmc/fullSrcMoviesAtm';
	        request.contentType = "application/json";
	        request.data = JSON.stringify(movieData);
	        request.fallbackTransport = "long-polling";
	        request.method = "POST";
	        request.dataType = "text";
	        //request.callback = buildTemplate;
        
	        function showDetailedMovieData(response){
	        	
	            $.atmosphere.log('info', ["detailedResponse.state: " + response.state]);
	            $.atmosphere.log('info', ["detailedResponse.transport: " + response.transport]);
	            $.atmosphere.log('info', ["detailedResponse.responseBody: " + response.responseBody]);
	            
	            if(response.state === "messageReceived"){
	            	$.atmosphere.log('info', ["detailed message received: " + response.state]);  
	            	var detailedData = JSON.stringify([
                          {
                              "title": "Batman",
                              "year": "2008",
                              "site": "imdb",
                              "id": "109101",
                              "director": "C.Nolan"
                          },
                          {
                              "title": "Batman2",
                              "year": "2009",
                              "site": "filmkatalogus",
                              "id": "109102",
                              "director": "Chr.Nolan"
                          }
                      ]);
	 				$('.ui-layout-east').append('<div>'+detailedData+'</div');
	        	}
	        }
        
	        request.onMessage = function(response){
	            showDetailedMovieData(response);
	        };
	
	        request.onMessagePublished = function(response){
	        };
	
	        request.onOpen = function() { 
	        	$.atmosphere.log('info', ['detailed data request socket open']); 
	        };
	        request.onError =  function() { $().message(that.$msg.data('searchpage.server.error'),true);$.atmosphere.log('info', ['socket error']); };
	        request.onReconnect =  function() { $.atmosphere.log('info', ['socket reconnect']); };
	
	        subSocket = socket.subscribe(request);
        },
		/** On click event handler for Add Item button */
		addSearchItem : function(e) {
			var that= this,
				$el = $(e.target), 
				movieData = {
				"sites" : [],
				"movies" : []
				}, 
				movieTitle = $('.search-bar').val(), 
				contentArea = $('#content-area'), 
				searchItemTmpl = $('#searchItemTmpl').val();

			// map all the checked checkboxes' values into an array
			movieData.sites = $('input:checkbox:checked.sources').map(function() {
				return this.value;
			}).get();
			if (movieData.sites.length === 0) {
				$().message(that.$msg.data('searchpage.no.infosource.selected'),true);
				return false;
			}
			// put the search term into the movieData object
			movieData.movies.push($('.search-bar').val());
			if (movieData.movies.length === 0) {
				$().message(that.$msg.data('searchpage.movie.required'),true);
				return false;
			}
			// stringify the movieData object
//			searchData = JSON.stringify(movieData);
		
			// do the ajax call to retrieve the results
			$.ajax({
				url : 'http://localhost:8080/wmc/searchmovies',
				data : JSON.stringify(movieData),
				type : "POST",
				contentType : 'application/json; charset=utf-8',
				dataType : 'json',
				success : function(response) {
					console.log('success' ,response.basicMoviesArray);
					$(searchItemTmpl.tmpl({
						"label" : movieTitle,
						"searchResult": response.basicMoviesArray
					})).tooltip().appendTo(contentArea).find('.search-term').click($.proxy(this.removeSearchItem, this));

					that.briefMovieInfo = response.basicMoviesArray;
				},
				error : function(err, req, stat) {
					$().message(req + 'stat:' + stat,true);
				}
			});
		},
		/** Removes the clicked search item */
		removeSearchItem : function(e) {
			console.log('in removeSearchItem');
			$(e.target).closest('div').remove();
		},
		/** Loads basic movie data into the tooltip */
		getTooltipData : function(title, source) {
			var addr = title + '/' + source,
			// used to store the data for the tooltip
				dataArray = [],
			// used to store the data for the detailed info of the movies
				dataObject = {},

				xhr = $.ajax({
				url : 'http://localhost/' + addr,
				data : '{}',
				type : "POST",
				contentType : 'application/json; charset=utf-8',
				dataType : 'json',
				success : function(response) {
					if (response.length > 0) {
						for ( var i = 0; i < response.length; i++) {
							dataObject.id = response[i].id;
							dataObject.title = response[i].title;
							dataObject.year = response[i].year;
							dataObject.director = response[i].director;
							dataObject.site = response[i].site;
							dataArray.push(dataObject);
						}
					}
				},
				error : function(err, req, stat) {
					$().message(err);
				}
			});

			return dataArray;

		},

		/** Loads verbose movie data into the tooltip */
		getDetailedData : function(title, source, id) {
			var addr = title + '/' + source + '/' + id,
				dataObject = {},

				xhr = $.ajax({
				url : 'http://localhost/' + addr,
				data : '{}',
				type : "POST",
				contentType : 'application/json; charset=utf-8',
				dataType : 'json',
				success : function(response) {
					if (response.length > 0) {
						for ( var i = 0; i < response.length; i++) {
							dataObject.id = response[i].id;
							dataObject.title = response[i].title;
							dataObject.year = response[i].year;
							dataObject.description = response[i].description;
							dataObject.director = response[i].director;
							dataObject.site = response[i].site;
							dataObject.rate = response[i].rate;
							dataObject.cast = response[i].cast;
							dataObject.genre = response[i].genre;
							dataObject.runtime = response[i].runtime;
						}
					}
				},
				error : function(err, req, stat) {
					$().message(err);
				}
			});
			return dataObject;
		}
	});

	/* Attach page specific behavior on page load */
	$(function() {
		return new window[NS][SubClass]();
	});
}(window.jQuery, "WMC", "Base", "SearchPage"));
