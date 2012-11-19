package ro.isdc.wmc.business;

import java.util.ArrayList;
import java.util.concurrent.CountDownLatch;

import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.concurrent.FutureCallback;
import org.apache.http.conn.params.ConnRoutePNames;
import org.apache.http.impl.nio.client.DefaultHttpAsyncClient;
import org.apache.http.nio.client.HttpAsyncClient;
import org.apache.http.params.CoreConnectionPNames;
import org.apache.http.util.EntityUtils;

import ro.isdc.wmc.model.BasicMoviesResult;
import ro.isdc.wmc.model.SimpleMovie;
import ro.isdc.wmc.parser.SourceParserUtil;
import ro.isdc.wmc.parser.impl.SourceParserIMDBImpl;
import ro.isdc.wmc.utils.Utils;



public class MovieRetriever {

	public BasicMoviesResult retrieveMoviesFromNetwork(ArrayList<String> urls) throws Exception {
		
		 final HttpHost proxy = new HttpHost("172.17.0.10", 8080);
		    final HttpAsyncClient httpclient = new DefaultHttpAsyncClient();
		    httpclient.getParams().setIntParameter(CoreConnectionPNames.SO_TIMEOUT, 3000).setIntParameter(CoreConnectionPNames.CONNECTION_TIMEOUT, 3000)
		        .setIntParameter(CoreConnectionPNames.SOCKET_BUFFER_SIZE, 8 * 1024).setBooleanParameter(CoreConnectionPNames.TCP_NODELAY, true).setParameter(ConnRoutePNames.DEFAULT_PROXY, proxy);

		    httpclient.start();
		    final BasicMoviesResult resultOBJ = new BasicMoviesResult();
		    
		    try {
		    	
		    	final ArrayList<HttpGet> requests = Utils.parseRequestsURLs(urls);	   
		    		   
			      final CountDownLatch latch = new CountDownLatch(requests.size());
			 
			      for (final HttpGet request : requests) {
			        httpclient.execute(request, new FutureCallback<HttpResponse>() {
	
			          public void completed(final HttpResponse response) {
			            latch.countDown();
			            try {
							 String responseAsString = EntityUtils.toString(response.getEntity());
							 SourceParserIMDBImpl parser = new SourceParserIMDBImpl();
							 ArrayList<SimpleMovie> movies = (ArrayList<SimpleMovie>) parser.getSimpleMovieListFromSite(responseAsString);
							 resultOBJ.setBasicMoviesArray(movies); 
							 
			            } catch (Exception e) {
							e.printStackTrace();
						}
			          }
	
			          public void failed(final Exception ex) {
			            latch.countDown();
			            System.out.println(request.getRequestLine() + "->" + ex);
			          }
	
			          public void cancelled() {
			            latch.countDown();
			            System.out.println(request.getRequestLine() + " cancelled");
			          }
	
			        });
			      }
			      latch.await();
			      System.out.println("Shutting down");
			    } finally {
			      httpclient.shutdown();
			    }
			    System.out.println("Done");
	
		return resultOBJ;
	}
}
