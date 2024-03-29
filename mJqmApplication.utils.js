/**
	@file mJqmApplication utility functions

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
	/**
		Get by ID helper function
		
		@param id Id of an item to get
		@param items Items array (must contain objects that have id set)
	*/
	_self.getItemById = function(id, items)
	{
		var item = null;
		for (var i = 0; i < items.length; i++)
		{
			if (items[i].id == id)
			{
				item = items[i];
				break;
			}
		}
		
		return item;
	};

	/**
		Remove by ID helper function
		
		@param id Id of an item to remove from the array
		@param items Items array (must contain objects that have id set)
	*/
	_self.delItemById = function(id, items)
	{
		for (var i = 0; i < items.length; i++)
		{
			if (items[i].id == id)
			{
				items.splice(i, 1);	// remove 1 element at i
				break;
			}
		}
	};

	/**
		Activate links with special attribute to work accros various solutions
		
		To use this replace data-rel="back" links 
		with the attribute set to data-rel="back-internal-html"
	*/
	_self.activateInternalBackButtons = function()
	{
		//
		// Back to internal HTML page setup
		$('a[data-rel|="back-internal-html"]')
			.unbind()
			.click(function(event)
			{
				// phonegap
				if (typeof(navigator) != 'undefined' && typeof(navigator.app) != 'undefined' && typeof(navigator.app.backHistory) == 'function')
				{
					navigator.app.backHistory();
				}
				// standard
				else
				{
					history.go(-1);
				}
				event.preventDefault();
				return false;
			})
		;
	};

	/**
		Create a deep (recursive) copy of an object (or an array)
		
		@param source Object to be cloned
		@return Cloned object (related only by value)
	*/
	_self.deepClone = function(source)
	{
		if ($.isArray(source))
		{
			return $.extend(true, [], source);
		}
		else
		{
			return $.extend(true, {}, source);
		}
	};

	/**
		Bind input to a storage value
		
		@note
			SHOULD be run in a controller or whenever the input is available
			(don't have to be visible though).
			Second call only restores the value.
		
		@param selector jQuery selector of input element
		@param storagePath Path for _self.storage.get/set
	*/
	_self.bindInput = function(selector, storagePath)
	{
		// setup saving (only once)
		var bindIndicator = 'data-jqm-bind-' + storagePath;
		if ($(selector).attr(bindIndicator) != 'true')
		{
			$(selector).attr(bindIndicator, 'true');
			
			$(selector).change(function()
			{
				_self.storage.set(storagePath, $(this).val());
			});
		}
		
		// restore
		$(selector).val(_self.storage.get(storagePath));
	};
	
})(jQuery, window.mJqmApplication);