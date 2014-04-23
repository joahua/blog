---
title: Some tips for mobile CSS
author: Josh Street
layout: post
permalink: /2012/03/06/some-tips-for-mobile-css/
categories:
  - General
---
On &#8220;retina&#8221;/high DPI:

*   SVG sprites are a beautiful thing. Make the canvas size work at a device ratio of 1, and capable user agents (read: mobile Safari) will do the hard work for you. Don&#8217;t create a double-resolution sprite, because you&#8217;ll need to manually re-declare all your sizing and positioning, which is no fun.
*   Opera supports SVG but doesn&#8217;t bother to scale it. In most cases, this means a well-quantised PNG is going to be smaller.
*   Opera&#8217;s device-pixel-ratios are actually expressed as ratios (x/y), as opposed to floats (1.5). I actually think this makes a lot of sense, though I&#8217;m pretty sure they&#8217;ve already lost this battle.
*   Mozilla/Fennec doesn&#8217;t do ratios in a standard way, either &#8211; their syntax is &#8220;min&#8211;moz-device-pixel-ratio&#8221;. They obviously missed the part where browser prefixes are supposed to be, well, prefixed. This was done back in late 2010 and they looked at the -webkit implementation first, before implementing it in a very different fashion without much debate. It&#8217;s a [mind-bogglingly undiscussed][1] issue on Bugzilla and the wider Internet.
*   Android DPI values for DevicesYouKnowAbout(tm) hover [around the 1.5 mark][2]. Anything lower than this and the device capabilities probably don&#8217;t make it worthwhile, and anything higher is probably an iPhone. Higher resolution Android devices just don&#8217;t seem to exist, or, for the most part, report themselves as existing (March 2012 &#8211; yeah, the Nexus and Galaxy S2 and stuff are big, but don&#8217;t seem to be documented as reporting high DPIs).
*   Okay, so DPI values aren&#8217;t quite that simple. To quote A List Apart, &#8220;we don’t know what each device considers a pixel and this is a problem.&#8221; [Read about it][3], test lots, buy Android devices if you want to be sure.

Miscellaneous gotchas:

*   Certain Android variants &#8211; I don&#8217;t have enough devices to test conclusively &#8211; drop gradient backgrounds, opacity etc. (presumably for performance reasons) despite having &#8220;A grade&#8221; capabilities in a lot of other senses. Make sure you do simple things like having backgrounds and borders on elements that would have previously been divided by gradient contrast. Your featurephone visitors will also thank you. In an ideal world you&#8217;d probably progressively enhance these kind of things, rather than patching it up afterwards, but it&#8217;s easy to get caught up in the excitement of only needing to support &#8220;A Grade&#8221; browsers (accepting that IE is suitably banished from Mobile land) and just forget. Don&#8217;t forget.
*   Beware HTML5 manifests &#8211; they raise storage prompts that could scare some users in some browsers (&#8220;why is this site storing info about me?). They&#8217;re also actually not that effective unless you pin an app to the home screen, so reconsider your need to use one.
*   Fennec uses left/right swiping for accessing browser UI. This is a pretty dumb design decision, because it breaks left/right swiping gestures (think photo galleries). Expose an alternative UI (Next/Prev buttons perhaps?) for browsers that don&#8217;t do touch events in this way.
*   Windows Phone 7. You&#8217;ve heard good things, right? Kinda. It&#8217;s definitely up there, but early versions of this device (2011) had a browser that was more or less equivalent to IE7 with a few IE8 features thrown in for good measure. I&#8217;m not bothering to support it. However, even the latest versions (March 2012) don&#8217;t support touch events (!) so expect it to be even worse than Fennec for conventional swipe-driven mobile UI in the browser. It does have Canvas support, but apparently lacks SVG in the browser.
*   SVG gradient support is patchy (probably for similar reasons Android devices choose not to render CSS gradients)

Tips:

*   Use text-rendering: optimizeLegibility; on headings as it does great things on the iPhone 4. (via [Menacing Cloud][4])
*   Flash ads work. This is staggering, but true. Expect that Android devices will successfully display Flash ads, and pay attention to different markup that gets adserved for these devices as it will possibly impact your CSS.
*   Image based ads scale down quite well. It&#8217;s tricky getting mobile inventory smaller than 300px wide, but if you&#8217;re expecting 240px devices then just use max-width:100% for this. It&#8217;s better than breaking the layout or not serving ads to these screens, not that there are many of them left.

 [1]: http://www.google.com/search?hl=en&q=%22min--moz-device-pixel-ratio%22+%22-moz-min-device-pixel-ratio%22
 [2]: www.alistapart.com/articles/a-pixel-identity-crisis/
 [3]: http://www.alistapart.com/articles/a-pixel-identity-crisis/
 [4]: http://menacingcloud.com/?c=highPixelDensityDisplays