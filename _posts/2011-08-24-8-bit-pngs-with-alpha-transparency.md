---
title: 8 bit PNGs with alpha transparency
author: Josh Street
layout: post
permalink: /2011/08/24/8-bit-pngs-with-alpha-transparency/
categories:
  - General
tags:
  - 8 bit
  - alpha
  - color
  - colour
  - index
  - png
  - transparency
  - ui
---
To some developers, the title of this post might well read &#8220;Unicorns exist! News at 11!&#8221;. Exciting stuff, but not widely known in my experience. Not that unicorns exist in my experience. I digress.

The colours below are the palette generated with indexed transparency (left) vs. true alpha transparency (right) in a 256 colour 8 bit PNG by a lovely piece of software called Fireworks. Let me explain.

<img src="http://josh.st/blog/wp-content/2011/06/8bit-png-alpha.png" alt="" title="8 bit PNG with alpha channel" width="485" height="185" class="alignnone size-full wp-image-1708" />

I&#8217;ve joined a new UI development team this past week that require pretty broad-based browser support for a bunch of sites (i.e. IE6 experience needs to not suck) and their process includes a PNG quantization step before hitting a live environment. This is cool, but the IE6 support necessitates not using alpha. Or so I&#8217;m told.

This prompted me to look up something that I discovered probably around a year ago but never got around to writing it up, nor particularly practicing!

I can&#8217;t remember where, exactly, though suspect [Dave Shea][1] might&#8217;ve had a pointer or an article that presumed knowledge of the technique. In the process of writing this article, I&#8217;ve also rediscovered [a SitePoint article on the issue][2] that&#8217;s quite helpful.

The bottom line is PNG-24 is great but impractical in older browsers for a host of reasons. While 8 bit PNG is not without its limitations (c&#8217;mon, 256 colours ought to be enough for anyone!), it&#8217;s clear that for graceful degradation and marginal improvements in file size it&#8217;s stil worth considering.

In terms of creating images there are a few challenges. First and foremost, everyone uses Photoshop but Photoshop sucks at save-for-web&#8217;ing 8 bit PNGs: you just don&#8217;t get the options you need. Fireworks hands you this in spades. I&#8217;m no Fireworks pro insofar as workflows and just getting designs done goes, so typically I&#8217;ll save for web to a 24bit PNG from Photoshop and then open that in Fireworks to export the alpha 8 bit image.

The Sitepoint article linked above suggests that [some] quantizers will give you the chance to do the same thing, but the issue is if you&#8217;re exporting an 8 bit PNG in the first place you&#8217;ve already lost the chance to create an image with alpha. Most front end devs will want to preview things like dithers, colour banding, etc., so handing control over to a CLI tool just isn&#8217;t going to fly. I&#8217;d contend that Fireworks is really the only viable solution in that it balances image optimisation and control. Of course, you&#8217;re welcome to run the PNG Fireworks outputs through a [quantiser][3]: it&#8217;s already 8 bit so your palette is locked in, and the quantiser is unlikely to mess with the alpha if it purports to support this.

The reasons are broader than just browser support: in my (limited) testing, PNG24 files could easily weigh in at twice the size of their RGBA 8 bit alternatives. On a 500x500px test that generated the paletts shown above, file sizes were as follows:

*   8 bit PNG indexed: 7KB
*   8 bit PNG transparency: 7.5KB
*   24 bit PNG: 15KB

I&#8217;m going to make sure I actually take advantage of this feature in the future, as there are clear filesize benefits to be had as well as support for crappy, dwindling browsers. Sorry, IE6.

 [1]: http://mezzoblue.com/
 [2]: http://www.sitepoint.com/png8-the-clear-winner/
 [3]: http://pngnq.sourceforge.net/