/**
	@file mJqmApplication i18n (language) file

    Copyright:  ©2012 Maciej "Nux" Jaros
	  License:  CC-BY-SA
	            http://creativecommons.org/licenses/by-sa/3.0/
*/

/**
	i18n labels, titles, messages and such
	
	@note
		Building i18n labels for data objects:
		\li label-[objectFieldName]...-[objectFieldName]
		\li label-[objectFieldName]...-[objectFieldName]-[optionName]
		@see mJqmApplication.storage.js
	
	@note
		<p>This object will be replaced upon setup of the i18n class and stored internally</p>
		<p>You should use "get" method like in the example below</p>
		<ol>
		<li>var yesText = _self.i18n.get("_Yes");</li>
		<li>var hiText = _self.i18n.get("_Hi_username", {username:"Maciej"});</li>
		<li>{i18n.get("_Yes")}</li>
		</ol>
		<p>Pierwszy i drugi przykład przypisuje wartość do zmiennej. Drugi do razu ją wyświetla.</p>
		<p>Należy zwrócić uwagę, że w message "_Hi_username" musi być zawarty tekst "{$username}".</p>	
*/
window.mJqmApplication.i18n = {"":""
	// Polski
	,'pl' : {"":""
		// app basic
		,"title-application" : "Szacowanie"
		// errors
		,"unexpected error" : "Niespodziewany błąd!"
		// page (or icon) titles
		,"add - title" : "Dodaj"
		,"edit - title" : "Edytuj"
		,"delete - title" : "Usuń"
		// settings
		,"label-settings-language"         : "Język"
		,"label-settings-language-pl"      : "Polski"
		,"label-settings-language-en"      : "English"
		,"group-settings-mainNavi" : "Przyciski nawigacyjne"
		,"label-settings-mainNaviFormat"            : "Format"
		,"label-settings-mainNaviFormat-icons&text" : "Ikony i tekst"
		,"label-settings-mainNaviFormat-icons-only" : "Tylko ikony"
		,"label-settings-mainNaviFormat-text-only"  : "Tylko tekst"
		,"label-settings-mainNaviPosition"               : "Pozycja"
		,"label-settings-mainNaviPosition-bottom-fixed"  : "Przytwierdzone na dole"
		,"label-settings-mainNaviPosition-below-content" : "Pod zawartością"
		,"label-settings-mainNaviPosition-below-header"  : "Pod nagłówkiem"
		,"group-settings-advanced" : "Zaawansowane"
		,"label-settings-pageTransitions"           : "Animacje przy zmianie stron"
		,"label-settings-pageTransitions-none"      : "Brak (wysoka wydajność)"
		,"label-settings-pageTransitions-slide"     : "Przesunięcie"
		,"label-settings-pageTransitions-slideup"   : "Do góry"
		,"label-settings-pageTransitions-slidedown" : "W dół"
		,"label-settings-pageTransitions-pop"       : "Wyskakujące"
		,"label-settings-pageTransitions-fade"      : "Przenikanie"
		,"label-settings-pageTransitions-flip"      : "Obrocik"
		// forms basics
		,"form-invalid" : "Proszę poprawić formularz"
		,"submit"       : "Zapisz"
		// Translated default messages for the jQuery validation plugin.
		,"validator-messages" :
		{
			required: "To pole jest wymagane.",
			remote: "Proszę o wypełnienie tego pola.",
			email: "Proszę o podanie prawidłowego adresu email.",
			url: "Proszę o podanie prawidłowego URL.",
			date: "Proszę o podanie prawidłowej daty.",
			dateISO: "Proszę o podanie prawidłowej daty (ISO).",
			number: "Proszę o podanie prawidłowej liczby.",
			digits: "Proszę o podanie samych cyfr.",
			creditcard: "Proszę o podanie prawidłowej karty kredytowej.",
			equalTo: "Proszę o podanie tej samej wartości ponownie.",
			accept: "Proszę o podanie wartości z prawidłowym rozszerzeniem.",
			maxlength: jQuery.validator.format("Proszę o podanie nie więcej niż {0} znaków."),
			minlength: jQuery.validator.format("Proszę o podanie przynajmniej {0} znaków."),
			rangelength: jQuery.validator.format("Proszę o podanie wartości o długości od {0} do {1} znaków."),
			range: jQuery.validator.format("Proszę o podanie wartości z przedziału od {0} do {1}."),
			max: jQuery.validator.format("Proszę o podanie wartości mniejszej bądź równej {0}."),
			min: jQuery.validator.format("Proszę o podanie wartości większej bądź równej {0}.")
		}

	}
	// English
	,'en' : {"":""
		// app basic
		,"title-application" : "Estimates"
		// errors
		,"unexpected error" : "Unexpected error!"
		// page (or icon) titles
		,"add - title" : "Add"
		,"edit - title" : "Edit"
		,"delete - title" : "Delete"
		// settings
		,"label-settings-language"         : "Language"
		,"label-settings-language-pl"      : "Polski"
		,"label-settings-language-en"      : "English"
		,"label-settings-getPositionType"                  : "Position acquiry"
		,"label-settings-getPositionType-automatic"        : "Automatic (at startup)"
		,"label-settings-getPositionType-manual-only"      : "Manual (refresh for automatic)"
		,"label-settings-getPositionType-manual-but-saved" : "Manual with saving previous"
		,"group-settings-mainNavi" : "Navigation buttons"
		,"label-settings-mainNaviFormat"            : "Format"
		,"label-settings-mainNaviFormat-icons&text" : "Icons & text"
		,"label-settings-mainNaviFormat-icons-only" : "Icons only"
		,"label-settings-mainNaviFormat-text-only"  : "Text only"
		,"label-settings-mainNaviPosition"               : "Position"
		,"label-settings-mainNaviPosition-bottom-fixed"  : "Fixed to the bottom"
		,"label-settings-mainNaviPosition-below-content" : "Below content"
		,"label-settings-mainNaviPosition-below-header"  : "Below header"
		,"group-settings-advanced" : "Advanced"
		,"label-settings-pageTransitions"           : "Animation type for transitions"
		,"label-settings-pageTransitions-none"      : "None (best performance)"
		,"label-settings-pageTransitions-slide"     : "Slide"
		,"label-settings-pageTransitions-slideup"   : "Slide up"
		,"label-settings-pageTransitions-slidedown" : "Slide down"
		,"label-settings-pageTransitions-pop"       : "Pop"
		,"label-settings-pageTransitions-fade"      : "Fade"
		,"label-settings-pageTransitions-flip"      : "Flip"
		// forms basics
		,"form-invalid" : "Please correct the form"
		,"submit"       : "Save"
		// Translated default messages for the jQuery validation plugin.
		,"validator-messages" :
		{
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			accept: "Please enter a value with a valid extension.",
			maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
			minlength: jQuery.validator.format("Please enter at least {0} characters."),
			rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
			range: jQuery.validator.format("Please enter a value between {0} and {1}."),
			max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
			min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
		}
	}
};