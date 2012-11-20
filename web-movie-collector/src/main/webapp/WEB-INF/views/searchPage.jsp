<%@include file="/WEB-INF/views/pageIncludes.jsp"%>
<form class="frm ui-helper-clearfix">
	<div id="titleInput" class="ui-layout-north">
		<input class="movie-title ui-layout-center" type="text" placeholder="<spring:message code="searchPage.movie.title.placeholder"/>" required="required" />
		<button type="button" class="add layout-container ui-layout-east">
			<spring:message code="searchPage.button.add" />
		</button>
	</div>
	<ul id="searchResults" class="ui-layout-center">
		<%-- Search items go here--%>
	</ul>
	<ul id="infoSources" class="ui-layout-south">
		<c:forEach var="infoSource" items="${infoSources}">
			<li class="info-source"><input type="checkbox" value="${infoSource}" /><label for="source1">${infoSource}</label></li>
		</c:forEach>
	</ul>
	<textarea id="searchItemTmpl" class="ui-helper-hidden">
       	<li><a href="#">{label}<strong class="search-term">remove</strong></a></li>
    </textarea>
</form>
