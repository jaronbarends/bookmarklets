var h = document.location.href,
	e = 'e1613',
	hasE = (h.indexOf(e) > -1),
	hnew,
	org = 'localhost',
	repl = e;
if (hasE) {
	repl = org;
	org = e;
}
hnew = h.replace(org, repl);
document.location.href = hnew;
