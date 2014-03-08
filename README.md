
# DeepaMehta 4 MathJax Renderer

With this plugin you can enrich your DeepaMehta content with high-quality rendered mathematical formulas (and possibly more). Rendering is based on [MathJax 2.0](http://docs.mathjax.org/en/v2.0-latest/) and takes place in DeepaMehta's Page Panel.

# Install the DeepaMehta 4 MathJax Renderer

Download the DeepaMehta 4 MathJax Renderer Bundle, latest in version 1.0.2 (compatible with DeepaMehta 4.1.2) [here](http://download.deepamehta.de/nightly/mathjax-renderer-1.0.2.jar) or find it on our [downloads page](http://download.deepamehta.de/nightly/).

After that place the downloaded file `mathjax-renderer-1.0.2.jar` in the `bundles`-folder of your deepamehta installation and restart DeepaMehta.

# Configure the DeepaMehta 4 MathJax Renderer interactively

To start **using** the mathjax-renderer you need to set it up as the `simple default renderer` for a TopicType first. Here is described how you can do so with creating a complete new 'Topic Type' from scratch, but alternatively you can set up this renderer in any 'View Configuration' of (nearly) any existing 'Topic Type' of your choice:

Create a new TopicType via the `Create`-Menu and choosing `New Topic Type`. In the upcoming edit form give your new _TopicType_ a proper name, e.g. _MathJax Content_ and make sure it's either of _Data Type_ `Text` or `HTML`. Save your input, e.g. through pressing the `Ok`-Button at the bottom of the _Page Panel_ in DeepaMehta.

After being saved the _Page Panel_ is updated immediately to show you the infos about your newly created Topic Type, among these infos are also _all_ its associated items (=topics). From among these associated topics, choose the _aggregated_ `View Config`-Topic of your new _Topic Type_ `MathJax Content`. Through clicking, this topic get's revealed in your current working map (left side of the DeepaMehta screen). When the _View Config_ of your _MathJax Content_-Type Topic is selected, you can now press `Edit`  in the _Page Panel_ and thus configure it to make use of the DeepaMehta MathJax Renderer.

On the _Edit_-Page of the _View Config_-Topic  set it's `Simple renderer` option to the renderer uri `tub.eduzen.mathjax_field_renderer`. Make also sure your new _Topic Type_ is set to be `Editable`, `Viewable`and possibly part of your search results through being a `Is Searchable Unit`. Save your data, e.g. through pressing the `Ok`-button or clicking anywhere else in your browser window and that's it. You can now view and edit LaTeX-commands through creating and editing the resp. TopicType (here: `MathJax Content`) in your dm4-webclient. 

Be aware that the MathJaxRenderer just processes the input which you enter between at least 2 dollar signs. One dollar sign renders your content as part of a sentence (inline rendering) while placing your LaTex commands between two dollar signs the nice output is displayed as a solitary paragraph underneath/above your text or html content.

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

# GNU Public License

This DeepaMehta plugin is released under the terms of the GNU General Public License in Version 3.0, 2007. You can find a copy of that [here](http://www.gnu.org/licenses/gpl).

# MathJax License

The license of the MathJax software component packaged as part of this plugin is an Apache License, Version 2.0, January 2004
see also <https://github.com/mathjax/MathJax/blob/master/LICENSE>

# Changelog

UPCOMING: 1.0.5
- make formulas work with the new Box Renderer (in-map formulas)
- upgrade to the latest MathJax version

1.0.4, Mar 08, 2014
- compatible with DeepaMehta 4.2

1.0.2, Nov 18, 2013
- compatible with DeepaMehta 4.1.2
- updated to output formulas in SVG

0.1.0, Dec 3, 2012
- Updated readme and installation hints, uploaded binary release

0.1.0-SNAPSHOT, Nov 25, 2012
- Minor code changes and removed logging to 'console

0.1.0-SNAPSHOT, Sep 25, 2012:
- TeX based info_renderer <http://www.mathjax.org> introduced to  'dm4.webclient'
- TeX based form_renderer <http://www.mathjax.org> introduced to  'dm4.webclient'

Author: Malte Reißig

