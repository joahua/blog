---
title: Nvu revisited
author: Josh Street
layout: post
permalink: /2006/07/25/nvu-revisited/
categories:
  - Open Source
  - Web Standards
tags:
  - composer
  - content management
  - HTML
  - web-based content management systems
---
![Screenshot: Nvu working on a table][1]

I tried [Nvu][2] ages back when it was still fairly new (but a while after the fork from Composer) and was pretty uninspired by the whole experience. Just recently I&#8217;ve been giving it a whirl for more complicated semantic markup (i.e. tables) and it&#8217;s performed admirably! You&#8217;ll note in the screenshot the HTML tag view gives you a pretty precise look at what&#8217;s going on. I managed things with regular tabbing between HTML tag and Source views (the Source syntax highlighting still isn&#8217;t realtime, which is a bit disappointing) &#8212; this is really helpful in reducing the time it takes to churn out good quality tables. You can also create unsemantic tables and whatever else with this, but it fixes things fairly readily and has &#8220;header&#8221; styles inbuilt for TH things, etc. The only thing it really doesn&#8217;t seem to want to do even manually is add thead elements, but if you edit them in yourself it won&#8217;t try and get rid of them.

Really good (free) tool for certain types of maintenance stuff. If it had a half-decent templating system (*ala* Dreamweaver Templates, which have got to be pretty simple to implement on top of an existing code base doing all the hard WYSIWYG work, etc.) I&#8217;d be seriously considering making more static page templates and handing administration over in a client-side sense using this program. Great stuff, and if you haven&#8217;t looked at it for a while/ever, worth considering.

**Edit:** Maybe it *does* have a half-decent templating system! I just saw the very prominent **Insert &#8594; Templates &#8594; Insert Editable Area** option. Doh, now I have to seriously think about such things. And, upon more serious reflection, the advantages afforded by web-based content management systems are generally too great to ignore. The only case it could be justified is where there&#8217;s no budget (or, in the case of volunteer work, no time), in which case chances are the website isn&#8217;t too likely to have dynamic requirements, anyway.

 [1]: /blog/wp-content/2006/07/nvu.png
 [2]: http://www.nvu.com/