package ro.isdc.wmc.parser.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import ro.isdc.wmc.model.ElementLocalizerType;
import ro.isdc.wmc.model.HtmlNodePathMapper;
import ro.isdc.wmc.model.MovieInfo;
import ro.isdc.wmc.model.SimpleMovieInfo;
import ro.isdc.wmc.parser.SourceParser;

public class SourceParserImpl implements SourceParser {
	
	@Autowired
	HtmlNodePathMapper xpathMap;

	/**
	 * Remove scrips from page
	 * 
	 * @param htmlContent
	 * @return
	 */
	private String removeScripts(String htmlContent) {
		
		return htmlContent.replaceAll("<script[\\s\\S]*?(</script>|/>)", "");
	}
	
	/**
	 * Returns the type of the element localizer path 
	 * (eg. xpath, css3path, ...)
	 * 
	 * @param htmlNodePathMapper
	 * @return
	 */
	private ElementLocalizerType getElementLocalizerType(HtmlNodePathMapper htmlNodePathMapper) {
		String key = htmlNodePathMapper.getNodePathMap().keySet().iterator().next();
		String localizerPath = htmlNodePathMapper.getNodePathMap().get(key);
		
		return localizerPath.contains("/") ? ElementLocalizerType.XPATH : ElementLocalizerType.CSS3PATH;
	}
	
	
	/**
	 * Method that retrieves the simple movie list from the html string
	 */
	@Override
	public List<SimpleMovieInfo> getMoviesByTitle(String htmlContent, String websiteId, HtmlNodePathMapper htmlNodePathMapper) { 
			
			ElementLocalizerType elementLocalizerType = getElementLocalizerType(htmlNodePathMapper);
			
			List<SimpleMovieInfo> results = new ArrayList<SimpleMovieInfo>();
			htmlContent = removeScripts(htmlContent);
			
			switch (elementLocalizerType) {
			case XPATH :
				results = (new XPathLocalizer()).getMoviesByTitle(htmlContent, websiteId, htmlNodePathMapper);
				break;

			case CSS3PATH :
				results = (new CSS3PathLocalizer()).getMoviesByTitle(htmlContent, websiteId, htmlNodePathMapper);
				break;
				
			default:
				break;
			}
	        
		return results;
	}

	@Override
	public MovieInfo getMovieDetails(String htmlContent, String websiteId, HtmlNodePathMapper websitesXPATHMapper) {
		// TODO to be implemented
		return null;
	}
}
