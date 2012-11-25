# Simple MathJax Renderer for the DeepaMehta4 Webclient

This simple mathjax-renderer is used as part of the <http://github.com/mukil/dm4.eduzen>-application and provides the necessary mathjax files for your dm4-webclient plugin. It provides this by means of a "simple renderer". How this works for me as a developer, I`ve noted down here <https://github.com/mukil/dm4.eduzen/blob/master/src/main/resources/web/script/plugin.js>.

# Install the MathJax Renderer as a user ("admin")

To **use** the mathjax-renderer, you need to set it up as the default renderer for a TopicType. Choose a TopicType, reveal it's related 'ViewConfig'-Topic and set it's 'Simple renderer' option to the renderer uri 'tub.eduzen.mathjax_field_renderer'. Press 'Save' and that's it. You can now view and edit TeX-commands through creating and editing the resp. TopicType in your dm4-webclient.


# Install MathJax Renderer as a developer 

Example: To setup this renderer as part of your model/migration you need to set the 'dm4.webclient.simple_renderer_uri'. In a declarative model migration this could look like the following:

<pre>

{
    "value": "Excercise Object",
    "uri": "tub.eduzen.excercise_object",
    "data_type_uri": "dm4.core.html",
    "index_mode_uris": ["dm4.core.fulltext", "dm4.core.fulltext_key"],
    "view_config_topics": [
        {
            "type_uri": "dm4.webclient.view_config",
            "composite": {
                "dm4.webclient.simple_renderer_uri": "tub.eduzen.mathjax_field_renderer",
                "dm4.webclient.icon": "/de.tu-berlin.eduzen/images/ball-yellow.png",
                "dm4.webclient.add_to_create_menu": true,
                "dm4.webclient.is_searchable_unit": false,
                "dm4.webclient.rows": 4
            }
        }
    ]
}

</pre>

# MathJax License

Apache License, Version 2.0, January 2004
see <https://github.com/mathjax/MathJax/blob/master/LICENSE>

# Changelog

0.1.0 Nov 25, 2012

- Minor code changes and removed logging to 'console

0.1.0-SNAPSHOT, Sep 25, 2012:

- TeX based info_renderer <http://www.mathjax.org> introduced to  'dm4.webclient'
- TeX based form_renderer <http://www.mathjax.org> introduced to  'dm4.webclient'


