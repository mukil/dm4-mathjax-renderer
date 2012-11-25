dm4c.add_plugin("de.tu-berlin.eduzen.mathjax-renderer", function() {

    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/MathJax.js'
        + '?config=default&delayStartupUntil=configured')

    // note: the following is all because of in chromium these scripts are not automatically loaded, in firefox they are
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/extensions/mml2jax.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/extensions/tex2jax.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/extensions/TeX/noErrors.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/extensions/TeX/noUndefined.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/extensions/MathEvents.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/extensions/MathMenu.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/extensions/MathZoom.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/extensions/toMathML.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/extensions/TeX/AMSmath.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/extensions/TeX/AMSsymbols.js')

    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/jax/element/mml/jax.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/jax/input/TeX/config.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/jax/input/TeX/jax.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/jax/input/MathML/config.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/jax/output/HTML-CSS/config.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/jax/output/HTML-CSS/jax.js')
    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/jax/output/NativeMML/config.js')
    // dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/jax/output/HTML-CSS/fonts/TeX/fontdata.js')

    // define type specific commands and register them
    dm4c.add_listener('init', function (e) {
        // ### the workaround to load all important mathjax stuff, except the one file commented above^^
        MathJax.Ajax.config.root = "http://localhost:8080/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax"
        // MathJax.Ajax.config.root = "http://stable.eduzen.tu-berlin.de:8080/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax"
        // console.log("   > new MathJax.Ajax.config.root => " + MathJax.Ajax.config.root) // ff does not know w.l.origin
        MathJax.Hub.Config({
            "extensions": ["tex2jax.js", "mml2jax.js", "MathEvents.js", "MathZoom.js", "MathMenu.js", "toMathML.js",
               "TeX/noErrors.js","TeX/noUndefined.js","TeX/AMSmath.js","TeX/AMSsymbols.js", "FontWarnings.js"],
            "jax": ["input/TeX", "output/SVG"], // "input/MathML", "output/HTML-CSS", "output/NativeMML"
            "tex2jax": { "inlineMath": [["$","$"],["\\(","\\)"]] },
            "menuSettings": {
                "zoom": "Double-Click", "mpContext": true, "mpMouse": true, "zscale": "200%", "texHints": true
            },
            "errorSettings": {
                "message": ["[Math Error]"]
            },
            "displayAlign": "left",
            "SVG": { "blacker": 8, "scale": 110 },
            "v1.0-compatible": false,
            "skipStartupTypeset": false,
            "elements": ["page-content"]
        });
        MathJax.Hub.Configured() // bootstrapes mathjax.js lib
        // registers a listener for just typesetted dom elements
        /** MathJax.Hub.Register.MessageHook("New Math", function (message) {
            if (console != undefined) console.log("MathJax.newmath.. ")
            var script = MathJax.Hub.getJaxFor(message[1]).SourceElement()
            if (console != undefined) console.log(message.join(" ")+": '"+script.text+"'")
        }) **/
        // console.log("EduZEN.configuredMathJax().. for further investigation, check out MathJax-object next line.")
        // console.log(MathJax) // is here to learn more about mathjax
        // fixme: hide "Create Topic Type" menu item
    })

})
