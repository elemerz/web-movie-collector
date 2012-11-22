package ro.isdc.wmc.model;

/**
@author Dan Cirja
 */
public class MovieInfo extends SimpleMovieInfo {

	private String rate;
	private String description;
	private String cast;
	private String genre;
	private String runtime;
	
	public MovieInfo() {
		
	}
	public MovieInfo(String id, String title, String year, String director, String source, 
			String rate, String description, String cast, String genre, String runtime) {
		
		super(id, title, year, director, source);
		
		this.rate = rate;
		this.description = description;
		this.cast = cast;
		this.genre = genre;
		this.runtime = runtime;
	}
	
	public String getRate() {
		return rate;
	}
	public void setRate(String rate) {
		this.rate = rate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCast() {
		return cast;
	}
	public void setCast(String cast) {
		this.cast = cast;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getRuntime() {
		return runtime;
	}
	public void setRuntime(String runtime) {
		this.runtime = runtime;
	}
}
