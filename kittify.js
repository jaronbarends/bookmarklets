const imgs = document.querySelectorAll('img');
const sizes = new Map();

const getKittenImgSrc = function(elm) {
	const w = (elm.tagName === 'IMG') ? elm.width : elm.offsetWidth;
	const h = (elm.tagName === 'IMG') ? elm.height : elm.offsetHeight;
	let src;
	const ratio = w/h;
	let ww = w;
	let hh = h;
	while (sizes.get(`${ww}x${hh}`)) {
		// this size already exists
		ww += 2;
		hh = Math.round(ww/ratio);
	}
	sizes.set(`${ww}x${hh}`, true);
	src = `https://placekitten.com/${ww}/${hh}`;
	return src;
}

imgs.forEach((img) => {
	const w = img.width;
	const h = img.height;
	const src = getKittenImgSrc(img);
	if (src) {
		img.removeAttribute('srcset');
		img.src = src;
		img.width = w;
		img.height = h;
	}
});

// bg images
const bgImgElms = document.querySelectorAll("[style*='url('][style*='background-image']");
bgImgElms.forEach((elm) => {
	const src = getKittenImgSrc(elm);
	if (src) {
		elm.style.backgroundImage = `url(${src})`;
	}
});
