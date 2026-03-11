const form = document.getElementById('viewport-indicator-generator');
const vpLink = document.getElementById('viewport-indicator-bookmarklet');
const bookmarkletCodeBeforeVps = "javascript:void%20function(){const%20a=";
const bookmarkletCodeAfterVps = ",b=Object.keys(a).map((b,c)=%3E` %40media%20screen%20and%20(min-width:%20${a[b]})%20{ --current-breakpoint:%20'${b}'; --i:%20${c}; } `),c=` %3Cstyle%3E .viewport-indicator%20{ --current-breakpoint:%20'xs'; --hue:%20calc((90%20+%2030%20*%20var(--i))%20*%201deg); ${b.join('')} %26::after%20{ content:%20var(--current-breakpoint); position:%20fixed; z-index:%20999999; bottom:%200.5em; right:%200.5em; background:%20hsla(var(--hue),%2050%25,%2050%25,%2050%25); border-radius:%200.2em; padding:%200.2em%200.5em; width:%204em; text-align:%20center; font-family:%20arial,%20helvetica,%20sans-serif; } } %3C/style%3E `,d=document.createElement('div');d.classList.add('viewport-indicator'),document.body.appendChild(d),d.innerHTML=c}();";
let viewports = "{ xs: '0', sm: '30em', md: '48em', lg: '64em', xl: '80em', xxl: '120em' }";
const input = document.getElementById('viewport-indicator-config');

init();

function init() {
  input.value = viewports;
  form.addEventListener('submit', updateBookmarklet);
  updateBookmarklet();
}

function updateBookmarklet(e) {
  e?.preventDefault();
  viewports = input.value;
  const bookmarkletCode = bookmarkletCodeBeforeVps + viewports + bookmarkletCodeAfterVps;
  vpLink.href = bookmarkletCode;

  updateCurrentIndicator();
}

function updateCurrentIndicator() {
  const currIndicator = document.querySelector('.viewport-indicator');
  if (currIndicator) {
    currIndicator.remove();
    vpLink.click();
  }
}