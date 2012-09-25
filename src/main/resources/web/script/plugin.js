dm4c.add_plugin("de.tu-berlin.eduzen.mathjax-renderer", function() {

    dm4c.add_listener('init', function (e) {
	    if (console) {
		    console.log("NOT configuring simple mathjax-renderer from dm4.mathjax-renderer plugin")
		    console.log("see https://github.com/mukil/dm4-mathjax-renderer for usage instructions")
	    }
    })

})
