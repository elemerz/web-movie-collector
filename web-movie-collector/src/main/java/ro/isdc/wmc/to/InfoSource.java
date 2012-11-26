package ro.isdc.wmc.to;

import java.util.HashMap;
import java.util.Map;

/**
 * Object containing the configuration data 
 * for all available sites.
 * 
 * @author Ioana.Mocan
 *
 */
public class InfoSource {

	/**
	 * Map containing the information for all sites.
	 */
	private Map<String, MovieInfoSource> configMap = new HashMap<String, MovieInfoSource>();

	/**
	 * @return the configMap
	 */
	public Map<String, MovieInfoSource> getConfigMap() {
		return configMap;
	}

	/**
	 * @param configMap the configMap to set
	 */
	public void setConfigMap(Map<String, MovieInfoSource> configMap) {
		this.configMap = configMap;
	}
	
	
	
	
}
