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
	        	<c:if test="${currentLanguage eq lng}">
		        	<label class="locale ${lng} current-lng"><spring:message code="localeChanger.${lng}"/></label>
	        	</c:if>
	        	<c:if test="${currentLanguage ne lng}">
		        	<a class="locale ${lng}" href="?lang=${lng}"><spring:message code="localeChanger.${lng}"/></a>
	        	</c:if>
		    </c:forEach>
	</div>
</span>
