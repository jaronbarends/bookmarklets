// ==UserScript==
// @name Marktplaats ad killer
// @namespace http://www.jaron.nl/
// @description Verwijderd commerciële ads van marktplaats
// @match           http://marktplaats.nl/*
// @match           https://marktplaats.nl/*
// @match           http://www.marktplaats.nl/*
// @match           https://www.marktplaats.nl/*
// @version 0.0.1
// ==/UserScript==
/* jshint esversion: 6 */

(function() {
const css = `
`;
	

/**
* add css styles
* @returns {undefined}
*/
const addStyles = function() {
	const styles = document.createElement('style');
	styles.innerHTML = css;
	document.querySelector('head').appendChild(styles);
};

/**
* remove the adds
* @returns {undefined}
*/
const removeGoogleAds = function() {
	const selectors = [];
	selectors.push('[id*="google"]');
	selectors.push('[class*="adsense"]');
	selectors.push('iframe[src*="adsense"]');

	selectors.forEach(s => {
		document.querySelectorAll(s).forEach(elm =>	s.style.display = 'none');
	})
};


/**
* remove ads with link to a site
* @returns {undefined}
*/
const removeAdsWithLink = function() {
	const linkContainers = document.querySelectorAll('.mp-Listing-seller-link');
	linkContainers.forEach(c => {
		const li = c.closest('.mp-Listing');
		if (li) {
			li.style.display = 'none';
		}
	});
};


/**
* initialiseer alles
* @returns {undefined}
*/
const init = function() {
	removeGoogleAds();
	removeAdsWithLink();
	addStyles();
};


init();

})();