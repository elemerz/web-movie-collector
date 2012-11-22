<%@include file="/WEB-INF/views/pageIncludes.jsp"%>
<span class="locale-changer">
	<label class="switch-to"><spring:message code="localeChanger.language"/></label>
    <c:forEach var="lng" items="${supportedLanguages}" varStatus="status">
	    <a class="locale ${lng}" href="?lang=${lng}"><spring:message code="localeChanger.${lng}"/></a>
    	<c:if test="${not status.last}">|</c:if>
    </c:forEach>
</span>