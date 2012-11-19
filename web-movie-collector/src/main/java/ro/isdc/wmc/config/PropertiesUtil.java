package ro.isdc.wmc.config;

import java.io.IOException;
import java.util.Properties;

public class PropertiesUtil {
	
	public static final String BASE_SELECTOR_SUFFIX = ".base.table";
	public static final String ID_SUFFIX = ".id.path";
	public static final String TITLE_SUFFIX = ".title.path";
	public static final String YEAR_SUFFIX = ".year.path";
	public static final String DIRECTOR_SUFFIX = ".director.path";
	public static final String RATE_SUFFIX = ".rate.path";
	public static final String DESCRIPTION_SUFFIX = ".description.path";
	public static final String CAST_SUFFIX = ".cast.path";
	public static final String GENRE_SUFFIX = ".genre.path";
	public static final String RUNTIME_SUFFIX = ".runtime.path";
	

	public static Properties getApplicationSourceProperties() {
		Properties props = new Properties();
		try {
			props.load(PropertiesUtil.class.getClassLoader().getResourceAsStream("application.properties"));
		} catch (IOException e) {
			props = null;
			e.printStackTrace();
		}
		return props;
	}
	public static void main(String args[]) {
		System.out.println(PropertiesUtil.getApplicationSourceProperties().getProperty("imdb.base.table"));
	}
}
