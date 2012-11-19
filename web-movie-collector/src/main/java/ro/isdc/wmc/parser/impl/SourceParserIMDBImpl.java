package ro.isdc.wmc.parser.impl;

import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.web.util.HtmlUtils;

import ro.isdc.wmc.config.PropertiesUtil;
import ro.isdc.wmc.model.FullMovie;
import ro.isdc.wmc.model.SimpleMovie;
import ro.isdc.wmc.parser.PathForMovie;
import ro.isdc.wmc.parser.SourceParserUtilAPI;


public class SourceParserIMDBImpl implements SourceParserUtilAPI{
	
	private static final String DIRECTOR_CLASS = "credit";
	private static final String YEAR_CLASS = "year_type";
	private static final String TITLE_TAG = "a";
	private static final String ID_ATTR = "data-tconst";
	private static final String ID_CLASS = "wlb_wrapper";
	private static final String TITLE = "title";
	private static final String SITE = "imdb";
	private static PathForMovie path;
	
	ArrayList<SimpleMovie> moviesResult = new ArrayList<SimpleMovie>();

	static {
		path = new PathForMovie(SITE);
	}

	@Override
	public List<SimpleMovie> getSimpleMovieListFromSite(String htmlContent) { 
		
		Document doc = Jsoup.parse(htmlContent);
		
		System.out.println("Key for map: " + SITE + PropertiesUtil.GENRE_SUFFIX);
		System.out.println("The site paths: " + path.getTitlePath());
		Elements movies = doc.getElementsByClass(TITLE);
		
		for (Element movieElement : movies) {
			if (moviesResult.size() == 5 ) break;
			SimpleMovie currentMovie = new SimpleMovie();
			
			currentMovie.setId(movieElement.getElementsByClass(ID_CLASS).first().attr(ID_ATTR));
			currentMovie.setTitle(HtmlUtils.htmlUnescape(movieElement.getElementsByTag(TITLE_TAG).first().html()));
			currentMovie.setYear(HtmlUtils.htmlUnescape(movieElement.getElementsByClass(YEAR_CLASS).first().html()));
			currentMovie.setDirector(HtmlUtils.htmlUnescape(movieElement.getElementsByClass(DIRECTOR_CLASS).get(0).getElementsByTag(TITLE_TAG).first().html()));
			currentMovie.setSite(SITE);
			//System.out.println(currentMovie.toString());
			
			moviesResult.add(currentMovie);
		}
		
	System.out.println((moviesResult).toString());
		
		return moviesResult;
	}

	@Override
	public List<FullMovie> getFullMovieListFromSite(String htmlContent) {
		// TODO Auto-generated method stub
		return null;
	}
}
