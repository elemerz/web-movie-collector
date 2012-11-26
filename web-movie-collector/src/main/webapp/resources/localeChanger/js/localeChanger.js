(function($, NS, SuperClass, SubClass) {
	window[NS][SubClass] = window[NS][SubClass] || window[NS][SuperClass].extend({
		$ctx: $('#searchPage'),
		toString : function() {
			return NS + '.' + SubClass;
		},
		/** Constructor. */
		init : function(cfg) {
			this.buildMenu();
		},
		buildMenu:function(){
			$( "#rerun" )
            .button()
            .click(function() {
                console.log( "Language selection..." );
            })
            .next()
                .button({
                    text: false,
                    icons: {
                        primary: "ui-icon-triangle-1-s"
                    }
                })
                .click(function() {
                    var menu = $( this ).parent().next().show().position({
                        my: "left top",
                        at: "left bottom",
                        of: this
                    });
                    $( document ).one( "click", function() {
                        menu.hide();
                    });
                    return false;
                })
                .parent()
                    .buttonset()
                    .next()
                        .hide()
                        .menu();
		}
	});

	/* Attach page specific behavior on page load */
	$(function() {
		return new window[NS][SubClass]();
	});
}(window.jQuery, "WMC", "Base", "LocaleChanger"));
