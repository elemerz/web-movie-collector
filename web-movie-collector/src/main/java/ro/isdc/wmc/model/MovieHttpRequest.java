package ro.isdc.wmc.model;

import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.protocol.HttpContext;

public class MovieHttpRequest {
	
private	HttpUriRequest uri;
private	HttpContext httpContext;
/**
 * @return the uri
 */
public HttpUriRequest getUri() {
	return uri;
}
/**
 * @param uri the uri to set
 */
public void setUri(HttpUriRequest uri) {
	this.uri = uri;
}
/**
 * @return the httpContext
 */
public HttpContext getHttpContext() {
	return httpContext;
}
/**
 * @param httpContext the httpContext to set
 */
public void setHttpContext(HttpContext httpContext) {
	this.httpContext = httpContext;
}



}
