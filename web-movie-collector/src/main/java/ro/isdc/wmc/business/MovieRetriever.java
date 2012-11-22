package ro.isdc.wmc.business;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;

import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.concurrent.FutureCallback;
import org.apache.http.conn.params.ConnRoutePNames;
import org.apache.http.impl.nio.client.DefaultHttpAsyncClient;
import org.apache.http.nio.client.HttpAsyncClient;
import org.apache.http.nio.reactor.IOReactorException;
import org.apache.http.params.CoreConnectionPNames;
import org.apache.http.util.EntityUtils;
import org.atmosphere.cpr.AtmosphereResource;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Component;

import ro.isdc.wmc.model.HtmlNodePathMapper;
import ro.isdc.wmc.model.SimpleMovieInfo;
import ro.isdc.wmc.parser.impl.SourceParserImpl;

@Component
public class MovieRetriever  {

   /*public MovieRetriever() {
		this.proxy  = new HttpHost("172.17.0.10", 8080) ;
		
	}*/

	public void execute(List<HttpUriRequest> requests, final AtmosphereResource atmoResource,   final HtmlNodePathMapper  htmlNodePathMapper) throws InterruptedException, IOReactorException  {
		
		HttpAsyncClient httpclient = new DefaultHttpAsyncClient();
		initParams(httpclient);
		httpclient.start();
		
		final CountDownLatch latch =  new CountDownLatch(requests.size());
		try {

			for (final HttpUriRequest request : requests) {
				httpclient.execute(request, new FutureCallback<HttpResponse>() {

					public void completed(final HttpResponse response) {
						
						
						latch.countDown();
						try {							
							 String responseAsString = EntityUtils.toString(response.getEntity());
							 SourceParserImpl parser = new SourceParserImpl();
							 String uri = request.getURI().getHost();
							  uri = uri.subSequence(uri.indexOf('.') + 1, uri.lastIndexOf('.')).toString();
							 
							 ArrayList<SimpleMovieInfo> movies = (ArrayList<SimpleMovieInfo>) parser.getMoviesByTitle(responseAsString, uri, htmlNodePathMapper);
							 
							 for (SimpleMovieInfo item : movies) {
								 System.out.println("Title");
								 System.out.println(item.getTitle());
							}
							 
							 final ObjectMapper mapper = new ObjectMapper();
							 String moviesAsJson = mapper.writeValueAsString(movies);
							 
							 System.out.println(moviesAsJson);
							
							 atmoResource.getBroadcaster().broadcast(moviesAsJson);
						} catch (Exception e) {
							// TODO Auto-generated catch block
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
	}
	
	public void execute(final HttpUriRequest request, final AtmosphereResource atmoResource,   final HtmlNodePathMapper  htmlNodePathMapper) throws InterruptedException, IOReactorException  {
		HttpAsyncClient httpclient = new DefaultHttpAsyncClient();
		initParams(httpclient);
		httpclient.start();
		try{
			System.out.println("inainte de httpclient: " + Thread.currentThread().getName());
		httpclient.execute(request, new FutureCallback<HttpResponse>() {

			public void completed(final HttpResponse response) {
				
				
				try {							
					 String responseAsString = EntityUtils.toString(response.getEntity());
					 SourceParserImpl parser = new SourceParserImpl();
					 
					 String uri = request.getURI().getHost();
					 uri = uri.subSequence(uri.indexOf('.') + 1, uri.lastIndexOf('.')).toString();
					 
					 //TODO: Feed the full movie details HTML to the parser
					 // TODO: Send the response to the client
								
				} catch (Exception e) {
					e.printStackTrace();
				}
			}

			public void failed(final Exception ex) {
				System.out.println(request.getRequestLine() + "->" + ex);
			}

			public void cancelled() {
				System.out.println(request.getRequestLine() + " cancelled");
			}

		});	
		} finally {
			System.out.println("httpclient shut down: " + Thread.currentThread().getName());
			httpclient.shutdown();
			
		}
	}




	private void initParams(HttpAsyncClient httpclient) {
		String proxyHost = System.getProperty("http.proxyHost");
		Integer proxyPort = Integer.parseInt(System.getProperty("http.proxyPort"));
		HttpHost proxy  = new HttpHost(proxyHost, proxyPort);
		
		httpclient.getParams()
		.setIntParameter(CoreConnectionPNames.SO_TIMEOUT, 3000)
		.setIntParameter(CoreConnectionPNames.CONNECTION_TIMEOUT, 3000)
		.setIntParameter(CoreConnectionPNames.SOCKET_BUFFER_SIZE, 8 * 1024)
		.setBooleanParameter(CoreConnectionPNames.TCP_NODELAY, true).setParameter(ConnRoutePNames.DEFAULT_PROXY, proxy);
		
	}
}
