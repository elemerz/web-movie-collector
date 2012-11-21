package ro.isdc.wmc.utils;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpParams;

import ro.isdc.wmc.model.SearchInputModel;
import ro.isdc.wmc.model.SimpleMovie;
import ro.isdc.wmc.to.ConfigInfoSrcTO;
import ro.isdc.wmc.to.SiteConfigTO;


public class Utils {
		
	
	public static List<HttpUriRequest> parseRequestsURLs(ArrayList<String> urls) {
		
		List<HttpUriRequest> result = new ArrayList<HttpUriRequest>();
		for (String url : urls) {
			result.add(new HttpGet(url));
		}
		
		return result;
	}
	
	
	/**
	 * Method for retrieving the urls for sites.
	 * 
	 * @param siteConfig
	 * @param searchModel
	 * @return
	 */
	//TODO: to retrieve urls from site config object and search input model!!
	public static List<HttpUriRequest> getURLs(SiteConfigTO siteConfig, SearchInputModel searchModel){
		
		
		Map<String, ConfigInfoSrcTO> configMap = siteConfig.getConfigMap();
		List<HttpUriRequest> uriList = new ArrayList<HttpUriRequest>();
		HttpUriRequest uri;
		
		for (String movieName : searchModel.getMovies()) {
			System.out.println("Current movie processed from client: " + movieName);
			
			for (String siteName : searchModel.getSites()) {
				System.out.println("Current website processed from client: "+ siteName);
				
				ConfigInfoSrcTO configSite =  configMap.get(siteName);
				
				System.out.println("Config object for current request: " +configSite.toString());
				if(configSite != null ) {
					
					// Build the Post URLs and params
					if (configSite.getBriefSearchMethod().equalsIgnoreCase("post"))
					{
						Map<String, String> postMap = configSite.getBriefPostData();
						Iterator<Entry<String, String>> postIt = postMap.entrySet().iterator();
						
						uri = new HttpPost(configSite.getBriefSearchURL());
						HttpParams postParams = new BasicHttpParams();
						
						while(postIt.hasNext()) {
							Entry<String, String> pairsPost = postIt.next();
							
							if(pairsPost.getValue().equalsIgnoreCase("{title}")) {
								pairsPost.getValue().replace("{title}", movieName);
							}
							
							postParams.setParameter(pairsPost.getKey(), pairsPost.getValue());
							System.out.println(pairsPost.getKey() + " = " + pairsPost.getValue());
							}
						uri.setParams(postParams);
						uriList.add(uri);
						
					}
					// Build the Get URLs 
					else if (configSite.getBriefSearchMethod().equalsIgnoreCase("get")) {
						uri = new HttpGet(configSite.getBriefSearchURL().replace("{title}", movieName));
						uriList.add(uri);
					}
				}
				
			}
			
		}
		
		
		return uriList;
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
