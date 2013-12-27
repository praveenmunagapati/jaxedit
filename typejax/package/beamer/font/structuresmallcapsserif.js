
/* JaxEdit: online LaTeX editor with live preview
 * Copyright (c) 2011-2013 JaxEdit project
 * License: GNU General Public License, Version 3
 *
 * Website: http://jaxedit.com
 * Source:  https://github.com/zohooo/jaxedit
 * Release: http://code.google.com/p/jaxedit/
 */

(function(){
  var definitions = {environment: {}, command: {}};
  var extensions = {};

  var styles = {
    "h1, div.frametitle, div.framesubtitle, span.thmname": {
      "font-family": "Georgia, 'Times New Roman', Times, serif",
      "font-variant": "small-caps"
    }
  };

  typejax.parser.extend("beamer/font/structuresmallcapsserif", definitions, extensions, styles);
})();
