<%@include file="/WEB-INF/views/pageIncludes.jsp"%>
<header id="header" class="main ui-layout-north ui-helper-clearfix">
	<h2 id="title" class="ui-layout-center left"><spring:message code="searchPage.title"/></h2>
	<div class="ui-layout-east right">
		<%@include file="/WEB-INF/views/localeChanger.jsp"%>
	</div>	
</header>
<section id="main-section" class="ui-layout-center layout-inner">
 <header class="ui-layout-north user-input-zone">
 	<label for="movieTitle" class="ui-layout-west"><spring:message code="searchPage.movie.title"/></label>
 	<input  class="user-input movie-title ui-layout-center" placeholder="<spring:message code="searchPage.movie.title.placeholder"/>"/>
 	<button class="search-button ui-layout-east user-input add"><spring:message code="searchPage.button.add"/></button>
 </header>
 <ul class="search-results ui-layout-center">
 	<%-- Search Results Go Here --%>
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
 <aside class="ui-layout-east"/>	
</section>	
<footer class="main ui-layout-south"><h5 class="page-footer"><%@include file="/WEB-INF/views/footer.jsp"%></h5></footer>

<%-- MovieItemTemplate --%>	
<textarea id="searchItemTmpl" class="ui-helper-hidden"><div><h1>{label}<strong class="search-term"><spring:message code="searchPage.button.remove"/></strong></h1><div id={label}></div></div></textarea>
<%--Messages Component--%>
<input type="hidden" class="messages"
data-search-url='searchMovies'
data-searchPage.no.infosource.selected='<spring:message code="searchPage.no.infosource.selected"/>'
data-searchpage.movie.required='<spring:message code="searchPage.movie.required"/>'
data-searchPage.server.error='<spring:message code="searchPage.server.error"/>'
>
