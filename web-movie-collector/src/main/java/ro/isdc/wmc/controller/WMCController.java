package ro.isdc.wmc.controller;

import java.io.IOException;
import java.util.Set;

import org.atmosphere.cpr.AtmosphereResource;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ro.isdc.wmc.business.IMovieRetrieverBusinessManager;
import ro.isdc.wmc.controller.util.AtmosphereUtil;
import ro.isdc.wmc.init.InfoSourceConfig;
import ro.isdc.wmc.model.HtmlNodePathMapper;
import ro.isdc.wmc.model.SearchInputModel;


/**
 * Handles requests for the application home page.
 */
@Controller
public class WMCController extends LocaleAwareController{
	
	@Autowired
	private InfoSourceConfig infoSourceConfig;
	
	@Autowired
	HtmlNodePathMapper htmlNodePathMapper;	
	
	@Autowired
	@Qualifier("movieRetrieverBM")
	IMovieRetrieverBusinessManager movieRetrieverBM;
	
	private static final Logger logger = LoggerFactory.getLogger(WMCController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(final Model model) {	 
		Set<String> infoSources = infoSourceConfig.getSiteConfig().getConfigMap().keySet();
		model.addAttribute("infoSources", infoSources);
		return "searchPage"; 
	}
	
	/**
	 * The method where the atmosphere requests arrive.
	 * 
	 * @param atmosphereResource
	 * @param searchModelAsJson
	 * 				the JSON containing the sites and movies
	 * @throws JsonGenerationException
	 * @throws JsonMappingException
	 * @throws IOException
	 */
	@RequestMapping(value = "/srcMoviesAtm", method = RequestMethod.POST)
	@ResponseBody
	public void srcMoviesAtm(AtmosphereResource atmosphereResource, @RequestBody String searchModelAsJson) throws JsonGenerationException, JsonMappingException, IOException {
		AtmosphereUtil.suspend(atmosphereResource); 
		final ObjectMapper mapper = new ObjectMapper();
		SearchInputModel reqSearch = null;
		try {
			reqSearch = mapper.readValue(searchModelAsJson, SearchInputModel.class);
		} catch (JsonParseException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		} catch (JsonMappingException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		} catch (IOException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
		
		try {
			movieRetrieverBM.getBriefMoviesResult(atmosphereResource, reqSearch,  htmlNodePathMapper);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * The method where the atmosphere requests for movie details arrive.
	 * 
	 * @param atmosphereResource
	 * @param searchModelAsJson
	 * 				the JSON containing the sites and movies
	 * @throws JsonGenerationException
	 * @throws JsonMappingException
	 * @throws IOException
	 */
	@RequestMapping(value = "/fullSrcMoviesAtm", method = RequestMethod.POST)
	@ResponseBody
	public void fullSrcMoviesAtm(AtmosphereResource atmosphereResource, @RequestBody String movieId) throws JsonGenerationException, JsonMappingException, IOException {
		AtmosphereUtil.suspend(atmosphereResource); 
		
	}
}
