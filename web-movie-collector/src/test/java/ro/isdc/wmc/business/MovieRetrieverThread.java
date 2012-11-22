package ro.isdc.wmc.business;

import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.nio.reactor.IOReactorException; 

import ro.isdc.wmc.business.MovieRetriever;

public class MovieRetrieverThread extends Thread {

	private MovieRetriever mr = new MovieRetriever();
	
	
	public void run() { 
    	/*//Code
		System.out.println(Thread.currentThread().getName());
		HttpUriRequest req = new HttpGet("www.imdb.com");
		try {
			mr.execute(req);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOReactorException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
*/    }
}
