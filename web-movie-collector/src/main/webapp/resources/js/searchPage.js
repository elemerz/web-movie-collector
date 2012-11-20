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