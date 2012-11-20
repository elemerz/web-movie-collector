package ro.isdc.wmc.model;

import java.util.ArrayList;

public class SearchInputModel {
	
	private ArrayList<String> movies = new ArrayList<String>();
	private ArrayList<String> sites = new ArrayList<String>();
	
	public ArrayList<String> getMovies() {
		return movies;
	}
	public void setMovies(ArrayList<String> movies) {
		this.movies = movies;
	}
	public ArrayList<String> getSites() {
		return sites;
	}
	public void setSites(ArrayList<String> sites) {
		this.sites = sites;
	}
	
	@Override
	public String toString() {
		String returnValue = "\n movies: ";
		
		for(int i=0; i < movies.size(); i++)
		{
			returnValue += "\n" + movies.get(i);
		}
		
		returnValue += "\n sites: ";
				for (int i = 0; i< sites.size(); i++)
				{
					returnValue += "\n" + sites.get(i) ;
				}
		return returnValue;
	}
}
