package ro.isdc.wmc.parser;

import java.util.List;

import ro.isdc.wmc.model.HtmlNodePathMapper;
import ro.isdc.wmc.model.MovieInfo;
import ro.isdc.wmc.model.SimpleMovieInfo;

public interface SourceParser {
		
	public List<SimpleMovieInfo> getMoviesByTitle(final String htmlContent, final String websiteId, final HtmlNodePathMapper htmlNodePathMapper);
	
	public MovieInfo getMovieDetails(final String htmlContent, final String websiteId, final HtmlNodePathMapper htmlNodePathMapper);
}
