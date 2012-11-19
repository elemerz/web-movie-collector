package ro.isdc.wmc.parser;

import java.util.List;

import ro.isdc.wmc.model.FullMovie;
import ro.isdc.wmc.model.SimpleMovie;


public interface SourceParserUtilAPI {
	
		
	public List<SimpleMovie> getSimpleMovieListFromSite(String htmlContent);
	
	public List<FullMovie> getFullMovieListFromSite(String htmlContent);
	
}
