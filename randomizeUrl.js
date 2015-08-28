var url = document.location.href,
idx = url.indexOf('?');
if (idx > -1) {
  url = url.substring(0, idx);
}
url = url+'?'+Math.floor(10000*Math.random());

document.location.href = url;