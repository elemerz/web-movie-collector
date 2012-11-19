package ro.isdc.wmc.model;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Qualifier;
	
@Qualifier("movieURLMapper")
public class MovieURLMapper {
	
	 HashMap<String,String> urlMap;
	
	 public HashMap<String, String> getUrlMap() {
	  return urlMap;
	 }
	
	 public void setUrlMap(HashMap<String, String> urlMap) {
	  this.urlMap = urlMap;
	 }
}