var sgOverlay = document.createElement('div');

var addOverlay = function() {

	var qrSrc = 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl='+encodeURIComponent(document.location.href),
		os = sgOverlay.style,
		img = document.createElement('img');
	img.src = qrSrc;

	os.position = 'fixed';
	os.zIndex = 1000000;
	os.width = '100%';
	os.height = '100%';
	os.top = 0;
	os.left = 0;
	os.textAlign = 'center';
	os.backgroundColor = 'rgba(0,0,0,0.9)';

	img.style.marginTop = '100px';
	img.style.width = 'auto';
	img.style.height = 'auto';

	sgOverlay.appendChild(img);
	document.body.appendChild(sgOverlay);
};

var removeOverlay = function() {
	document.body.removeChild(sgOverlay);
};

var keyupListener = function(e) {	
	if (e.keyCode === 27) {
		removeOverlay();
	}
};

var init = function() {
	addOverlay();
	sgOverlay.addEventListener('click', removeOverlay);
	window.addEventListener('keyup', keyupListener);

};

init();