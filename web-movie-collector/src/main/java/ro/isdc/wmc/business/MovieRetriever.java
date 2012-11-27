package ro.isdc.wmc.business;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CountDownLatch;

import org.apache.http.HeaderIterator;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.params.ClientPNames;
import org.apache.http.client.params.CookiePolicy;
import org.apache.http.concurrent.FutureCallback;
import org.apache.http.conn.params.ConnRoutePNames;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.nio.client.DefaultHttpAsyncClient;
import org.apache.http.nio.client.HttpAsyncClient;
import org.apache.http.nio.reactor.IOReactorException;
import org.apache.http.params.CoreConnectionPNames;
import org.apache.http.util.EntityUtils;
import org.atmosphere.cpr.AtmosphereResource;
import org.atmosphere.cpr.Broadcaster;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Component;

import ro.isdc.wmc.model.HtmlNodePathMapper;
import ro.isdc.wmc.model.SearchInputModel;
import ro.isdc.wmc.model.SimpleMovieInfo;
import ro.isdc.wmc.parser.impl.SourceParserImpl;
import ro.isdc.wmc.to.MovieInfoPostData;
import ro.isdc.wmc.to.MovieInfoSource;
import ro.isdc.wmc.utils.Utils;

@Component
public class MovieRetriever {

	private HttpHost proxy = null;

	public MovieRetriever() {

		String proxyHost = System.getProperty("http.proxyHost");
		String proxyPort = System.getProperty("http.proxyPort");
		if (proxyHost != null && proxyPort != null) {
			proxy = new HttpHost(proxyHost, Integer.parseInt(proxyPort));
		}
	}

	public void execute(final SearchInputModel reqSearch, final List<MovieInfoSource> infoSources, final AtmosphereResource atmoResource,
			final HtmlNodePathMapper htmlNodePathMapper) throws InterruptedException, IOReactorException {

		HttpAsyncClient httpclient = new DefaultHttpAsyncClient();
		initParams(httpclient);
		httpclient.start();

		final CountDownLatch latch = new CountDownLatch(infoSources.size());
		try {

			for (String movieName : reqSearch.getSearchTerms()) {

				for (final MovieInfoSource infoSource : infoSources) {

					final HttpUriRequest uri = Utils.getRequest(infoSource, movieName);

					if (infoSource.getBriefSearchMethod().equalsIgnoreCase("get")) {
						httpclient.execute(uri, new FutureCallback<HttpResponse>() {

							@Override
							public void failed(Exception ex) {
								latch.countDown();
								System.out.println(uri.getRequestLine() + "->" + ex);

							}

							@Override
							public void completed(HttpResponse result) {
								latch.countDown();
								try {
									String responseAsString = EntityUtils.toString(result.getEntity());
									SourceParserImpl parser = new SourceParserImpl();
									String uriRequested = uri.getURI().getHost();
									uriRequested = uriRequested.subSequence(uriRequested.indexOf('.') + 1, uriRequested.lastIndexOf('.')).toString();

									ArrayList<SimpleMovieInfo> movies = (ArrayList<SimpleMovieInfo>) parser.getMoviesByTitle(responseAsString, uriRequested, htmlNodePathMapper);

									for (SimpleMovieInfo item : movies) {
										System.out.println("Title");
										System.out.println(item.getTitle());
									}

									final ObjectMapper mapper = new ObjectMapper();
									String moviesAsJson = mapper.writeValueAsString(movies);

									System.out.println(moviesAsJson);

									if (atmoResource != null) {
										Broadcaster broadcaster = atmoResource.getBroadcaster();
										
										broadcaster.broadcast(moviesAsJson);
									}

								} catch (Exception e) {

									e.printStackTrace();
								}

							}

							@Override
							public void cancelled() {
								latch.countDown();
								System.out.println(uri.getRequestLine() + " cancelled");

							}
						});

					} else if (infoSource.getBriefSearchMethod().equalsIgnoreCase("post")) {

						MovieInfoPostData movieInfoPostData = infoSource.getPost();

						if (movieInfoPostData != null && movieInfoPostData.getUsesCookies().equalsIgnoreCase("true")) {
							// We have to make a sync request to establish cookies
							HttpUriRequest syncRequest = new HttpGet(movieInfoPostData.getFetchCookieURL());

							// Create an instance of HttpClient with the params.
							DefaultHttpClient syncClient = new DefaultHttpClient();
							syncClient.getParams().setParameter(ClientPNames.COOKIE_POLICY, CookiePolicy.BROWSER_COMPATIBILITY);
							initParams(syncClient);

							Map<String, String> briefPostHeaders = movieInfoPostData.getBriefPostHeaders();

							Utils.setHeaders(briefPostHeaders, syncRequest);
							Utils.setHeaders(briefPostHeaders, uri);
							HttpResponse syncResponse = syncClient.execute(syncRequest);

							HeaderIterator it = syncResponse.headerIterator("Set-Cookie");
							String joinedCookies = "";

							while (it.hasNext()) {
								joinedCookies += it.next().getValue() + "; ";
							}

							Utils.setHeaders(movieInfoPostData.getBriefPostBody(), uri, movieName);

							String cookiesTemplate = briefPostHeaders.get("cookies");

							if (cookiesTemplate != null) {
								Map<String, String> replacements = Utils.resolveCookieTokens(joinedCookies);
								String solvedTemplate = Utils.resolveTemplate(cookiesTemplate, replacements);
								uri.addHeader("Cookie", solvedTemplate);
							}

							httpclient.execute(uri, new FutureCallback<HttpResponse>() {

								@Override
								public void failed(Exception ex) {
									// TODO Auto-generated method stub

								}

								@Override
								public void completed(HttpResponse result) {
									try {
										String responseAsString = EntityUtils.toString(result.getEntity());
										System.out.println(responseAsString);
									} catch (ParseException e) {
										// TODO Auto-generated catch block
										e.printStackTrace();
									} catch (IOException e) {
										// TODO Auto-generated catch block
										e.printStackTrace();
									}

								}

								@Override
								public void cancelled() {
									// TODO Auto-generated method stub

								}
							});
						} else {

						}

					}

				}

			}
			latch.await();
			System.out.println("Shutting down");
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			httpclient.shutdown();
		}
		System.out.println("Done");
	}

	public void execute(final HttpUriRequest request, final AtmosphereResource atmoResource, final HtmlNodePathMapper htmlNodePathMapper) throws InterruptedException,
			IOReactorException {
		HttpAsyncClient httpclient = new DefaultHttpAsyncClient();
		initParams(httpclient);
		httpclient.start();
		try {
			System.out.println("inainte de httpclient: " + Thread.currentThread().getName());
			httpclient.execute(request, new FutureCallback<HttpResponse>() {

				public void completed(final HttpResponse response) {

					try {
						String responseAsString = EntityUtils.toString(response.getEntity());
						SourceParserImpl parser = new SourceParserImpl();

						String uri = request.getURI().getHost();
						uri = uri.subSequence(uri.indexOf('.') + 1, uri.lastIndexOf('.')).toString();

						// TODO: Feed the full movie details HTML to the parser
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
		httpclient.getParams().setIntParameter(CoreConnectionPNames.SO_TIMEOUT, 3000).setIntParameter(CoreConnectionPNames.CONNECTION_TIMEOUT, 3000)
				.setIntParameter(CoreConnectionPNames.SOCKET_BUFFER_SIZE, 8 * 1024).setBooleanParameter(CoreConnectionPNames.TCP_NODELAY, true)
				.setParameter(ConnRoutePNames.DEFAULT_PROXY, proxy);
		if (proxy != null) {
			httpclient.getParams().setParameter(ConnRoutePNames.DEFAULT_PROXY, proxy);
		}
	}

	private void initParams(HttpClient httpclient) {
		httpclient.getParams().setIntParameter(CoreConnectionPNames.SO_TIMEOUT, 3000).setIntParameter(CoreConnectionPNames.CONNECTION_TIMEOUT, 3000)
				.setIntParameter(CoreConnectionPNames.SOCKET_BUFFER_SIZE, 8 * 1024).setBooleanParameter(CoreConnectionPNames.TCP_NODELAY, true)
				.setParameter(ConnRoutePNames.DEFAULT_PROXY, proxy);
		if (proxy != null) {
			httpclient.getParams().setParameter(ConnRoutePNames.DEFAULT_PROXY, proxy);
		}
	}
}
