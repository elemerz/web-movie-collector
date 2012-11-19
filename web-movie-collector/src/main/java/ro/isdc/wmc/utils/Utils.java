package ro.isdc.wmc.utils;

import java.util.ArrayList;

import org.apache.http.client.methods.HttpGet;

import ro.isdc.wmc.model.MovieURLMapper;
import ro.isdc.wmc.model.SearchRequestModel;
import ro.isdc.wmc.model.SimpleMovie;



public class Utils {
		
	
	public static ArrayList<String> createURLs(SearchRequestModel searchModel, MovieURLMapper urlMapper){
		
		ArrayList<String> webSites = searchModel.getSites();
		ArrayList<String> movies = searchModel.getMovies();
		
		ArrayList<String> finalURLs = new ArrayList<String>();
		
		System.out.println(webSites);
		System.out.println(movies);
		System.out.println(finalURLs);
			
		for (String site : webSites) { 			
			for (String movie : movies) {
				System.out.println(urlMapper.getUrlMap().get(site));
				finalURLs.add(urlMapper.getUrlMap().get(site).replace("%s", movie));
			}
		}
		
		return finalURLs;
	}
	
	public static ArrayList<HttpGet> parseRequestsURLs(ArrayList<String> urls) {
		
		ArrayList<HttpGet> result = new ArrayList<HttpGet>();
		for (String url : urls) {
			result.add(new HttpGet(url));
		}
		
		return result;
	}
	
	public static ArrayList<SimpleMovie> parseMoviesResult(ArrayList<SimpleMovie> moviesArray, String searchTerm) {
		
		ArrayList<String> ids = new ArrayList<String>();
		
		for (SimpleMovie simpleMovie : moviesArray) { 
	/*		if(!simpleMovie.getTitle().contains(searchTerm)) ids.add(moviesArray.indexOf(simpleMovie));*/
		}
		
		
		//moviesArray.remove(simpleMovie)
		//TODO remove duplicate [movie title + year]	
		return (ArrayList<SimpleMovie>) moviesArray.subList(0, 4);
	}
	
}
