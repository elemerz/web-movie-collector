/**
 * ISDC's customized jQuery tooltip plugin.
 * version: 1.0
 */
(function($){
	$.extend($.fn, {

		tooltip : function(cfg) {
			var def = {
				arrowHPosX: 'dinamic',
				animate : 0, /* amount of pixels to animate the tooltip */
				displaytype : 'fade',
				displaytime : 100,
				arrowUp : "<div class='tooltip-arrow-up'></div>",
				arrowDown : "<div class='tooltip-arrow-down'></div>",
				footerTmpl : "<p class='tooltip-footer'>{footer}</p>",
				bodyTmpl : "<p>{msg}</p>",
				headTmpl : "<p class='tooltip-head'>{title}</p>",
				htmlTmpl : "<div class='tooltip hidden {id}' id='{id}'><div class='tooltip-content'>{head}<div class='tooltip-body'>{body}</div>{footer}</div></div>",
				title : '',					
				msg : null,
				footer: ''
			},
			configs = $.extend({}, def, cfg),
			template = function(string, obj) {
				var result = string, prop;
				for (prop in obj) {
					if (obj.hasOwnProperty(prop)) {
						result = result.replace(new RegExp('{' + prop + '}', 'g'), obj[prop]);
					}
				}
				return result;
			},
			generateTooltip = function(id, $trigger) {
				var strBody = "", message = configs.msg, body=[], $tooltip;
				if (!configs.msg) {
					message = $trigger.data('tooltipmsg');
				} else if ($.isFunction(configs.msg)) {
					message = configs.msg();
				}
				if ($.isArray(message)) {
					message = [];
					body = [];
					$.each(message, function(key, value){
						if ($.isPlainObject(value)) {
							body.push(template(configs.bodyTmpl,value));
						} else {
							body.push(template(configs.bodyTmpl, {'msg' : value}));					
						}
					});
					strBody = body.join("");
				} else {
					if ($.isPlainObject(message)) {
						strBody = template(configs.bodyTmpl, message);
					} else {
						strBody = template(configs.bodyTmpl, {'msg' : message});
					} 
				}
                
				$tooltip = $(template(configs.htmlTmpl, {'id' : id, 
														 'head' : (/^\s*$/.test(configs.title) ? '' : template(configs.headTmpl, {'title' : configs.title})), 
														 'body' : message, 
														 'footer' : (/^\s*$/.test(configs.footer) ? '' : template(configs.footerTmpl, {'footer' : configs.footer}))}));  
				
				return $tooltip;
			},
			appendArrow = function($tooltip, positions) {
				var html = $tooltip.html();
				if (positions.arrowPos === 'up') {
					$tooltip.html(configs.arrowUp + html);
				} else if (positions.arrowPos === 'down') {
					$tooltip.html(html + configs.arrowDown);						
				}		
				$tooltip.find('[class^=tooltip-arrow]').css({'background-position' : positions.arrowOffsetLeft + " " + positions.arrowOffsetTop});				
				return $tooltip;
			},			
			computePositions = function($this, $tooltip, e) {
				var offset = $this.offset(), 
					dinamicLeft = ((e.pageX - 40) < 0 ? 0 : (e.pageX - 40 + $tooltip.width()) > $(window).width() ? ($(window).width() - $tooltip.width()) : (e.pageX - 40)),
					dinamicArrowLeft = (e.pageX - dinamicLeft - 10),
					positions = {
						top :  ((offset.top - $tooltip.height() - 10) < $(document).scrollTop() ? (offset.top + $this.height() + 10 + configs.animate) : (offset.top - $tooltip.height() - 10 - configs.animate)),
						left : dinamicLeft,
						arrowPos : (offset.top - $tooltip.height() - 10) < $(document).scrollTop() ? 'up' : 'down',
						arrowOffsetLeft : (($tooltip.width() - dinamicArrowLeft - 10) < Math.round($tooltip.width() / 2) ? Math.round(dinamicArrowLeft/2)  : dinamicArrowLeft) + "px",
						arrowOffsetTop : (offset.top - $tooltip.height() - 10) < $(document).scrollTop() ? '-70px' : 'top'
					},
					left;
				if (configs.arrowHPosX === 'center' || (dinamicArrowLeft + 10) >= $tooltip.width()) {
					positions.arrowOffsetLeft = 'center';
					left = (e.pageX - Math.round($tooltip.width() / 2));
					positions.left = (left < 0 ? 0 : (left +  $tooltip.width()) > $(window).width() ? ($(window).width() - $tooltip.width()) : left);
				}
				return positions;
			},
			hideTooltip = function($tooltip, timouts){
				timouts.hideTimeOut = [];
				if (timouts.clearOutTime !== 0) {
					timouts.displayed = 0;
				}
				timouts.clearOutTime = 0;
				$tooltip.fadeOut("fast",function(){
					$(this).remove();
				});
			},
			onScroll = function() {
				$("[id^=tooltip]").remove();				
			};
			
			return this.each(function(){
				var $trigger = $(this),
				timeouts = {
					displayed: '',
					clearOutTime : 0,
					showTimeOut : {},
					hideTimeOut : {}
						
				};
				$trigger.data({'tooltipid' : "tooltip_" + Math.floor(Math.random()*10000)});
				$trigger.mouseover(function(e){
					var $this = $(this), tooltipId = $this.data('tooltipid');
					if (!$("." + tooltipId).is(":visible")) {
						timeouts.displayed = tooltipId;
						timeouts.showTimeOut[timeouts.displayed] = setTimeout(function(){
							var $tooltip = generateTooltip(tooltipId, $trigger),
								transform = {"tag":"ul","class":"tooltipContent","children":[
                                                  {'tag':'li','class':'delimiter', 'html':''},   							                                                                  
   								                  {'tag':'li', 'class':'tooltip-movie-info', 'html':'${title}'},
   								                  {'tag':'li', 'class':'tooltip-movie-info', 'html':'${year}'},
   								                  {'tag':'li', 'class':'tooltip-movie-info', 'html':'${director}'},
   								                  {'tag':'li', 'class':'tooltip-movie-info', 'html':'<a class="tooltip-movie-id" href="#">${id}</a>'}
   								                  ]
   							 				},
   							 	 tooltipMap = {},
   							 	 briefMovieInfo = $trigger.data('tooltipmsg'),
   							 	 item, site, moviesArrayPerSite,
   							 	 positions;
							$("body").append($tooltip);	

							console.log('tooltip added to body');
							
							 for (item in briefMovieInfo) {
								 if(briefMovieInfo.hasOwnProperty(item)){
									 site = briefMovieInfo[item].site;							 
									 if(!(site in tooltipMap)) {
										 tooltipMap[site] = [];
									 }	
									 moviesArrayPerSite = tooltipMap[site];
									 moviesArrayPerSite.push(briefMovieInfo[item]);
								 }
							 }
														 
							 for(item in tooltipMap){
								 if(tooltipMap.hasOwnProperty(item)){
									 $('.tooltip-body').append("<div class=\"" + item + " site"+"\"/>");
									 $('.'+item).append("<p class=\"tooltip-header\">" + item.toUpperCase() + "</p>");
									 $('.'+item).json2html(tooltipMap[item],transform);	 
								 }
							 }  	
							console.log('json2html done'); 
							
							positions = computePositions($this, $tooltip, e);
							$tooltip.css({'left' : positions.left, 'top' : positions.top});
							$tooltip = appendArrow($tooltip, positions);
							timeouts.hideTimeOut[timeouts.displayed] = true;
							timeouts.clearOutTime = 0;
							if (configs.displaytype === 'fade') {
								$tooltip.fadeIn(configs.displaytime).animate({
									'top' : (positions.arrowPos === 'up' ? '-='+ configs.animate + 'px' : '+=' + configs.animate + 'px')
								}, {duration : 'slow', queue : false}).mouseover(function(){
									clearTimeout(timeouts.clearOutTime);
								});
							} else {
								$tooltip.show(configs.displaytime);
							}
							
							$tooltip.mouseout(function(){
								timeouts.clearOutTime = setTimeout(function(){
									hideTooltip($tooltip, timeouts);
								}, 250);
							}).click(function(){
								hideTooltip($tooltip,  timeouts);
							});
						}, 200);							
					} else {
						clearTimeout(timeouts.clearOutTime);
						timeouts.clearOutTime = 0;
					}
				}).mouseout(function(e){
					var $this = $(this), tooltipId = $this.data('tooltipid'), $current = $("." + tooltipId);
						clearTimeout(timeouts.showTimeOut[tooltipId]);
						if(timeouts.hideTimeOut[timeouts.displayed]) {
							timeouts.clearOutTime = setTimeout(function(){
								hideTooltip($current, timeouts);								
							}, 200);
						} else {
							timeouts.clearOutTime = 0;
							timeouts.displayed = '';
						}	
				});
				// handle window scroll or scrollable sections
				$('.scrollable').scroll(function(e){onScroll();});
				$(window).scroll(function(e){onScroll();});
			});
		}
	});
	
	//$('.tooltip-aware').tooltip();
	
}(jQuery));

(function(e){function s(n){t||(t=e(e.message.defaults.template).appendTo(document.body),e(window).bind("mousemove click keypress",o)),t[n?"addClass":"removeClass"]("jquery-error")}function o(){t.is(":visible")&&!t.is(":animated")&&!n&&t.animate({opacity:0},e.message.defaults.fadeOutDuration,function(){e(this).hide()})}var t,n,r,i;e.fn.message=function(u,a){u=e.trim(u||this.text());if(!u)return;clearTimeout(r),clearTimeout(i),s(a),t.find("p").html(u),t.show().animate({opacity:e.message.defaults.opacity},e.message.defaults.fadeInDuration),n=!0,active=!1,r=setTimeout(function(){n=!1},e.message.defaults.minDuration+e.message.defaults.displayDurationPerCharacter*Math.sqrt(u.length)),i=setTimeout(o,e.message.defaults.totalTimeout)},e.message={},e.message.defaults={opacity:.8,fadeOutDuration:500,fadeInDuration:200,displayDurationPerCharacter:125,minDuration:2500,totalTimeout:6e3,template:'<div class="jquery-message"><div class="round"></div><p></p><div class="round"></div></div>'}})(jQuery);(function($, NS, SuperClass, SubClass) {
	window[NS][SubClass] = window[NS][SubClass] || window[NS][SuperClass].extend({
		$ctx: $('#searchPage'),
		$msg: $('#searchPage .messages'),
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
			$("button.add",this.$ctx).on('click', $.proxy(this.srcMoviesAtm, this));
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
	            
	        request = new $.atmosphere.AtmosphereRequest();
	        request.transport = "websocket";
	        request.url = 'http://localhost:8080/wmc/srcMoviesAtm';
	        request.contentType = "application/json";
	        request.data = JSON.stringify(movieData);
	        $.atmosphere.log('info',["request.data:"+request.data]);
	        request.fallbackTransport = "long-polling";
	        request.method = "POST";
	        request.dataType = "text";
	        //request.callback = buildTemplate;
	        
	        function buildTemplate(response){
	        	
	            $.atmosphere.log('info', ["response.state: " + response.state]);
	            $.atmosphere.log('info', ["response.transport: " + response.transport]);
	            $.atmosphere.log('info', ["response.responseBody: " + response.responseBody]);
	            
	            if(response.state === "messageReceived"){
	            	$.atmosphere.log('info', ["message received: " + response.state]);
	            	if(response.responseBody!=="[]"){
	            		var tooltipData = response.responseBody,
	            		transform = {"tag":"ul","class":"accordionContent","children":[
	                                  {'tag':'li','class':'delimiter', 'html':''},   							                                                                  
						              {'tag':'li', 'class':'accordion-movie-info', 'html':'${title}'},
						              {'tag':'li', 'class':'accordion-movie-info', 'html':'${year}'},
						              {'tag':'li', 'class':'accordion-movie-info', 'html':'${director}'},
						              {'tag':'li', 'class':'accordion-movie-info', 'html':'<a class="accordion-movie-id" id=${id} href="#">${id}</a>'}
						          ]};
		            	$(searchItemTmpl.tmpl({
							"label" : movieTitle,
							"briefMovieData": movieTitle
						})).appendTo(contentArea).accordion({heightStyle: "content", collapsible: true, active: false}).children('h1').attr('data-tooltipmsg', tooltipData);//.tooltip();
		
						that.briefMovieInfo = response.responseBody;
						$('#'+movieTitle).json2html($.parseJSON(tooltipData),transform);
	            	}//end if(response.responseBody.length>0)
	            	else{ //the response is empty
	            		$(searchItemTmpl.tmpl({
							"label" : movieTitle + "(empty)"
							//"briefMovieData": movieTitle
						})).appendTo(contentArea).addClass("ui-state-disabled").accordion({heightStyle: "content",collapsible: true, active: false});
	            	}
	        	 }// end if(response.state==="messageReceived")
	        }
	        
	        request.onMessage = function(response){
	            buildTemplate(response);
	            $('.search-term').on('click',function(){
					console.log('attempted removal of search item');
					 $(this).closest('div').remove();
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
