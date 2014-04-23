---
title: Centering sites vertically
author: Josh Street
layout: post
permalink: /2005/05/18/centering-sites-vertically/
categories:
  - Web Standards
---
Documented here as much for my own reference as anything else!

Back in the bad old days of table-based layout, there used to exist a way to vertically align content through using the `valign` element. For whatever reason, CSS doesn&#8217;t have an equivalent vertical control for objects&#8230; but there is a way around this.

By setting a property to `display: table-cell;`, it&#8217;s possible, through the use of `vertical-align` in CSS, to essentially achieve what we used to be able to do with `valign`.

For example,  
`display: table-cell;<br />
vertical-align: middle;`  
will make the contents of the element to which those styles are applied display in its centre &#8211; useful for vertically centering content on a page.

You can see this in action on [this W3C CSS Tips & Tricks page][1].

 [1]: http://www.w3.org/Style/Examples/007/center.html#vertical