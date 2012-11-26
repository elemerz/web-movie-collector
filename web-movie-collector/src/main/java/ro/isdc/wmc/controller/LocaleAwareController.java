package ro.isdc.wmc.controller;


import java.io.File;
import java.io.FilenameFilter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;

import ro.isdc.wmc.controller.util.Constants;

public class LocaleAwareController {
	public LocaleAwareController() {
	}
	
	@ModelAttribute("supportedLanguages")
	public List<String> getCurrentLocale(final HttpServletRequest request,final String lang){
		String userLang=lang;
		if(userLang == null || userLang.trim().length() ==0){
			userLang=Locale.getDefault().getLanguage();
		}
		Locale locale = new Locale(userLang.trim().toUpperCase());
		request.setAttribute(CookieLocaleResolver.LOCALE_REQUEST_ATTRIBUTE_NAME, locale);
		return getSupportedLanguages(request);
	}

	private List<String> getSupportedLanguages(HttpServletRequest request) {
		HttpSession session = request.getSession();
		if(session == null || session.getServletContext() == null || session.getServletContext().getRealPath("") == null){
			return Arrays.asList(new String[]{Locale.getDefault().getLanguage()});
		}
		String webappRoot=session.getServletContext().getRealPath("/WEB-INF/classes/");
		System.out.println(webappRoot);
		File classPathFolder= new File(webappRoot);
		final List<String> languages= new ArrayList<String>();
		classPathFolder.list(new FilenameFilter() {
			@Override
			public boolean accept(File dir, String fileName) {
				String langCode = null;
				boolean found=false;
				try {
					Pattern rex = Pattern.compile("^messages_([a-z]{2})(?:[A-Z]{2})?\\.properties$");
					Matcher matcher = rex.matcher(fileName);
					found= matcher.find();
					if (found) {
						langCode = matcher.group(1);
						languages.add(langCode);
					} 
				} catch (PatternSyntaxException ex) {
					found=false;
				}
				return found;
			}
		});		
		return languages;
	}
	
}
