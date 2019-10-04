

// ==UserScript==
// @name tfs add issue nr to title 
// @namespace http://www.jaron.nl/
// @description Past de vormgeving aan van woordjes leren voor SvPO
// @match           http://tfs.pggm.nl/*
// @match           https://tfs.pggm.nl/*
// @run-at          document-start
// @version 0.0.1
// ==/UserScript==
/* jshint esversion: 6 */

(function() {
	const tiles = Array.from(document.querySelectorAll('.tbTile'));
	tiles.forEach((tile) => {
		const id = tile.id;
		const issueNr = id.replace('tile-', '');
		const card = tile.querySelector('.tbTileContent');
		const titleElm = tile.querySelector('.id-title-container');
		const idElm = document.createElement('div');
		idElm.textContent = issueNr;
		titleElm.appendChild(idElm);
		card.setAttribute('title', issueNr);
	});
});