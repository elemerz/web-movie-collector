package ro.isdc.wmc.controller;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;

public class LocaleAwareController {
	public LocaleAwareController() {
	}
	
	@ModelAttribute()
	public String getCurrentLocale(final HttpServletRequest request,final String lang){
		String userLang=lang;
		if(userLang == null || userLang.trim().length() ==0){
			userLang=Locale.getDefault().getLanguage();
		}
		Locale locale = new Locale(userLang.trim().toUpperCase());
		request.setAttribute(CookieLocaleResolver.LOCALE_REQUEST_ATTRIBUTE_NAME, locale);
		return userLang;
	}
	
}
