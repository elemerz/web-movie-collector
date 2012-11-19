package ro.isdc.wmc.parser;

import ro.isdc.wmc.config.PropertiesUtil;

/**
@author Dan Cirja
 */
public class PathForMovie {
	
	private String basePath;
	private String idPath; 
	private String titlePath;
	private String yearPath;
	private String directorPath;
	private String ratePath;
	private String descriptionPath;
	private String castPath;
	private String genrePath;
	private String runtimePath;
	
	public PathForMovie(String source) {
		
		this.basePath = PropertiesUtil.getApplicationSourceProperties().getProperty(source + PropertiesUtil.BASE_SELECTOR_SUFFIX);
		this.idPath = PropertiesUtil.getApplicationSourceProperties().getProperty(source + PropertiesUtil.ID_SUFFIX);
		this.titlePath = PropertiesUtil.getApplicationSourceProperties().getProperty(source + PropertiesUtil.TITLE_SUFFIX);
		this.yearPath = PropertiesUtil.getApplicationSourceProperties().getProperty(source + PropertiesUtil.YEAR_SUFFIX);
		this.directorPath = PropertiesUtil.getApplicationSourceProperties().getProperty(source + PropertiesUtil.DIRECTOR_SUFFIX);
		this.ratePath = PropertiesUtil.getApplicationSourceProperties().getProperty(source + PropertiesUtil.RATE_SUFFIX);
		this.descriptionPath = PropertiesUtil.getApplicationSourceProperties().getProperty(source + PropertiesUtil.DESCRIPTION_SUFFIX);
		this.castPath = PropertiesUtil.getApplicationSourceProperties().getProperty(source + PropertiesUtil.CAST_SUFFIX);
		this.genrePath = PropertiesUtil.getApplicationSourceProperties().getProperty(source + PropertiesUtil.GENRE_SUFFIX);
		this.runtimePath = PropertiesUtil.getApplicationSourceProperties().getProperty(source + PropertiesUtil.RUNTIME_SUFFIX);
				
	}
	
	public String getBasePath() {
		return basePath;
	}

	public void setBasePath(String basePath) {
		this.basePath = basePath;
	}

	public String getIdPath() {
		return idPath;
	}

	public void setIdPath(String idPath) {
		this.idPath = idPath;
	}

	public String getTitlePath() {
		return titlePath;
	}

	public void setTitlePath(String titlePath) {
		this.titlePath = titlePath;
	}

	public String getYearPath() {
		return yearPath;
	}

	public void setYearPath(String yearPath) {
		this.yearPath = yearPath;
	}

	public String getDirectorPath() {
		return directorPath;
	}

	public void setDirectorPath(String directorPath) {
		this.directorPath = directorPath;
	}

	public String getRatePath() {
		return ratePath;
	}

	public void setRatePath(String ratePath) {
		this.ratePath = ratePath;
	}

	public String getDescriptionPath() {
		return descriptionPath;
	}

	public void setDescriptionPath(String descriptionPath) {
		this.descriptionPath = descriptionPath;
	}

	public String getCastPath() {
		return castPath;
	}

	public void setCastPath(String castPath) {
		this.castPath = castPath;
	}

	public String getGenrePath() {
		return genrePath;
	}

	public void setGenrePath(String genrePath) {
		this.genrePath = genrePath;
	}

	public String getRuntimePath() {
		return runtimePath;
	}

	public void setRuntimePath(String runtimePath) {
		this.runtimePath = runtimePath;
	}
	
}
