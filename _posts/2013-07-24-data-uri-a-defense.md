---
title: In defense of Data URIs
author: Josh Street
layout: post
permalink: /2014/04/24/data-uri-a-defense/
---
A friend sent [this Mobify article](http://www.mobify.com/blog/data-uris-are-slow-on-mobile/) my way with a one-liner comment: "Sprites over Data URIs?"

True to Bettridge’s law of headlines, here’s my reaction.

No. :P

Their test image is a 17.6KB file. If you're serving up any files that big you've already lost (see also, our jumbo sprites on mastheads). See also the recommendation at the end of the post to "use data URIs in exactly the right way" -- which, I hope, is broadly how we've been using them.

This isn't to completely disregard these results, but I would like to see it run with better test data (images in the 500 byte - 4KB range, say) to reflect actual best practice usage. Again, if you're using images as large as they are, there are probably ample opportunities to make easier micro-optimisations, which is what this whole debate is about.

That said, there are plenty of other problems with this article.

The penalty of data URIs for older phones is severe - on Android 2.2 materialization of five 17.8kB images took almost 2 seconds in the data URI condition!
 
Note how Android 2.2 is a complete outlier in the original chart and subsequent observations -- it's not supported by us, and comprises >0.5% of m-site traffic (source: GA, last 30 days). It's a red herring that would be better off excluded for honest charting -- especially given the author's own data reflects ours -- see his own RUM chart distribution for evidence.

There's also a methodology problem in that this is dealing with inlined src attributes on elements, which introduces additional DOM performance and possibly reflow considerations assuming these are visibly attached that you wouldn't experience with background images in CSS. Completely agree that it's harder to measure the nonexistent 'load' event of CSS background images, but that isn't a defense for the disingenuous finding that this equally impacts all inlined images. (Though the high CPU assumption seems sound enough.)

Here are a couple of assumptions of my own:

1. CSS parsing is necessarily more efficient than popping elements onto an unstable DOM, unless you attach the CSS late in the load. Note how in the histogram charts image materialization starts dependably late (i.e. reliably >5ms in) -- CSS parsing has happened long before this assuming it was in the head.

2. CSS uses 'classes', and is therefore more efficient than creating separate DOM elements with separate attributes that need to be individually unpacked. Therefore, measuring the materialization of five images is a poor test, unless four of those were deep cloned from an original element and browsers somehow cache the unpacked binary data (poking around source code and bug reports might help ascertain this). Suspect the test didn't do this, and if not, strongly doubt that browsers would have stored a hash of the unpacked encoded data to quickly reference -- memory is too tight on mobile to bother with this.

3. Because of 2, multiple instances of elements (commenting icons, media type indicators, etc.?) will not incur any measurable performance hit over loading just a single element, though obviously more elements on the DOM costs something.

4. Even disregarding 1-3, we are splitting hairs here. It's a micro-optimisation whereby we're hoping to move events in the 10-20ms range (if you accept that a 17KB image is even a reasonable test) to the 1-5ms range. That sounds big, but consider the number of elements we are doing this with, and consider user perception of this on pages that can already take over a second to load.

Data inlining, especially with preprocessors, is about maintainable code (because sprites are the Dementors of the front-end world), repeating/large-but-small-filesize backgrounds, and the ability to pick whatever format you like should you so choose (i.e. for some very small images, GIF outperforms PNG, and for some textures, JPG outperforms PNG, and with inlining you can CHOOSE to do this!)

If this is really keeping you up at night, look into using Appcache as well, because that'll hopefully save on some network pain (assuming we're worried about that given how bullish the original post is on pipelining). I apologise in advance for the caching complexity and curly support requests it creates!

Still firmly of the view that there's a big place for data-inlining on the mobile web.