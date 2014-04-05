//  MathJax.js (TeX) simple renderer and single-editor for "tub.eduzen.excercise_description",
//      "tub.eduzen.excercise_object" and "tub.eduzen.approach.content"
dm4c.add_simple_renderer('tub.eduzen.mathjax_field_renderer', {

    render_info: function(model, $parent) {

        // render label
        dm4c.render.field_label(model, $parent)
        var html = '<div class="task content" id="content-'+ model.object.id +'">'
            + '<div id="math-output-'+ model.object.id +'" class="output">' + model.value + '</div>'
            + '</div>'
        $parent.append(html)

        // typeset all elements containing TeX to SVG in the configured element (#page-content)
        MathJax.Hub.Typeset()

        },

    render_form: function(model, $parent) {
        var elementInputId = 'math-input-' + model.object.id
        var elementOutputId = 'math-output-' + model.object.id
        var $content = $('<textarea id="' + elementInputId +
            '" type="text" rows="4">').attr({ size : 80 }).val(model.object.value)

        $parent.append($content)
        dm4c.render.field_label("Preview", $parent)
        var html = '<div id="math-preview-'+ model.object.id +'" class="math">'
            + '<div id="' + elementOutputId + '" class="output">' + model.value + '</div>'
            + '</div>'
        $parent.append(html)

        $outputArea = $('#' + elementOutputId)
        $inputArea = $('#' + elementInputId)
        // register keyup-handler on math-input textarea and update the output-area on keyinput
        $inputArea.keyup(function () {
            $outputArea.text($inputArea.val())
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, elementOutputId])
        })

        // ### fixme: implement proper return function, with usage of dm4c.REF_PREFIX to reference existing ones
        return function() { // return input value
            return $.trim($content.val())
        }
    }

})
