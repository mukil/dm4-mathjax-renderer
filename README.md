# Simple MathJax Renderer for the DeepaMehta4 Webclient

This simple mathjax-renderer is used as part of the <http://github.com/mukil/dm4.eduzen>-application and just provides the necessary mathjax files for your dm4-webclient plugin to take on, as well as it defines a simple renderer. How this works for me, I`ve written here <https://github.com/mukil/dm4.eduzen/blob/master/src/main/resources/web/script/plugin.js>.

To hook up the mathjax-renderer as default renderer for parts of your model you have to use the 'tub.eduzen.mathjax_field_renderer'-uri. One can have multiple instances of this renderer in use on one _page_. 

Example: To setup this renderer for your model you need to set the 'dm4.webclient.simple_renderer_uri'

'''
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
'''

# Changelog

0.1.0-SNAPSHOT, Sep 25, 2012:

- TeX based info_renderer <http://www.mathjax.org> introduced to  'dm4.webclient'
- TeX based form_renderer <http://www.mathjax.org> introduced to  'dm4.webclient'


