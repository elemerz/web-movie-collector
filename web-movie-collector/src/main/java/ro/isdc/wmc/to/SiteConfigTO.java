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
public class SiteConfigTO {

	/**
	 * Map containing the information for all sites.
	 */
	private Map<String, ConfigInfoSrcTO> configMap = new HashMap<String, ConfigInfoSrcTO>();

	/**
	 * @return the configMap
	 */
	public Map<String, ConfigInfoSrcTO> getConfigMap() {
		return configMap;
	}

	/**
	 * @param configMap the configMap to set
	 */
	public void setConfigMap(Map<String, ConfigInfoSrcTO> configMap) {
		this.configMap = configMap;
	}
	
	
}
