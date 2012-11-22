package ro.isdc.wmc.parser.impl;

import java.util.ArrayList;
import java.util.List;

import org.htmlcleaner.CleanerProperties;
import org.htmlcleaner.HtmlCleaner;
import org.htmlcleaner.SimpleHtmlSerializer;
import org.htmlcleaner.TagNode;
import org.htmlcleaner.XPatherException;

import ro.isdc.wmc.model.HtmlNodePathMapper;
import ro.isdc.wmc.model.MovieInfo;
import ro.isdc.wmc.model.SimpleMovieInfo;

public class XPathLocalizer  implements ElementLocalizer {
	
	ArrayList<SimpleMovieInfo> moviesResult = new ArrayList<SimpleMovieInfo>();
	SimpleHtmlSerializer htmlSerializer = null;	

	@Override
	public List<SimpleMovieInfo> getMoviesByTitle(String htmlContent, String websiteId, HtmlNodePathMapper htmlNodePathMapper) {
		
	    try {
	    	String listXpath = htmlNodePathMapper.getNodePathMap().get(websiteId + ".list");
	    	Object[] listOfMovies = cleanWithHtmlCleaner(htmlContent, websiteId, listXpath);
			for (Object listItem : listOfMovies) {
				SimpleMovieInfo movieItem = new SimpleMovieInfo();
				String title = getXpathElement(((TagNode) listItem), htmlNodePathMapper.getNodePathMap().get(websiteId + ".title"));
				String year = getXpathElement(((TagNode) listItem), htmlNodePathMapper.getNodePathMap().get(websiteId + ".year"));
				String director = getXpathElement(((TagNode) listItem), htmlNodePathMapper.getNodePathMap().get(websiteId + ".director"));
				String id = getXpathElement(((TagNode) listItem), htmlNodePathMapper.getNodePathMap().get(websiteId + ".id"));

				if(title != null) {
					movieItem.setTitle(title);
					movieItem.setYear(year);
					movieItem.setDirector(director);
					movieItem.setId(id);
					movieItem.setSite(websiteId);
					moviesResult.add(movieItem);	
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	    
		return moviesResult;
	}

	@Override
	public MovieInfo getMovieDetails(String htmlContent, String websiteId,
			HtmlNodePathMapper websitesXPATHMapper) {
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
