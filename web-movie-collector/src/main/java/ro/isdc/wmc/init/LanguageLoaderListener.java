package ro.isdc.wmc.init;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import ro.isdc.wmc.controller.LocaleAwareController;

public class LanguageLoaderListener implements ServletContextListener {

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		ServletContext ctx= sce.getServletContext();
		String lngFolder=ctx.getInitParameter("languageFolder");
		LocaleAwareController.loadSupportedLanguages(ctx,lngFolder);
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub

	}

}
