// IE-11 compatible version of script
// note that is does use Array.from since that was polyfilled in the project I needed it :)
const attr = 'data-dm';
let totals = 0;
Array.from(document.querySelectorAll('['+attr+']')).forEach(function(elm) {
	totals++;
	elm.addEventListener('click', function(e) {e.preventDefault()});
});
console.log('click disabled on '+totals+' element(s) with attribute "'+attr+'"');