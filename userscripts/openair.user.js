// ==UserScript==
// @name OpenAir improvements
// @namespace http://www.jaron.nl/misc/bookmarklets
// @description Improvements on open air time sheet
// @include https://www.openair.com/timesheet.pl?*
// @version 0.1
// ==/UserScript== 

(function() {

	/**
	* open notes when they're empty
	* @returns {undefined}
	*/
	const openNotesIfEmpty = function(e) {
		console.log('open');
		const input = e.currentTarget;
		const notesTrigger = input.parentNode.querySelector('.tsDetailsAnchor');
		console.log(notesTrigger);
		notesTrigger.click();
		const dialogBlock = document.querySelector(`.dialogBlock`);
		console.log(dialogBlock);
	};
	


	/**
	* when blurring time input, open notes when they're still empty
	* @returns {undefined}
	*/
	const openNotesOnBlur = function() {
		console.log('open on', document.querySelectorAll('.timesheetInputHour'));
		const inputs = Array.from(document.querySelectorAll('.timesheetInputHour'));
		inputs.forEach((input) => {
			input.addEventListener('blur', openNotesIfEmpty);
		})
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
		}
	};

	init();

})();