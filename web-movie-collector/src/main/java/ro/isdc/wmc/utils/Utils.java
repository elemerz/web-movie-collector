package ro.isdc.wmc.utils;

import java.io.IOException;
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
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
 
import ro.isdc.wmc.model.SearchInputModel;
import ro.isdc.wmc.model.SimpleMovieInfo;
import ro.isdc.wmc.to.ConfigInfoSrcTO;
import ro.isdc.wmc.to.MovieTO;
import ro.isdc.wmc.to.SiteConfigTO;


public class Utils {
	
	/**
	 * Generic method for transforming a json to an object.
	 * @param <T>
	 * @param jsonString
	 * @param objectType
	 * @return
	 */
	public static <T extends Object> T getJsonAsObject(String jsonString, Class<T> objectType) {
		Object jsonAsObject = null;
		ObjectMapper mapper = new ObjectMapper();
		try {
			jsonAsObject = mapper.readValue(jsonString, objectType);
		} catch (JsonParseException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		} catch (JsonMappingException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		} catch (IOException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
		return objectType.cast(jsonAsObject);
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
	
public static HttpUriRequest getMovieDetailsURL(SiteConfigTO siteConfig, MovieTO detailsRequestModel) {
				
		Map<String, ConfigInfoSrcTO> configMap = siteConfig.getConfigMap();
		HttpUriRequest uri = null;
		
		ConfigInfoSrcTO configSite =  configMap.get(detailsRequestModel.getSite());
		
		if (configSite != null ) {
			
			if (configSite.getBriefSearchMethod().equalsIgnoreCase("post"))
			{
				Map<String, String> postMap = configSite.getFullPostData();
				Iterator<Entry<String, String>> postIt = postMap.entrySet().iterator();
				
				uri = new HttpPost(configSite.getFullSearchURL());
				HttpParams postParams = new BasicHttpParams();
				
				while(postIt.hasNext()) {
					Entry<String, String> pairsPost = postIt.next();
					
					if(pairsPost.getValue().equalsIgnoreCase("{movieId}")) {
						pairsPost.getValue().replace("{movieId}", detailsRequestModel.getMovieId());
					}
					
					postParams.setParameter(pairsPost.getKey(), pairsPost.getValue());
					System.out.println(pairsPost.getKey() + " = " + pairsPost.getValue());
					}
				uri.setParams(postParams);
				
			}
			// Build the Get URLs 
			else if (configSite.getBriefSearchMethod().equalsIgnoreCase("get")) {
				uri = new HttpGet(configSite.getFullSearchURL().replace("{movieId}", detailsRequestModel.getMovieId()));
			}
			
		}	
		return uri;		
	}
}
