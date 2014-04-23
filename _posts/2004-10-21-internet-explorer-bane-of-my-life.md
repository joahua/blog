---
title: Internet Explorer, bane of my life
author: Josh Street
layout: post
permalink: /2004/10/21/internet-explorer-bane-of-my-life/
categories:
  - Geek
  - Web Standards
tags:
  - 'actual  applications'
  - Internet Explorer
  - Internet Explorer claims
  - microsoft
  - recommendation technology
  - W3C recommendation technology
  - Web Standards
---
I haven&#8217;t whinged about Internet Explorer for some time now, at least, not on this website, so I feel justified.<!--more-->

The `background` property in CSS has the attribute `fixed` for a reason. Internet Explorer supports this, but fails to interpret it in the same way as every other visual UA on the planet &#8212; the background is fixed relative to the element, not the page.

This is specified in the [W3C Cascading Style Sheets (Level 1) recommendation][1] (Yes, it is a recommendation, not a standard. If &#8220;web standards&#8221; people are going to obsess over geek semantics, you&#8217;d think they would care a little more about the meaning of real words, as well. Apparently not.), which Internet Explorer claims to have [full support for][2].

That part of the specification appears a little ambiguous on first reading, but seriously, what makes greater logical sense, in terms of the actual *applications* of the technology?! Keeping in mind this is a recommendation, if there is ambiguity (which is clarified by contextual reading and general understanding of the material at hand), then it is the responsibility of any recommendation implementors to apply their own best-practice policies to this, in order to clarify it.

Best practice at Microsoft, it would seem, encompasses flawed &#8220;full&#8221; implementations of a technology, with an eye firmly set in the past. Comments such as those made recently at [IEBlog][3] excusing these failures anger me, especially given the blatant irrelevance of defences used in relation to poor support of W3C recommendation technology.

<\/rant class=&#8221;off&#8221;>

 *[CSS]: Cascading Style Sheets
 *[UA]: User Agent

 [1]: http://www.w3.org/TR/REC-CSS1#background-attachment
 [2]: http://www.microsoft.com/windows/ie/evaluation/features/default.mspx
 [3]: http://blogs.msdn.com/ie/archive/2004/10/15/243074.aspx