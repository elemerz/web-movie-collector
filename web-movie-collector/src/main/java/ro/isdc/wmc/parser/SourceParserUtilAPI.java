package ro.isdc.wmc.parser;

import java.util.List;

import ro.isdc.wmc.model.FullMovie;
import ro.isdc.wmc.model.SimpleMovie;
import ro.isdc.wmc.model.WebsitesXPATHMapper;


public interface SourceParserUtilAPI {
	
		
	public List<SimpleMovie> getSimpleMovieListFromSite(String htmlContent, String website, WebsitesXPATHMapper websitesXPATHMapper);
	
	public List<FullMovie> getFullMovieListFromSite(String htmlContent);
	
}
