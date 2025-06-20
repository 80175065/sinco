var Detector = function () {
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif'];

    //we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = "mmmmmmmmmmlli";

    //we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = '72px';

    var h = Sinco.extend(document.body);

    // create a SPAN in the document to get the width of the text we use to test
    var s = Sinco.createElem("span");
    s.style.fontSize = testSize;
    s.innerHTML = testString;
    var defaultWidth = {};
    var defaultHeight = {};

    baseFonts.forEach(function (font) {
        //get the default width for the three base fonts
        s.style.fontFamily = font;
        h.insert(s);
        defaultWidth[font] = s.offsetWidth; //width for the default font
        defaultHeight[font] = s.offsetHeight; //height for the defualt font
        s['delete']();
    });

    function detect(font) {
        var detected = false;
        var matched;

        baseFonts.forEach(function (f) {
            s.style.fontFamily = font + ',' + f; // name of the font along with the base font for fallback.
            h.insert(s);
            matched = (s.offsetWidth != defaultWidth[f] || s.offsetHeight != defaultHeight[f]);
            s['delete']();
            detected = detected || matched;
        });

        return detected;
    }

    this.detect = detect;
};

var detect = new Detector();

(function () {
    if (window['versionIE'] >= 10) {
        var _callee = arguments.callee;

        if (!detect.detect('Antipasto')) {
            setTimeout(function () {
                _callee();
            }, 1);
        }
        else {
            Sinco.get('textoIcono').classList.add('Antipasto');
        }
    }
})();