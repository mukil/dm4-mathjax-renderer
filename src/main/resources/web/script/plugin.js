
dm4c.add_plugin("de.tu-berlin.eduzen.mathjax-renderer", function() {

    dm4c.load_script('/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax/MathJax.js'
        + '?config=default&delayStartupUntil=configured')

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

    // define type specific commands and register them
    dm4c.add_listener('init', function (e) {
        // ### the workaround to load all important mathjax stuff, except the one file commented above^^
        MathJax.Ajax.config.root = "/de.tu-berlin.eduzen.mathjax-renderer/script/vendor/mathjax"
        MathJax.Hub.Config({ // "mml2jax.js", "toMathML.js", "FontWarnings.js"
            "extensions": ["tex2jax.js", "MathEvents.js", "MathZoom.js", "MathMenu.js",
               "TeX/noErrors.js","TeX/noUndefined.js","TeX/AMSmath.js","TeX/AMSsymbols.js"],
            "jax": ["input/TeX", "output/SVG"], // "input/MathML", "output/HTML-CSS", "output/NativeMML"
            "tex2jax": { "inlineMath": [["$","$"],["\\(","\\)"]] },
            "menuSettings": {
                "zoom": "Double-Click", "mpContext": true, "mpMouse": true, "zscale": "120%", "texHints": true
            },
            "errorSettings": {
                "message": ["[Math Rendering Error]"]
            },
            "displayAlign": "left",
            "SVG": { "blacker": 8, "scale": 110 },
            "v1.0-compatible": false,
            "skipStartupTypeset": false,
            "elements": ["page-content"]
        });
        MathJax.Hub.Configured() // bootstrapes mathjax.js lib
    })

})
