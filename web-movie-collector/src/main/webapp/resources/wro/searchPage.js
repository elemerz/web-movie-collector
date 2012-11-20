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
				var strBody = "", message = configs.msg;
				if (!configs.msg) {
					message = $trigger.data('tooltipmsg');
				} else if ($.isFunction(configs.msg)) {
					message = configs.msg();
				}
				if ($.isArray(message)) {
					message = [];
					var body = [];
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
                
				var $tooltip = $(template(configs.htmlTmpl, {'id' : id, 
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
					};
				if (configs.arrowHPosX === 'center' || (dinamicArrowLeft + 10) >= $tooltip.width()) {
					positions.arrowOffsetLeft = 'center';
					var left = (e.pageX - Math.round($tooltip.width() / 2));
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
							var $tooltip = generateTooltip(tooltipId, $trigger);						
							$("body").append($tooltip);	
							
							
							
							 var transform = {"tag":"ul","class":"tooltipContent","children":[
                                                  {'tag':'li','class':'delimiter', 'html':''},   							                                                                  
								                  {'tag':'li', 'class':'tooltip-list-element', 'html':'${title}'},
								                  {'tag':'li', 'class':'tooltip-list-element', 'html':'${year}'},
								                  {'tag':'li', 'class':'tooltip-list-element', 'html':'${director}'}
								                  ]
							 				};
							 
							 var tooltipMap = {};
							 var briefMovieInfo = $trigger.data('tooltipmsg');
							 for (var item in briefMovieInfo) {
								 var site = briefMovieInfo[item].site;							 
								 if(!(site in tooltipMap)) {
									 tooltipMap[site] = [];
								 }	
								 var myArray = tooltipMap[site];
								 myArray.push(briefMovieInfo[item]);
							 }
														 
							 for(var item in tooltipMap){
								 $('.tooltip-body').append("<div class=\"" + item + " site"+"\"/>");
								 $('.'+item).append("<p class=\"tooltip-header\">" + item.toUpperCase() + "</p>");
								 $('.'+item).json2html(tooltipMap[item],transform);
							 }  	
							
							var positions = computePositions($this, $tooltip, e);
							$tooltip.css({'left' : positions.left, 'top' : positions.top});
							$tooltip = appendArrow($tooltip, positions);
							timeouts.hideTimeOut[timeouts.displayed] = true;
							timeouts.clearOutTime = 0;
							if (configs.displaytype === 'fade') {
								$tooltip.fadeIn(configs.displaytime).animate({
									'top' : (positions.arrowPos === 'up' ? '-='+ configs.animate + 'px' : '+=' + configs.animate + 'px')
								}, {duration : 'slow', queue : false}).mouseover(function(){
									clearTimeout(timeouts.clearOutTime);
								})
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
				$('.scrollable').scroll(function(e){onScroll()});
				$(window).scroll(function(e){onScroll()});
			});
		}
	});
	
	$('.tooltip-aware').tooltip();
	
}(jQuery));
(function($, NS, SuperClass, SubClass) {
	window[NS][SubClass] = window[NS][SubClass] || window[NS][SuperClass].extend({
		$ctx: $('#searchPage'),
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
		doLayout: function(){
			$('body').layout();
		},
		
		srcMoviesAtm: function(e) {
            
			var socket = $.atmosphere;
			
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
		movieData.sites = $('#infoSources :checked').map(function() {
			return this.value;
		}).get();
		if (movieData.sites.length === 0) {
			window.alert('Please select a website to search on...');
			return false;
		}
		// put the search term into the movieData object
		movieData.movies.push($('.movie-title').val());
		if (movieData.movies.length === 0) {
			window.alert('Please fill the search term');
			return false;
		}
            
            var request = new $.atmosphere.AtmosphereRequest();
            request.transport = "websocket";
            request.url = 'http://localhost:8080/srcMoviesAtm';
            request.contentType = "application/json";
            request.data = JSON.stringify(movieData),
            request.fallbackTransport = "long-polling";
            request.method = "POST";
            request.dataType = "text";
            //request.callback = buildTemplate;
            
            request.onMessage = function(response){
            	
                buildTemplate(response);
            };

            request.onMessagePublished = function(response){

            };

            request.onOpen = function() { $.atmosphere.log('info', ['socket open']); };
            request.onError =  function() { alert("error");$.atmosphere.log('info', ['socket error']); };
            request.onReconnect =  function() { $.atmosphere.log('info', ['socket reconnect']); };

            var subSocket = socket.subscribe(request);
            
            function buildTemplate(response){
            	
                $.atmosphere.log('info', ["response.state: " + response.state]);
                $.atmosphere.log('info', ["response.transport: " + response.transport]);
                $.atmosphere.log('info', ["response.responseBody: " + response.responseBody]);
                
                if(response.state = "messageReceived"){
                
                	var tooltipData = JSON.stringify($.parseJSON(response.responseBody).basicMoviesArray);
					$(searchItemTmpl.tmpl({
						"label" : movieTitle
					})).appendTo(contentArea).children().attr('data-tooltipmsg', tooltipData).tooltip();

					that.briefMovieInfo = response.responseBody.basicMoviesArray;
            	}
            }
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
				window.alert('Please select a website to search on...');
				return false;
			}
			// put the search term into the movieData object
			movieData.movies.push($('.search-bar').val());
			if (movieData.movies.length === 0) {
				window.alert('Please fill the search term');
				return false;
			}
			// stringify the movieData object
//			searchData = JSON.stringify(movieData);
		
			// do the ajax call to retrieve the results
			$.ajax({
				url : 'http://localhost:8080/searchmovies',
				data : JSON.stringify(movieData),
				type : "POST",
				contentType : 'application/json; charset=utf-8',
				dataType : 'json',
				success : function(response) {
					window.alert('success' + response.basicMoviesArray);
					$(searchItemTmpl.tmpl({
						"label" : movieTitle,
						"searchResult": response.basicMoviesArray
					})).tooltip().appendTo(contentArea).find('.search-term').click($.proxy(this.removeSearchItem, this));

					that.briefMovieInfo = response.basicMoviesArray;
				},
				error : function(err, req, stat) {
					window.alert(req + 'stat:' + stat);
				}
			});
		},
		/** Removes the clicked search item */
		removeSearchItem : function(e) {
			$(e.target).closest('li').remove();
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
						window.alert(response);
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
					window.alert(err);
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
						window.alert(response);
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
					window.alert(err);
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