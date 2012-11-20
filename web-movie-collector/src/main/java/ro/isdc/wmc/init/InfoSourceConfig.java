package ro.isdc.wmc.init;

import java.io.IOException;
import java.io.InputStream;
import java.util.Scanner;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ro.isdc.wmc.to.SiteConfigTO;

/**
 * Singleton class for obtaining the application's
 * configurations.
 * The path to the config file is configured through Spring.
 * 
 * @author Ioana.Mocan
 *
 */
public class InfoSourceConfig {
	
	private static final Logger logger = LoggerFactory.getLogger(InfoSourceConfig.class);
	
	/**
	 * The path to the json config file.
	 */
	public String configPath;

	/**
	 * Object containing the information for all sites.
	 */
	public SiteConfigTO siteConfig;
	
	/**
	 * Method for reading sites configuration file.
	 */
	public void load(){
		InputStream inputStream = InfoSourceConfig.class.getClassLoader().getResourceAsStream(getConfigPath());
		String movieConfig = streamToString(inputStream);
		final ObjectMapper mapper = new ObjectMapper();
		try {
			this.setSiteConfig(mapper.readValue(movieConfig, SiteConfigTO.class));
		} catch (JsonParseException e) {
			logger.error("Cannot parse json file.", e);
			e.printStackTrace();
		} catch (JsonMappingException e) {
			logger.error("Json mapping error.", e);
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Convert an InputStream to a String.
	 * 
	 * @param is
	 * 			the InputStream to be converted
	 * @return
	 * 			the string 
	 */
	//TODO: to be moved to Utils
	private static String streamToString(InputStream is) {
		try {
			return new Scanner(is, "UTF-8").useDelimiter("\\A").next();
		} catch (java.util.NoSuchElementException e) {
			return "";
		}
	}

	/**
	 * @return the configPath
	 */
	public String getConfigPath() {
		return configPath;
	}

	/**
	 * @param configPath the configPath to set
	 */
	public void setConfigPath(String configPath) {
		this.configPath = configPath;
	}

	/**
	 * @return the siteConfig
	 */
	public SiteConfigTO getSiteConfig() {
		return siteConfig;
	}

	/**
	 * @param siteConfig the siteConfig to set
	 */
	public void setSiteConfig(SiteConfigTO siteConfig) {
		this.siteConfig = siteConfig;
	}
	
}
