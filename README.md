# Simple MathJax Renderer for the DeepaMehta4 Webclient

This simple mathjax-renderer is used as part of the <http://github.com/mukil/dm4.eduzen>-application and provides the necessary mathjax files for your dm4-webclient plugin. It provides this by means of a "simple renderer". How this works for me as a developer, I`ve noted down here <https://github.com/mukil/dm4.eduzen/blob/master/src/main/resources/web/script/plugin.js>.

# Install the MathJax Renderer

Download the Mathjax Renderer Bundle 0.1.0. A [download is provided here](https://github.com/downloads/mukil/dm4-mathjax-renderer/mathjax-renderer-0.1.0.jar).

Place the downloaded file `mathjax-renderer-0.1.0.jar` in the `bundles`-folder of your deepamehta installation and restart DeepaMehta.

# Configure the MathJax Renderer as a user ("admin")

To start **using** the mathjax-renderer, you need to set it up as the `simple default renderer` for a TopicType. Here is described how you can do so currently:

Create a new TopicType via the `Create`-Menu and choosing `New Topic Type`. In the upcoming edit form give your new _TopicType_ a proper name, e.g. _MathJax Content_ and make sure it's either of _Data Type_ `Text` or `HTML`. Save your input, e.g. through pressing the `Ok`-Button at the bottom of the _Page Panel_ in DeepaMehta.

After being saved the _Page Panel_ is updated immediately to show you the infos about your newly created Topic Type, among these infos are also _all_ its associated items (=topics). From among these associated topics, choose the _aggregated_ `View Config`-Topic of your new _Topic Type_ `MathJax Content`. Through clicking, this topic get's revealed in your current working map (left side of the DeepaMehta screen). When the _View Config_ of your _MathJax Content_-Type Topic is selected, you can now press `Edit`  in the _Page Panel_ and thus configure it to make use of the DeepaMehta MathJax Renderer.

On the _Edit_-Page of the _View Config_-Topic  set it's `Simple renderer` option to the renderer uri `tub.eduzen.mathjax_field_renderer`. Make also sure your new _Topic Type_ is set to be `Editable`, `Viewable`and possibly part of your search results through being a `Is Searchable Unit`. Save your data, e.g. through pressing the 'Ok'-button or clicking anywhere else in your browser window and that's it. You can now view and edit TeX-commands through creating and editing the resp. TopicType (here: `MathJax Content`) in your dm4-webclient. 

Be aware that the TeX commands are just triggered to process the input which is typed between dollar signs. One dollar sign renders your content as part of a sentence (inline) and using two dollar signs before and after your actual math command renders your formula as as a single paragraph.

2 _MathJax Content_ Examples:

`$ z=1+i $`

`$$ z=1+i $$`

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

0.1.0 Dec 3, 2012

- Updated readme and installation hints, uploaded binary release

0.1.0 Nov 25, 2012

- Minor code changes and removed logging to 'console

0.1.0-SNAPSHOT, Sep 25, 2012:

- TeX based info_renderer <http://www.mathjax.org> introduced to  'dm4.webclient'
- TeX based form_renderer <http://www.mathjax.org> introduced to  'dm4.webclient'


