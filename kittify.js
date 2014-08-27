var imgs = document.querySelectorAll('img');
for (var i=0, len=imgs.length; i<len; i++) {
	var img = imgs[i];
	img.src = 'http://placekitten.com/'+img.width+'/'+img.height;
}