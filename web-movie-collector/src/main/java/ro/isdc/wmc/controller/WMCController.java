package ro.isdc.wmc.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;

import org.atmosphere.cpr.AtmosphereResource;
import org.atmosphere.cpr.Broadcaster;
import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ro.isdc.wmc.business.MovieRetriever;
import ro.isdc.wmc.controller.util.AtmosphereUtil;
import ro.isdc.wmc.model.BasicMoviesResult;
import ro.isdc.wmc.model.MovieURLMapper;
import ro.isdc.wmc.model.SearchRequestModel;
import ro.isdc.wmc.model.SimpleMovie;
import ro.isdc.wmc.utils.Utils;


/**
 * Handles requests for the application home page.
 */
@Controller
public class WMCController {
	
	@Autowired
	MovieURLMapper urlSearchMapper;
	
	private static final Logger logger = LoggerFactory.getLogger(WMCController.class);
	
	/**
	 * The default mapping takes us to the Search Page.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(final Model model) {
		//TODO: Obtain info sources from config json
//		List<ConfigInfoSource> infoSources= new ArrayList<E>(ConfigInfoSource);
//		model.addAttribute("infoSources",infoSources);
		return "searchPage"; 
	}
	
	@RequestMapping(value = "/searchmovies", 
            method = RequestMethod.POST,consumes = "application/json", produces = "application/json")
	public @ResponseBody BasicMoviesResult bloop2(@RequestBody SearchRequestModel searchModel) {
		
		
		ArrayList<String> urls = Utils.createURLs(searchModel, urlSearchMapper);
		
		for (String url : urls) {
			System.out.println(url);
		}
		MovieRetriever movieRetrieval = new MovieRetriever();
		BasicMoviesResult moviesResult = null;
		
		
		try {
			moviesResult = movieRetrieval.retrieveMoviesFromNetwork(urls);
		} catch (Exception e) {
			e.printStackTrace();
		}

	//System.out.println(moviesResult.getBasicMoviesArray().toString());
		return moviesResult;
	}
	
	@RequestMapping(value="/srcMoviesAtm")
	public @ResponseBody void srcMoviesAtm(AtmosphereResource atmosphereResource){
		final ObjectMapper mapper = new ObjectMapper();
	
		AtmosphereUtil.suspend(atmosphereResource); 
		System.out.println("am intrat in metoda srcMoviesAtm");

        final Broadcaster bc = atmosphereResource.getBroadcaster();
        
        String sessId = atmosphereResource.getRequest().getSession().getId();
        
        logger.info("Atmo Resource Size: " + bc.getAtmosphereResources().size());
        bc.scheduleFixedBroadcast(new Callable<String>() {

            //@Override
            public String call() throws Exception {

                //final SearchResults results = twitterTemplate.searchOperations().search("world", 1, 5, sinceId, 0);

               //logger.info("sinceId: " + sinceId + "; maxId: " + results.getMaxId());

                //sinceId = results.getMaxId();
            	SearchRequestModel sc = new SearchRequestModel();
            	ArrayList<String> urls = Utils.createURLs(sc, urlSearchMapper);
        		MovieRetriever movieRetrieval = new MovieRetriever();
        		BasicMoviesResult moviesResult = null;
        		
        		try {
        			//moviesResult = movieRetrieval.retrieveMoviesFromNetwork(urls);
        		} catch (Exception e) {
        			e.printStackTrace();
        		}

        	//System.out.println(moviesResult.getBasicMoviesArray().toString());
        	moviesResult = new BasicMoviesResult();
        	ArrayList<SimpleMovie> basicMoviesArray = new ArrayList<SimpleMovie>();
        	SimpleMovie sm = new SimpleMovie();
        	sm.setTitle("movie");
        	basicMoviesArray.add(sm);
        	moviesResult.setBasicMoviesArray(basicMoviesArray);
        	System.out.println(moviesResult.getBasicMoviesArray());
            String json = mapper.writeValueAsString(moviesResult);
            System.out.println(json);
        	return json;
            }

        }, 10, TimeUnit.SECONDS);
	}
}
