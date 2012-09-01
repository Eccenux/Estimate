/**
	@file mJqmApplication JS controllers

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
	_self.controller = new Object();
	
	/**
		Settings page
	*/
	_self.controller.settings = function(parameters)
	{
		var $thisForm = $('#settings-form');
		
		//
		// setup form
		
		var tmpFormData = _self.form.init('settings');

		// get HTML
		var formData = formCreator (
		[
			_self.form.getElementOptions('language')
			,
			_self.form.startSet()
				,
				_self.form.startGroup('mainNavi', {collapsed:true})
					,
					_self.form.getElementOptions('mainNaviFormat')
					,
					_self.form.getElementOptions('mainNaviPosition')
				,
				_self.form.endGroup()
				,
				_self.form.startGroup('advanced', {collapsed:true})
					,
					_self.form.getElementOptions('pageTransitions')
				,
				_self.form.endGroup()
			,
			_self.form.endSet()
			,
			{
				type      : 'submit'
				,name     : 'settings-submit'
				,lbl      : _self.i18n.get("submit")
			}
		]);
		_self.form.close();

		// insert HTML
		$thisForm.html(formData);

		// re-render mobile page markup
		$thisForm.trigger( "create" );
		
		// setup save button to submit form
		$('#settings-submit-btn')
			.unbind()
			.click(function()
			{
				$thisForm.submit();
				return false;
			})
		;

		// validation setup
		$thisForm.validate({meta: "validation"});

		//
		// save action
		$thisForm
			.unbind()
			.submit(function(event)
			{
				// validation check
				if (!_self.form.valid(this))
				{
					return false;
				}

				// save
				_self.storage.set('settings', tmpFormData);
				
				// refresh to main (need this especially for language change)
				location.href = 'index.html';
				
				event.preventDefault();
				return false;
			})
		;
	};
	
	/**
		Start controller status
	*/
	var _startDone = false;
	
	/**
		Start (default/main) page
	*/
	_self.controller.start = function(parameters)
	{
		// we need to set this up only once
		if (_startDone)
		{
			return;
		}
		_startDone = true;
		
		// dial
		$('#start-form .dial input[type=button]').each(function()
		{
			$(this).bind('vclick', function()
			{
				$('#estamination-number').append(this.value);
			});
		});

		// bkspc
		$('[data-operation=bkspc]').bind('vclick', function()
		{
			var number = $('#estamination-number').text();
			number = number.substr(0, number.length-1);
			$('#estamination-number').html(number);
		});
		// clear
		$('[data-operation=clear]').bind('click', function()
		{
			$('#estamination-number').html("");
		});
		// +/-
		$('[data-operation="+"],[data-operation="-"]').bind('vclick', function()
		{
			try
			{
				var num = parseFloat($('#estamination-number').text());
				if (isNaN(num))
				{
					num = 0;
				}
				if ($(this).attr('data-operation') == '+')
				{
					num += 1;
				}
				else
				{
					num -= 1;
				}
				$('#estamination-number').text(num);
			}
			catch (e)
			{
				console in window && log in console && console.log('parse error');
			}
		});
		
		// scale
		/*
		$('.scale-chooser input').bind("change", function(event, ui)
		{
			$('#estamination-scale').html($(this).val());
		});
		*/
		$('.scale-chooser input').click(function()
		{
			$('#estamination-scale').html($(this).val());
		});
	};
	
})(jQuery, window.mJqmApplication);