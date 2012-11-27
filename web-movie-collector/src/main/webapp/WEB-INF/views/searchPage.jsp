<%@include file="/WEB-INF/views/pageIncludes.jsp"%>
<header id="header" class="main ui-layout-north ui-helper-clearfix">
	<h2 id="title" class="left"><spring:message code="searchPage.title"/></h2>
	<div class="right">
		<%@include file="/WEB-INF/views/localeChanger.jsp"%>
	</div>	
</header>
<section id="main-section" class="ui-layout-center layout-inner">
 <header class="ui-layout-north user-input-zone">
 	<label for="movieTitle" class="ui-layout-west"><spring:message code="searchPage.movie.title"/></label>
 	<div class="ui-layout-center inputs ui-helper-clearfix">
	 	<input  class="user-input movie-title" placeholder="<spring:message code="searchPage.movie.title.placeholder"/>"/>
	 	<button class="user-input add"><spring:message code="searchPage.button.add"/></button>
 	</div>
 </header>
 <ul class="search-results ui-layout-center">
 	<li>Movie titles here</li>
 </ul>
 <ul class="info-sources ui-layout-south ui-helper-clearfix">
	<c:forEach var="infoSource" items="${infoSources}" varStatus="status">
		<c:if test="${status.first}">
			<li class="info-source"><input type="checkbox" checked="checked" id="${infoSource}" value="${infoSource}" /><label for="${infoSource}">${infoSource}</label></li>
		</c:if>
		<c:if test="${not status.first}">
			<li class="info-source"><input type="checkbox" id="${infoSource}" value="${infoSource}" /><label for="${infoSource}">${infoSource}</label></li>
		</c:if>
	</c:forEach>
 </ul>
 <aside class="ui-layout-east">Movie Details Zone</aside>	
</section>	
<footer class="main ui-layout-south"><h5>Page Footer</h5></footer>
<%-- MovieItemTemplate --%>	
<textarea id="searchItemTmpl" class="ui-helper-hidden"><div><h1>{label}<strong class="search-term"> remove</strong></h1><div id={label}></div></div></textarea>
<%--Messages Component--%>
<input type="hidden" class="messages"
data-searchPage.no.infosource.selected='<spring:message code="searchPage.no.infosource.selected"/>'
data-searchpage.movie.required='<spring:message code="searchPage.movie.required"/>'
data-searchPage.server.error='<spring:message code="searchPage.server.error"/>'
>
