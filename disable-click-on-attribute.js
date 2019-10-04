const attr = 'data-dm';
let totals = 0;
document.querySelectorAll(`[${attr}]`).forEach((elm) => {
	totals++;
	elm.addEventListener('click', (e) => e.preventDefault());
});
console.log(`click disabled on ${totals} element(s) with attribute "${attr}"`);