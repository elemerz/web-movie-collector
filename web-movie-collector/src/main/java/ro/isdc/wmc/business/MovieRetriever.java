package ro.isdc.wmc.business;

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

public class MovieRetriever  {

	private final HttpHost proxy;
	private HttpAsyncClient httpclient;
	
	public MovieRetriever(List<HttpUriRequest> requests) throws IOReactorException {
		this.proxy  = new HttpHost("172.17.0.10", 8080) ;
		this.httpclient = new DefaultHttpAsyncClient();
		initParams();
		
	}

	public  MovieRetriever(List<HttpUriRequest> requests , AtmosphereResource atmoResource ) throws IOReactorException {
		this.proxy  = new HttpHost("172.17.0.10", 8080) ;
		this.httpclient = new DefaultHttpAsyncClient();
		initParams();
	}	

	public void execute(List<HttpUriRequest> requests, AtmosphereResource atmoResource) throws InterruptedException  {
		final CountDownLatch latch =  new CountDownLatch(requests.size());
		try {

			for (final HttpUriRequest request : requests) {
				httpclient.execute(request, new FutureCallback<HttpResponse>() {

					public void completed(final HttpResponse response) {
						
						//TODO: Pass the parser the html with a parameter saying what kind of request it was 
						// short movie list or verbose or details
						
						
						//TODO: Broadcast the response to client by using the atmoResource broadcaster
						
						latch.countDown();
						System.out.println(request.getRequestLine() + "->" + response.getStatusLine()+
								" \n Request type -> "+ request.getMethod() );
						try {
							System.out.println("Response html from server was: " + EntityUtils.toString(response.getEntity()));
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



	private void initParams() {
		this.httpclient.getParams()
		.setIntParameter(CoreConnectionPNames.SO_TIMEOUT, 3000)
		.setIntParameter(CoreConnectionPNames.CONNECTION_TIMEOUT, 3000)
		.setIntParameter(CoreConnectionPNames.SOCKET_BUFFER_SIZE, 8 * 1024)
		.setBooleanParameter(CoreConnectionPNames.TCP_NODELAY, true).setParameter(ConnRoutePNames.DEFAULT_PROXY, proxy);
		this.httpclient.start();
	}


}
