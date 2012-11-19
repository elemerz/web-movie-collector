package ro.isdc.wmc.parser;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.w3c.tidy.Tidy;
import org.xml.sax.SAXException;

import ro.isdc.wmc.model.FullMovie;
import ro.isdc.wmc.model.SimpleMovie;
import se.fishtank.css.selectors.NodeSelectorException;
import se.fishtank.css.selectors.dom.DOMNodeSelector;


public class SourceParserUtil {

	public static final String SOURCE = "batman.html";

	public static void main(String args[]) throws SAXException, IOException,
		ParserConfigurationException, NodeSelectorException { 

		List<FullMovie> movies = getFullMovieListFromSite("imdb", "");
		System.out.println(movies.size());
		for (FullMovie movieItem : movies) {
			System.out.println(movieItem.getTitle() + movieItem.getYear()
					+ movieItem.getDirector() + movieItem.getDescription());
		}
	}
	
	public static List<FullMovie> getFullMovieListFromSite(String siteName, String source) throws NodeSelectorException {
		PathForMovie pathForMovie = new PathForMovie(siteName);
		List<FullMovie> movieList = new ArrayList<FullMovie>();
		
		InputStream inputSource = new ByteArrayInputStream(source.getBytes());

		Tidy tidy = new Tidy();
		tidy.setXHTML(true);
		tidy.setQuiet(true);

		Document document = tidy.parseDOM(inputSource, System.out);

		DOMNodeSelector nodeSelector = new DOMNodeSelector(document);
		// .results .even :nth-child(2) :nth-child(1)

		Node trNodes = nodeSelector.querySelector("#main .results");
		NodeList childNodes = trNodes.getChildNodes();
		for (int i = 0; i < childNodes.getLength(); i++) {

			FullMovie fullMovie = new FullMovie();

			DOMNodeSelector elementSelector = new DOMNodeSelector(
					childNodes.item(i));

			Node titleNode = elementSelector.querySelector(pathForMovie.getTitlePath());
			Node yearNode = elementSelector.querySelector(pathForMovie.getYearPath());
			Node directorNode = elementSelector.querySelector(pathForMovie.getDirectorPath());
			Node rateNode = elementSelector.querySelector(pathForMovie.getRatePath());;
			Node descriptionNode = elementSelector.querySelector(pathForMovie.getDescriptionPath());;
			Node castNode = elementSelector.querySelector(pathForMovie.getCastPath());;
			Node genreNode = elementSelector.querySelector(pathForMovie.getGenrePath());;
			Node runtimeNode = elementSelector.querySelector(pathForMovie.getRuntimePath());;
			
			if (titleNode != null || yearNode != null || directorNode != null || rateNode != null
					|| descriptionNode != null || castNode != null || genreNode != null || runtimeNode != null) {
				
				if (titleNode != null) {
					fullMovie.setTitle(titleNode.getChildNodes().item(0).getNodeValue());
				} else {
					fullMovie.setTitle(null);
				}

				if (yearNode != null) {
					fullMovie.setYear(yearNode.getChildNodes().item(0).getNodeValue());
				} else {
					fullMovie.setYear(null);
				}

				if (directorNode != null) {
					fullMovie.setDirector(directorNode.getChildNodes().item(0).getNodeValue());
				} else {
					fullMovie.setDirector(null);
				}
				if (rateNode != null) {
					fullMovie.setRate(rateNode.getChildNodes().item(0).getNodeValue());
				} else {
					fullMovie.setRate(null);
				}
				
				if (descriptionNode != null) {
					fullMovie.setDescription(descriptionNode.getChildNodes().item(0).getNodeValue());
				} else {
					fullMovie.setDescription(null);
				}
				
				if (castNode != null) {
					fullMovie.setCast(castNode.getChildNodes().item(0).getNodeValue());
				} else {
					fullMovie.setCast(null);
				}
				
				if (genreNode != null) {
					fullMovie.setGenre(genreNode.getChildNodes().item(0).getNodeValue());
				} else {
					fullMovie.setGenre(null);
				}
				if (runtimeNode != null) {
					fullMovie.setRuntime(runtimeNode.getChildNodes().item(0).getNodeValue());
				} else {
					fullMovie.setRuntime(null);
				}
				
				movieList.add(fullMovie);
			}

		}
		
		return movieList;
		
	}

	public static List<SimpleMovie> getSimpleMovieListFromSite(String siteName,
			String source) throws SAXException, IOException,
			ParserConfigurationException, NodeSelectorException {

		PathForMovie pathForMovie = new PathForMovie(siteName);

		List<SimpleMovie> movieList = new ArrayList<SimpleMovie>();

		//TODO: Change the way the information is taken as input from String to InputStream
		InputStream inputSource = new ByteArrayInputStream(source.getBytes());

		Tidy tidy = new Tidy();
		tidy.setXHTML(true);
		tidy.setQuiet(true);

		Document document = tidy.parseDOM(inputSource, System.out);

		DOMNodeSelector nodeSelector = new DOMNodeSelector(document);
		// .results .even :nth-child(2) :nth-child(1)

		Node trNodes = nodeSelector.querySelector(pathForMovie.getBasePath());
		NodeList childNodes = trNodes.getChildNodes();
		for (int i = 0; i < childNodes.getLength(); i++) {

			SimpleMovie simpleMovie = new SimpleMovie();

			DOMNodeSelector elementSelector = new DOMNodeSelector(
					childNodes.item(i));

			Node titleNode = elementSelector.querySelector(pathForMovie.getTitlePath());
			Node yearNode = elementSelector.querySelector(pathForMovie.getYearPath());
			Node directorNode = elementSelector.querySelector(pathForMovie.getDirectorPath());
			
			if (titleNode != null || yearNode != null || directorNode != null) {
				if (titleNode != null) {
					simpleMovie.setTitle(titleNode.getChildNodes().item(0)
							.getNodeValue());
				} else {
					simpleMovie.setTitle(null);
				}

				if (yearNode != null) {
					simpleMovie.setYear(yearNode.getChildNodes().item(0)
							.getNodeValue());
				} else {
					simpleMovie.setYear(null);
				}

				if (directorNode != null) {
					simpleMovie.setDirector(directorNode.getChildNodes()
							.item(0).getNodeValue());
				} else {
					simpleMovie.setDirector(null);
				}

				movieList.add(simpleMovie);
			}

		}

		return movieList;
	}
}
