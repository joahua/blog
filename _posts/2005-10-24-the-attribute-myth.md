---
title: 'The <code>attribute</code> myth'
author: Josh Street
layout: post
permalink: /2005/10/24/the-attribute-myth/
categories:
  - Web Standards
tags:
  - ASCII
  - HTML
  - SGML
---
I&#8217;ve been talking with [Ben][1] this evening about&#8230; markup, amongst other things, and discovered a conviction that using single quotes with an attribute is evil.

Clearing this up right now: it&#8217;s not, either in HTML 4 or XHTML (which retains much of the semantics of HTML 4, except where explicitly contradicted &#8212; &#8220;The semantics of the elements and their attributes are defined in the W3C Recommendation for HTML 4. These semantics provide the foundation for future extensibility of XHTML.&#8221;). Section 3 of the HTML specification states:

<blockquote cite="http://www.w3.org/TR/REC-html40/intro/sgmltut.html#h-3.2.2">
  <p>
    By default, SGML requires that all attribute values be delimited using either double quotation marks (ASCII decimal 34) or single quotation marks (ASCII decimal 39). Single quote marks can be included within the attribute value when the value is delimited by double quote marks, and vice versa. Authors may also use <a href="http://www.w3.org/TR/REC-html40/intro/sgmltut.html#character-entities">numeric character references</a> to represent double quotes (&#34;) and single quotes (&#39;). For double quotes authors can also use the <a href="http://www.w3.org/TR/REC-html40/intro/sgmltut.html#character-entities">character entity reference</a> &quot;.
  </p>
</blockquote>

Ben didn&#8217;t quite get the &#8220;Single quote marks can be included within the attribute value when the value is delimited by double quote marks, and vice versa.&#8221; bit, so here&#8217;s a quick example of both:

`<img alt=&#34;If you can see this, the image isn&#39;t working&#34; />`  
`<img alt=&#39;You can probably see this because the &#34;src&#34; attribute is not defined&#39; />`

Both are valid and should work fine (with the exception of the lack of `src`, obviously). Feel free to use single or double quote marks, safe in the knowledge neither is better than the other.

 [1]: http://www.kitten-man.com/