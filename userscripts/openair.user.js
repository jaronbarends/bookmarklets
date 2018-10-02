// ==UserScript==
// @name OpenAir improvements
// @namespace http://www.jaron.nl/misc/bookmarklets
// @description Improvements on open air time sheet
// @include https://www.openair.com/timesheet.pl?*
// @version 0.3
// ==/UserScript==   

(function() {


	/**
	* perform click on a dialog elm
	* @returns {undefined}
	*/
	const clickDialogElm = function(selector) {
		const dialogBlock = document.querySelector(`.dialogBlock`);
		if (dialogBlock) {
			dialogBlock.querySelector(selector).click();
		}
	};
	

	/**
	* open notes when input has value and notes are empty
	* @returns {undefined}
	*/
	const openNotesIfEmpty = function(e) {
		const input = e.currentTarget;
		if (input.value !== "") {
			const notesTrigger = input.parentNode.querySelector('.tsDetailsAnchor');

			notesTrigger.click();
			const dialogBlock = document.querySelector(`.dialogBlock`);
			if (dialogBlock) {
				const textarea = dialogBlock.querySelector('[name="notes"]');
				if (textarea.value) {
					// we already have notes
					dialogBlock.querySelector('.dialogCloseButton').click();
				}
			}
		}
	};
	


	/**
	* when blurring time input, open notes when they're still empty
	* @returns {undefined}
	*/
	const openNotesOnBlur = function() {
		const inputs = Array.from(document.querySelectorAll('.timesheetInputHour'));
		inputs.forEach((input) => {
			input.addEventListener('blur', openNotesIfEmpty);
		})
	};


	/**
	* add listeners for esc, alt-s for dialog
	* @returns {undefined}
	*/
	const addDialogKeyListeners = function() {
		document.addEventListener('keyup', (e) => {
			const dialogBlock = document.querySelector(`.dialogBlock`);
			const keyCodes = {
				enter: 13,
				esc: 27,
				s: 83
			};
			if (dialogBlock) {
				const keyCode = e.keyCode;
				if (keyCode === keyCodes.s && e.getModifierState('Alt')) {
					// alt + S: save note
					clickDialogElm('.dialogCloseAndSaveButton');
				} else if (keyCode === keyCodes.enter && e.getModifierState('Control')) {
					// ctrl + enter: OK (close without save)
					clickDialogElm('.dialogOkButton');
				} else if (keyCode === keyCodes.esc) {
					// ctrl + enter: OK (close without save)
					clickDialogElm('.dialogCloseButton');
				}
			}
		});
	};
	


	/**
	* 
	* @param {string} varname Description
	* @returns {undefined}
	*/
	var init = function() {
		const interval = 100;// check every 100 ms if timesheet grid is present
		const grid = document.getElementById(`timesheet_grid`);
		if (!grid) {
			setTimeout(init, interval);
		} else {
			// kick off initialisation
			openNotesOnBlur();
			addDialogKeyListeners();
		}
	};

	init();

})();