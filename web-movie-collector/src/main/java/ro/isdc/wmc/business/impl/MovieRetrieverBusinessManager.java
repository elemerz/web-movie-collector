package ro.isdc.wmc.business.impl;

import java.util.List;

import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.nio.reactor.IOReactorException;
import org.atmosphere.cpr.AtmosphereResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ro.isdc.wmc.business.IMovieRetrieverBusinessManager;
import ro.isdc.wmc.business.MovieRetriever;
import ro.isdc.wmc.init.InfoSourceConfig;
import ro.isdc.wmc.model.SearchInputModel;
import ro.isdc.wmc.model.WebsitesXPATHMapper;
import ro.isdc.wmc.to.MovieTO;
import ro.isdc.wmc.utils.Utils;

@Component("movieRetrieverBM")
public class MovieRetrieverBusinessManager implements
		IMovieRetrieverBusinessManager {

	@Autowired
	private InfoSourceConfig configApp;
	@Autowired
	private MovieRetriever retriever;
	@Override
	public void getBriefMoviesResult(AtmosphereResource atmosphereResource,
			SearchInputModel reqSearch,  WebsitesXPATHMapper  websitesXPATHMapper) throws IOReactorException,
			InterruptedException {
		final List<HttpUriRequest> requests = Utils.getURLs(getConfigApp()
				.getSiteConfig(), reqSearch);

		retriever.execute(requests, atmosphereResource, websitesXPATHMapper);

	}

	
	/**
	 * @return the configApp
	 */
	public InfoSourceConfig getConfigApp() {
		return configApp;
	}

	/**
	 * @param configApp
	 *            the configApp to set
	 */
	public void setConfigApp(InfoSourceConfig configApp) {
		this.configApp = configApp;
	}

	@Override
	public void getFullMoviesResult(AtmosphereResource atmosphereResource,
			MovieTO detailsRequestModel, WebsitesXPATHMapper  websitesXPATHMapper) throws IOReactorException,
			InterruptedException  {
		final HttpUriRequest request = Utils.getMovieDetailsURLs(getConfigApp().getSiteConfig(), detailsRequestModel);
		
		retriever.execute(request,atmosphereResource, websitesXPATHMapper);
		
	}


	@Override
	public void getFullMoviesResult(AtmosphereResource atmosphereResource,
			MovieTO detailsRequest) {
		// TODO Auto-generated method stub
		
	}


}
