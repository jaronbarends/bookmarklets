var $img = $('img[src^="http://placekitten.com"]'),
    reg = /http:\/\/placekitten\.com\/([0-9]{2,3})\/([0-9]{2,3})/;
    repl = 'http://placehold.it/$1x$2';
if (!$img.length) {
    reg = /http:\/\/placehold\.it\/([0-9]{2,3})x([0-9]{2,3})/;
    repl = 'http://placekitten.com/$1/$2';
    $img = $('img[src^="http://placehold.it"]');
}

$img.each(function() {
    var src = this.src;
    src = src.replace(reg, repl);
    this.src =  src;
});