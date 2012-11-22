package ro.isdc.wmc.parser.impl;

import java.util.List;

import ro.isdc.wmc.model.HtmlNodePathMapper;
import ro.isdc.wmc.model.MovieInfo;
import ro.isdc.wmc.model.SimpleMovieInfo;

public interface ElementLocalizer {
	
	public List<SimpleMovieInfo> getMoviesByTitle(String htmlContent, String websiteId, HtmlNodePathMapper htmlNodePathMapper);
	
	public MovieInfo getMovieDetails(String htmlContent, String websiteId, HtmlNodePathMapper websitesXPATHMapper);
}
