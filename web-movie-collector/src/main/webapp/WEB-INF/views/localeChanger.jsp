<%@include file="/WEB-INF/views/pageIncludes.jsp"%>
<span class="locale-changer">
	<div>
	    <%-- 
	    <div>
	        <button id="rerun"><label class="switch-to"><spring:message code="localeChanger.language"/></label> Lng</button>
	        <button id="select">Select an action</button>
	    </div>
	    <select>
	    </select>
	    --%>
		    <c:forEach var="lng" items="${supportedLanguages}" varStatus="status">
	        	<a class="locale ${lng}" href="?lang=${lng}"><spring:message code="localeChanger.${lng}"/></a>
		    </c:forEach>
	</div>
</span>