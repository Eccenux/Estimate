/**
	@file mJqmApplication setup of controllers mapping and general initialization

    Copyright:  ©2012 Maciej "Nux" Jaros
	  License:  CC-BY-SA
	            http://creativecommons.org/licenses/by-sa/3.0/
*/

/**
	@param $
		jQuery object
	@param _self
		Main object of this application
*/
(function($, _self)
{
	//
	// Setup storage
	//
	_self.storage.init();
	
	//
	// Setup JS i18n
	// (see below for HTML setup)
	var lang = _self.storage.get('settings.language');
	_self.i18n = new I18n(_self.i18n, lang);
	
	//
	// Setup validation
	//
 	$.extend($.validator.messages, _self.i18n.get("validator-messages"));
	$.metadata.setType('html5');

	//
	// Onready, general setup
	//
	$(function()
	{
		//
		// Setup i18nalized HTML
		// hide all marked with language attribute and show thoose having current language
		$('*[data-lang]').hide();
		$('*[data-lang|="'+lang+'"]').show();
		// other HTML not setup in controllers
		$('*[data-i18n-key]').each(function()
		{
			var key = $(this).attr('data-i18n-key');
			if ($(this).attr('type') == 'button')
			{
				$(this).val(_self.i18n.get(key));
			}
			else
			{
				$(this).html(_self.i18n.get(key));
			}
		});

		//
		// Setup Main Navigation Format
		// @note MUST be done after i18n keys setup (because they insert HTML)
		// 'icons&text', 'icons-only', 'text-only'
		$('*[data-id|="main-navi"]').each(function()
		{
			var naviFormat = _self.storage.get('settings.mainNaviFormat');
			if (naviFormat == 'icons-only')
			{
				$('a[data-icon]', this)
					.attr('data-iconpos', 'notext')
					.html('')
				;
			}
			else if (naviFormat == 'text-only')
			{
				$('a[data-icon]', this).removeAttr('data-icon');
			}
		});

		//
		// Setup Main Navigation Position
		//
		switch (_self.storage.get('settings.mainNaviPosition'))
		{
			default:
			case 'bottom-fixed':
				// should already be OK.
			break;
			case 'below-content':
				$('*[data-id|="main-navi"]').each(function()
				{
					$(this).attr('data-position', 'below-content');
				});
			break;
			case 'below-header':
				$('*[data-id|="main-navi"]').each(function()
				{
					$(this).attr('data-position', 'below-header');
				});
			break;
		}
		
		//
		// Main page must be set-up when no hash or just hash is given
		// (if hash is not given jQueryMobile doeasn't call pagebeforechange with url in toPage)
		if (location.hash.length <= 1)
		{
			if (_self.controller && typeof(_self.controller.start) == 'function')
			{
				_self.controller.start();
			}
		}
	});

	//
	// Startup settings for jquery mobile
	//
	$(document).bind("mobileinit", function()
	{
		// i18n in settings
		if (lang == "pl")
		{
			$.mobile.listview.prototype.options.filterPlaceholder = "Filtruj listę...";
		}
		
		// animation on page change
		$.mobile.defaultPageTransition = _self.storage.get('settings.pageTransitions');
		//$.mobile.fallbackTransition.slideout = "none";	// transition for non-3D animation enabled browser
		
		// footer fixation (not working: about -> tap on the page -> open sub-collapsed section)
		if (_self.storage.get('settings.mainNaviPosition') == 'bottom-fixed')
		{
			$.mobile.touchOverflowEnabled = true;
			$.mobile.fixedToolbars.setTouchToggleEnabled(false);
		}
	});
	
	//
	// Setup page transitions to controllers mapping
	//
	$(document).bind( "pagebeforechange", function( e, data )
	{
		// We only want to handle changePage() calls where the caller is
		// asking us to load a page by URL.
		if ( typeof data.toPage === "string" )
		{
			var newPageHash = $.mobile.path.parseUrl( data.toPage ).hash;
			
			// default page = #page-start
			if (newPageHash.length <= 1)
			{
				newPageHash = "#page-start";
			}
			
			// get controller name and parameters
			var controllerName = "";
			var parameters = {};
			newPageHash.replace(/^#page-([^?&]+)([?&].+)?$/, function(a, matchedController, matchedParams)
			{
				controllerName = matchedController;
				if (matchedParams)
				{
					matchedParams.replace(/[?&]([^?&=]+)=([^?&=]+)/g, function(a, name, value)
					{
						parameters[name] = value;
					});
				}
			});
			
			if (controllerName.length && typeof(_self.controller[controllerName]) == 'function')
			{
				_self.controller[controllerName](parameters);
			}
		}
	});
	
})(jQuery, window.mJqmApplication);