package ro.isdc.wmc.utils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator; 
import java.util.List;
import java.util.Map; 
import java.util.Map.Entry;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CookieStore;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.params.ClientPNames;
import org.apache.http.client.params.CookiePolicy;
import org.apache.http.client.protocol.ClientContext;
import org.apache.http.conn.params.ConnRoutePNames;
import org.apache.http.cookie.Cookie;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpParams;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.http.protocol.HttpContext;
import org.apache.tools.ant.taskdefs.condition.HasMethod;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import ro.isdc.wmc.model.MovieHttpRequest;
import ro.isdc.wmc.model.SearchInputModel;
import ro.isdc.wmc.model.SimpleMovieInfo;
import ro.isdc.wmc.to.MovieInfoPostData;
import ro.isdc.wmc.to.MovieInfoSource;
import ro.isdc.wmc.to.MovieTO;
import ro.isdc.wmc.to.InfoSource;


public class Utils {
	
	private static  final String REX_TEMPLATE_VALUE = "\\$\\{(\\w+)\\}";
	
	public static HttpUriRequest getRequest(MovieInfoSource infoSource, String movieName) {
		
		HttpUriRequest request = null;
		
		if (infoSource.getBriefSearchMethod().equalsIgnoreCase("get")) {
			request = new HttpGet(infoSource.getBriefSearchURL().replace("{title}", movieName));
			
		} else if(infoSource.getBriefSearchMethod().equalsIgnoreCase("post")) {
			request = new HttpPost(infoSource.getBriefSearchURL());
		}
		
		return request;
		
	}
	
	public static boolean isTemplatedValue(final String val) {
		boolean foundMatch = false;
		try {
			Pattern regex = Pattern.compile(REX_TEMPLATE_VALUE);
			Matcher fieldNameMatcher = regex.matcher(val);
			foundMatch = fieldNameMatcher.find();
		} catch (PatternSyntaxException ex) {
			
		}
		return foundMatch;
	}
	
	public static Map<String, String> resolveCookieTokens(final String joinedCookies){
		Map<String, String> result=new HashMap<String, String>();
		String[] tokensArray=joinedCookies.split(";");
		for (int i = 0; i < tokensArray.length; i++) {
			String[] currentTokens=tokensArray[i].split("=");
			String tokenKey = null;
			String tokenValue = null;
			if(currentTokens.length >= 2) {
			 tokenKey=currentTokens[0].trim();
			 tokenValue=currentTokens[1].trim();
			}
			result.put(tokenKey, tokenValue);
		}
		return result;
	}
	//"cookies":"invariant part1 jnk ${xr} bull 2 ; mere  pere ${PHPSESSID}; prune ${_sessionid}; prune2"
	public static String resolveTemplate(final String tmpl, final Map<String, String> replacements){
		String result=tmpl;
		try {
			Pattern regex = Pattern.compile(REX_TEMPLATE_VALUE);
			Matcher fieldNameMatcher = regex.matcher(tmpl);
			while (fieldNameMatcher.find()) {
				try {
					// You can vary the replacement text for each match on-the-fly
					String replacementKey=fieldNameMatcher.group(1);
					String replacementToken=replacements.get(replacementKey);
					String replacement=replacementKey+'='+replacementToken+"; ";
					result = result.replaceAll("\\$\\{"+ replacementKey +"\\}", replacement);
				} catch (IllegalStateException ex) {
				} catch (IllegalArgumentException ex) {
				} catch (IndexOutOfBoundsException ex) {
				} 
			}
		} catch (PatternSyntaxException ex) {
		}
		return result;
	}
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
	
	public static List<MovieHttpRequest> createMoviesHttpReq(List<MovieInfoSource> movieSources, SearchInputModel reqSearch) {
		
		List<MovieHttpRequest> movieHttpRequests = new ArrayList<MovieHttpRequest>();
		MovieHttpRequest movieHttpRequest = new MovieHttpRequest();
		
		String titleReplacement = "{title}";
		
		for (MovieInfoSource movieInfoSource : movieSources) {
			
			for (String searchTerm : reqSearch.getSearchTerms()) {
				
				if(movieInfoSource.getBriefSearchMethod().equalsIgnoreCase("post")){
					
					MovieInfoPostData infoPostData = movieInfoSource.getPost();
					if(infoPostData.getUsesCookies().equalsIgnoreCase("true")){
						//We need to use cookies and we need to create a http context
						// We also need to sync for the cookies with the website
						
						HttpUriRequest syncUriRequest = new HttpGet(infoPostData.getFetchCookieURL());
						syncUriRequest.addHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11"
);
						
						HttpHost proxy = null;
						
						String proxyHost = System.getProperty("http.proxyHost");
						String proxyPort = System.getProperty("http.proxyPort");
						if (proxyHost != null && proxyPort != null) {
							proxy = new HttpHost(proxyHost, Integer.parseInt(proxyPort));
						}
						
						HttpClient httpclient = new DefaultHttpClient();
						httpclient.getParams().setParameter(ClientPNames.COOKIE_POLICY, CookiePolicy.BROWSER_COMPATIBILITY);
						
						if (proxy != null) {
							httpclient.getParams().setParameter(ConnRoutePNames.DEFAULT_PROXY,
									proxy);
						}
					
			           
			            
			            try {
			            	 // Pass local context as a parameter
							HttpResponse response = httpclient.execute(syncUriRequest);
							System.out.println("Check for cookies");
				            }
					
						catch (ClientProtocolException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
						
						
					}
					
					else if (infoPostData.getUsesCookies().equalsIgnoreCase("false")) {
						movieHttpRequest.setHttpContext(null);
					}
					
				}
				else if(movieInfoSource.getBriefSearchMethod().equalsIgnoreCase("get")) {
					// Create MovieHttpRequest for get
				}
				
				movieHttpRequests.add(movieHttpRequest);
			}
		}
		
		return movieHttpRequests;
		
	}




	/**
	 * Method for retrieving the urls for sites.
	 * 
	 * @param siteConfig
	 * @param searchModel
	 * @return
	 */
	//TODO: to retrieve urls from site config object and search input model!!
	/*	public static List<HttpUriRequest> getURLs(SiteConfigTO siteConfig, SearchInputModel searchModel){


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
								//pairsPost.getValue().replace("{title}", movieName);
								postParams.setParameter(pairsPost.getKey(), pairsPost.getValue().replace("{title}", movieName));
								continue;
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
	}*/

	public static List<HttpUriRequest> getURLs(InfoSource siteConfig, SearchInputModel searchModel) {

		Map<String, MovieInfoSource> configMap = siteConfig.getConfigMap();
		List<HttpUriRequest> uriList = new ArrayList<HttpUriRequest>();
		HttpUriRequest uri = null;

		

/*
		for (String movieName : searchModel.getMovies()) {
			System.out.println("Current movie processed from client: " + movieName);

			for (String siteName : searchModel.getSites()) {
				System.out.println("Current website processed from client: "+ siteName);

				//Get the config object for current site
				MovieInfoSource configSite =  configMap.get(siteName);
				
				if (configSite.getBriefSearchMethod().equalsIgnoreCase("post"))
				{
					
					MovieInfoPostData postConfiguration = configSite.getPost();
					
					if(postConfiguration != null) {
						uri = new HttpPost(configSite.getBriefSearchURL());
						uri.setParams(getPostHttpParams(postConfiguration));
						
					}
					
					;
					uriList.add(uri);
					
				}
				else if (configSite.getBriefSearchMethod().equalsIgnoreCase("get")) {
					uri = new HttpGet(configSite.getFullSearchURL().replace(titleReplacement, movieName));
					uriList.add(uri);
				}

			}


		}



*/

		return null;
	}
	public static HttpUriRequest getMovieDetailsURL(InfoSource siteConfig, MovieTO detailsRequestModel) {

		Map<String, MovieInfoSource> configMap = siteConfig.getConfigMap();
		HttpUriRequest uri = null;

		MovieInfoSource configSite =  configMap.get(detailsRequestModel.getSite());

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
	public static HttpParams getPostHttpParams(MovieInfoPostData postConfig) {
		
		HttpParams postParams = new BasicHttpParams();
		
		return null;
		
	}

	public static void setHeaders(Map<String, String> briefPostHeaders,
			HttpUriRequest syncRequest) {
		Iterator it = briefPostHeaders.entrySet().iterator();
		while(it.hasNext()) {
			Map.Entry<String, String> pairs = (Entry<String, String>) it.next();
			if(!isTemplatedValue(pairs.getValue())) {
				syncRequest.addHeader(pairs.getKey(), pairs.getValue());
			}
		}
		
	}

	public static void setHeaders(Map<String, String> briefPostBody,
			HttpUriRequest postRequest, String movieName) {
		
		Iterator it = briefPostBody.entrySet().iterator();
		while(it.hasNext()) {
			Map.Entry<String, String> pairs = (Entry<String, String>) it.next();
			if(pairs.getValue().contains("{title}")) {
				//pairs.setValue(pairs.getValue().replace("{title}", movieName));
				postRequest.addHeader(pairs.getKey(), pairs.getValue().replace("{title}", movieName));
			}
			else
				postRequest.addHeader(pairs.getKey(),pairs.getValue());
		}
	}
}
