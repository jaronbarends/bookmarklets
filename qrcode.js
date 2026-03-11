const overlay = document.createElement('div');

createOverlay();
showOverlay();

function createOverlay() {
	const qrSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + encodeURIComponent(document.location.href);
	const img = document.createElement('img');
	img.src = qrSrc;

	const overlayStyles = {
		accentColor: 'red',
		position: 'fixed',
		zIndex: 1000000,
		width: '100%',
		height: '100%',
		inset: 0,
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0.9)',
	};
	Object.assign(overlay.style, overlayStyles);

	const imgStyles = {
		marginTop: '100px',
		width: 'auto',
		height: 'auto',
		padding: '20px',
		background: 'white',
	}
	Object.assign(img.style, imgStyles);

	overlay.appendChild(img);
};

function showOverlay() {
	document.body.appendChild(overlay);
	overlay.addEventListener('click', removeOverlay);
	window.addEventListener('keyup', escListener);
};

function removeOverlay() {
	overlay.removeEventListener('click', removeOverlay);
	window.removeEventListener('keyup', escListener);
	document.body.removeChild(overlay);
};

function escListener(e) {
	if (e.keyCode === 27) {
		removeOverlay();
	}
};