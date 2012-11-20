package ro.isdc.wmc.model;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Qualifier;

@Qualifier("websitesXPATHMapper")
public class WebsitesXPATHMapper {

	 HashMap<String,String> xpathMap;

	public HashMap<String, String> getXpathMap() {
		return xpathMap;
	}

	public void setXpathMap(HashMap<String, String> xpathMap) {
		this.xpathMap = xpathMap;
	}
}
