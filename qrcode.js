var qrSrc = 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl='+encodeURIComponent(document.location.href),
	overlay = document.createElement('div'),
	os = overlay.style,
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
overlay.appendChild(img);
document.body.appendChild(overlay);
overlay.addEventListener('click', function() {
	document.body.removeChild(overlay);
})
