package ro.isdc.wmc.business;

import org.apache.http.nio.reactor.IOReactorException;
import org.atmosphere.cpr.AtmosphereResource;

import ro.isdc.wmc.model.SearchInputModel;

/**
 * Interface defining the contract for 
 * movie retriever implementations.
 * 
 * @author Ioana.Mocan
 *
 */
public interface IMovieRetrieverBusinessManager {
	
	/**
	 * Method for retrieving brief information about movies.
	 * 
	 * @param atmosphereResource
	 * 				the Atmosphere resource to which to broadcast result
	 * @param reqSearch
	 * 				the object containing the movies and sites
	 * @throws IOReactorException
	 * @throws InterruptedException
	 */
	void getBriefMoviesResult(AtmosphereResource atmosphereResource, SearchInputModel reqSearch) throws IOReactorException, InterruptedException;

	/**
	 * Method for retrieving full information about one movie.
	 * @param atmosphereResource
	 * 			the Atmosphere resource to which to broadcast result
	 * @param movieID
	 * 			the movie id for which to get details
	 */
	void getFullMoviesResult(AtmosphereResource atmosphereResource, String movieID);
}
