(function($, NS, SuperClass, SubClass) {
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
	            	var tooltipData = response.responseBody;
					$(searchItemTmpl.tmpl({
						"label" : movieTitle
					})).appendTo(contentArea).children().attr('data-tooltipmsg', tooltipData).tooltip();
	
					that.briefMovieInfo = response.responseBody.basicMoviesArray;
	        	}
	        }
	        
	        request.onMessage = function(response){
	            buildTemplate(response);
	        };
	
	        request.onMessagePublished = function(response){
	
	        };
	
	        request.onOpen = function() { 
	        	$.atmosphere.log('info', ['socket open']); 
	        	var tooltipData = JSON.stringify([
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
	                          ]),
	                  transform = {"tag":"ul","class":"accordionContent","children":[
	                                  {'tag':'li','class':'delimiter', 'html':''},   							                                                                  
						              {'tag':'li', 'class':'tooltip-movie-info', 'html':'${title}'},
						              {'tag':'li', 'class':'tooltip-movie-info', 'html':'${year}'},
						              {'tag':'li', 'class':'tooltip-movie-info', 'html':'${director}'},
						              {'tag':'li', 'class':'tooltip-movie-info', 'html':'<a class="tooltip-movie-id" id=${id} href="#">${id}</a>'}
						          ]};
				$(searchItemTmpl.tmpl({
					"label" : movieTitle,
					"briefMovieData": movieTitle
				})).appendTo(contentArea).accordion({heightStyle: "content", collapsible: true, active: false}).children('h1').attr('data-tooltipmsg', tooltipData);//.tooltip();
				$('#'+movieTitle).json2html($.parseJSON(tooltipData),transform);
				$('.search-term').on('click',function(){
					console.log('attempted removal of search item');
					 $(this).closest('div').remove();
				});
				$('.tooltip-movie-id').on('click',function(){
					$('.ui-layout-east').append($(this).closest('ul').html());
				});
	
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
		        request.url = 'http://localhost:8080/fullSrcMoviesAtm';
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
				url : 'http://localhost:8080/searchmovies',
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
