---
title: Posting from BloGTK 1.1
author: Josh Street
layout: post
permalink: /2005/03/28/posting-from-blogtk-11/
categories:
  - Geek
tags:
  - HTTP
  - ISP
  - Linux
  - plain old web browser
  - Python
  - web interface
  - 'WYSIWYG  editor'
---
Just for kicks, to see if it&#8217;s any easier than using a plain old web browser to interface with the blog!

Anyway, [BloGTK][1] is a desktop client for [WordPress][2] which runs on Linux systems. Niggly features I&#8217;ve discovered in the last 30 seconds:

*   Can&#8217;t select text, then click the &#8220;hyperlink&#8221; icon, and have the anchor tags wrap around selected text &#8212; they appear to the right of it.
*   Compulsory &#8220;target&#8221; field in anchor generation &#8212; which I don&#8217;t think (if I recall correctly) is even valid in XHTML 1.1, possibly earlier.
*   Lack of built-in quick tags that WordPress&#8217; own posting interface has, namely for unordered lists, list items, and tagging of abbreviations, etc.
*   Ironically, it&#8217;s possible to define your own tags, which can wrap around selected text just fine, whilst the &#8220;built-in&#8221; anchor button doesn&#8217;t do this&#8230; Hmm, okay.

It&#8217;s really little things, nothing major &#8212; the formatting tags (`strong`, `em`, etc.) work just fine on selections, which is great. It also has an inbuilt preview which (I&#8217;m 99% sure) functions using an internal rendering engine (or part of the GTK toolkit, same thing), rather than making HTTP calls. A change that&#8217;d be interesting to see (although one which doesn&#8217;t affect me directly) would be the implementation of either a WYSIWYG editor, or simply Textile or Markdown support with XMLHttpRequest being used (or something like it? I gather that&#8217;s a JavaScript thing, not having ever used it, so it mayn&#8217;t be usable like *that*.

Another thing that&#8217;d be nice is the implementation of keyboard shortcuts, just for text formatting stuff &#8212; so, Ctrl + B for `strong` and `em` tags, etc. And also the changing of the category display to a list of checkboxes in its own frame (or whatever the term is in desktop app interface design lingo) on the right of the posting area, instead of a dropdown &#8212; that&#8217;d allow posters to select multiple categories, more rapidly.

It&#8217;s a good simple app (sorry&#8230; I know it&#8217;s probably rather unsimple when you look at the code driving behind it, but I don&#8217;t understand any of that Python stuff, so I&#8217;m just judging on the interface), but a few niggly things mean I&#8217;d still prefer to use the native WordPress web interface.

**Edit:** In part to see if it does, but also because I had another thought &#8212; the absence of a &#8220;Posting&#8230;&#8221; status window is also something which could be improved, just so the user doesn&#8217;t think the application has crashed. It took a while here due to my ISP&#8217;s poor DNS performance, and had I not known why it was going slowly, I may have closed the application thinking it had crashed.

 [1]: http://blogtk.sourceforge.net/
 [2]: http://wordpress.org/

 *[WYSIWYG]: What You See Is What You Get