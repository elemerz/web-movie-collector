package ro.isdc.wmc.parser.impl;

import java.util.ArrayList;
import java.util.List;

import org.htmlcleaner.CleanerProperties;
import org.htmlcleaner.HtmlCleaner;
import org.htmlcleaner.SimpleHtmlSerializer;
import org.htmlcleaner.TagNode;
import org.htmlcleaner.XPatherException;
import org.springframework.beans.factory.annotation.Autowired;

import ro.isdc.wmc.model.FullMovie;
import ro.isdc.wmc.model.SimpleMovie;
import ro.isdc.wmc.model.WebsitesXPATHMapper;
import ro.isdc.wmc.parser.SourceParserUtilAPI;

public class SourceParserImpl implements SourceParserUtilAPI{
	
	ArrayList<SimpleMovie> moviesResult = new ArrayList<SimpleMovie>();
	SimpleHtmlSerializer htmlSerializer = null;
	
	@Autowired
	WebsitesXPATHMapper xpathMap;

	/**
	 * Remove scrips from page
	 * 
	 * @param htmlContent
	 * @return
	 */
	public String removeScripts(String htmlContent) {
		
		return htmlContent.replaceAll("<script[\\s\\S]*?(</script>|/>)", "");
	}
	
	/**
	 * Method that retrieves the simple movie list from the html string
	 */
	@Override
	public List<SimpleMovie> getSimpleMovieListFromSite(String htmlContent, String website, WebsitesXPATHMapper websitesXPATHMapper) { 
			
			htmlContent = removeScripts(htmlContent);
			
		    try {
		    	String listXpath = websitesXPATHMapper.getXpathMap().get(website + ".list");
		    	Object[] listOfMovies = cleanWithHtmlCleaner(htmlContent, website, listXpath);
				for (Object listItem : listOfMovies) {
					SimpleMovie movieItem = new SimpleMovie();
					String title = getXpathElement(((TagNode) listItem), websitesXPATHMapper.getXpathMap().get(website + ".title"));
					String year = getXpathElement(((TagNode) listItem), websitesXPATHMapper.getXpathMap().get(website + ".year"));
					String director = getXpathElement(((TagNode) listItem), websitesXPATHMapper.getXpathMap().get(website + ".director"));
					String id = getXpathElement(((TagNode) listItem), websitesXPATHMapper.getXpathMap().get(website + ".id"));

					if(title != null) {
						movieItem.setTitle(title);
						movieItem.setYear(year);
						movieItem.setDirector(director);
						movieItem.setId(id);
						movieItem.setSite(website);
						moviesResult.add(movieItem);	
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
	        
		return moviesResult;
	}

	@Override
	public List<FullMovie> getFullMovieListFromSite(String htmlContent) {
		// TODO Auto-generated method stub
		return null;
	}
	
	/**
	 * Use htmlCleaner as a parser
	 * 
	 * @param htmContent
	 * @return
	 */
	public Object[] cleanWithHtmlCleaner(String htmContent, String website, String listXpath) throws Exception{
			 
			        HtmlCleaner cleaner = new HtmlCleaner();
			        CleanerProperties props = cleaner.getProperties();
			        props.setAllowHtmlInsideAttributes(true);
			        props.setAllowMultiWordAttributes(true);
			        props.setRecognizeUnicodeChars(true);
			        props.setOmitComments(true);
			 
			        TagNode node = cleaner.clean(htmContent);
			        htmlSerializer = new SimpleHtmlSerializer(props);
			        Object[] resultsList = node.evaluateXPath(listXpath);
			        
			        return resultsList;
	}
	
	/**
	 * Retrieve element string using xpath
	 * 
	 * @param movieItem
	 * @param movieXpath
	 * @return
	 * @throws XPatherException
	 */
	public String getXpathElement(TagNode movieItem, String movieXpath) throws XPatherException {
		
		Object[] listOfItems = movieItem.evaluateXPath(movieXpath);
		TagNode xpathItemNode = null;
		String xpathItemString = null;

		if (listOfItems.length > 0) {
			try {
				xpathItemNode = (TagNode) listOfItems[0];
			} catch(Exception e) {
				xpathItemString = listOfItems[0].toString();
			}
			return xpathItemNode != null ? xpathItemNode.getText().toString() : xpathItemString;
		}
		return null;
	}
}
