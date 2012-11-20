package ro.isdc.wmc.to;

import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;

/**
 * Object containing the common data for each site.
 * 
 * @author Ioana.Mocan
 *
 */
public class ConfigInfoSrcTO {
	
	/**
	 * The url for the site.
	 */
	private String briefSearchURL;
	
	/**
	 * The url for full movie details.
	 */
	private String fullSearchURL;
	
	/**
	 * The HTTP method to be used.
	 */
	private String briefSearchMethod;
	
	/**
	 * The HTTP method to be used for full movie details.
	 */
	private String fullSearchMethod;
	
	/**
	 * Film sheet identifier.
	 */
	private String filmSheetPageIdentifier;
	
	/**
	 * Film list identifier.
	 */
	private String filmListPageIdentifier;
	
	/**
	 * Map containing the data for the POST method.
	 */
	private Map<String, String> briefPostData;
	
	/**
	 * Map containing the data for the POST method for full movie details.
	 */
	private Map<String, String> fullPostData;

	
	/**
	 * @return the filmSheetPageIdentifier
	 */
	public String getFilmSheetPageIdentifier() {
		return filmSheetPageIdentifier;
	}

	/**
	 * @param filmSheetPageIdentifier the filmSheetPageIdentifier to set
	 */
	public void setFilmSheetPageIdentifier(String filmSheetPageIdentifier) {
		this.filmSheetPageIdentifier = filmSheetPageIdentifier;
	}

	/**
	 * @return the filmListPageIdentifier
	 */
	public String getFilmListPageIdentifier() {
		return filmListPageIdentifier;
	}

	/**
	 * @param filmListPageIdentifier the filmListPageIdentifier to set
	 */
	public void setFilmListPageIdentifier(String filmListPageIdentifier) {
		this.filmListPageIdentifier = filmListPageIdentifier;
	}

	
	/**
	 * @return the fullSearchURL
	 */
	public String getFullSearchURL() {
		return fullSearchURL;
	}

	/**
	 * @param fullSearchURL the fullSearchURL to set
	 */
	public void setFullSearchURL(String fullSearchURL) {
		this.fullSearchURL = fullSearchURL;
	}

	/**
	 * @return the fullSearchMethod
	 */
	public String getFullSearchMethod() {
		return fullSearchMethod;
	}

	/**
	 * @param fullSearchMethod the fullSearchMethod to set
	 */
	public void setFullSearchMethod(String fullSearchMethod) {
		this.fullSearchMethod = fullSearchMethod;
	}

	/**
	 * @return the fullPostData
	 */
	public Map<String, String> getFullPostData() {
		return fullPostData;
	}

	/**
	 * @param fullPostData the fullPostData to set
	 */
	public void setFullPostData(Map<String, String> fullPostData) {
		this.fullPostData = fullPostData;
	}
	
	/**
	 * @return the briefSearchURL
	 */
	public String getBriefSearchURL() {
		return briefSearchURL;
	}

	/**
	 * @param briefSearchURL the briefSearchURL to set
	 */
	public void setBriefSearchURL(String briefSearchURL) {
		this.briefSearchURL = briefSearchURL;
	}

	/**
	 * @return the briefSearchMethod
	 */
	public String getBriefSearchMethod() {
		return briefSearchMethod;
	}

	/**
	 * @param briefSearchMethod the briefSearchMethod to set
	 */
	public void setBriefSearchMethod(String briefSearchMethod) {
		this.briefSearchMethod = briefSearchMethod;
	}

	/**
	 * @return the briefPostData
	 */
	public Map<String, String> getBriefPostData() {
		return briefPostData;
	}

	/**
	 * @param briefPostData the briefPostData to set
	 */
	public void setBriefPostData(Map<String, String> briefPostData) {
		this.briefPostData = briefPostData;
	}

	/*Returns a String representation of the ConfigInfoSrcTO Object 
	 * 
	 */
	@Override
	public String toString() {
		String result = new String();
		
		result = "\n\n SEARCH URL: " + this.getBriefSearchURL() + "\n" 
				+ "SEARCH METHOD: " + this.getBriefSearchMethod() + "\n";
		if (this.getBriefSearchMethod().equalsIgnoreCase("post")) {
			
			Map<String, String> postMap = this.getBriefPostData();
			Iterator<Entry<String, String>> postIt = postMap.entrySet().iterator();
			
			while(postIt.hasNext()) {
				result += "\n Post data params are: ";
				Entry<String, String> pairsPost = postIt.next();
				
				result += pairsPost.getKey() + ": " + pairsPost.getValue() +"\n";
			}
		}
		else if (this.getBriefSearchMethod().equalsIgnoreCase("get")) {
			result += "SHEET PAGE ID: " + this.getFilmSheetPageIdentifier() + "\n"
					+ "LIST PAGE ID: " + this.getFilmListPageIdentifier();
		}
		return result;
	}
	
	

}
