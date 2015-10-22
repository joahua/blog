---
title: The blockquote follow-up
author: Josh Street
layout: post
permalink: /2004/09/24/the-blockquote-follow-up/
categories:
  - Design
tags:
  - Adobe
  - compression algorithms
  - GIF
  - Internet Explorer users
  - software territory
  - standards-compliant software
  - web-distribution
---
Hmm. My [original post][1] about this thing didn&#8217;t exactly go as planned, so I&#8217;ve addressed the only feedback I recieved, and am back again with the results.<!--more-->

If you were one of the three who commented previously, it&#8217;s probably worth wandering over to the old post, and reading my ammendment (after all the comments were made, but hey). There were two or three technical problems at that stage, but really, I was perfectly aware of them, and it wasn&#8217;t intended to be a permanent situation by anyones reckoning.

The three things, in no particular order, were as follows

1.  For a decorative image, this thing was seriously hefty. 23KB is nice, but seeing it&#8217;s part of a CSS element, users won&#8217;t even know it&#8217;s LOADING, let alone wait for it to do so.
2.  It was a PNG image, a fact which caused Internet Explorer users some consternation. You know what? Big deal. I don&#8217;t care. Get a better browser, or go somewhere else that does care &#8212; this is my personal website, and if you think it looks like crap because you elect to USE crap, then that&#8217;s your prerogative. The rest of us plebs will be stuck with our dodgy Open-Source, standards-compliant software, whilst you laugh at us from afar, enjoying your DirectX CSS extensions and DSO exploits&#8230; I mean&#8230; okay, stopping now.
3.  The image was hosted on my workstation at home, a system for which I have no ambitions of uptime. It gets turned on, and off, as I desire and use it &#8212; if you were looking at the `blockquote` and wondering what on earth this rambling soul was speaking of, that&#8217;s probably because the image wasn&#8217;t displaying, as my computer was turned off. Apologies if you&#8217;re in another timezone and were trying to view it&#8230; the problem is fixed now, so hey

And they&#8217;re the three. I&#8217;m a little curious as to how Stuart managed to form an opinion of the graphic, seeing I&#8217;m moderately certain my computer wasn&#8217;t on, and hadn&#8217;t been for several hours, at the time he posted, but hey&#8230; I can only presume that he was simply agreeing with previous statements about the size of the image.

So, here&#8217;s what has happened. I cut a production version of the image, which (predictably) did very little for the filesize, as it was all whitespace anyway, something modern compression algorithms deal with quite effectively. That shaved a grand total of 1KB from the total file size, when saved as a PNG. There wasn&#8217;t a whole lot else I could do, other than screw with compression options and hope it did something useful. The file got bigger, inevitably&#8230; that&#8217;s what happens when Josh doesn&#8217;t know what he&#8217;s doing!

Time to give the dreaded, horrible GIF format a go. Yay, I&#8217;ve got 255 shades of grey to play with. You wouldn&#8217;t believe it, but that isn&#8217;t enough&#8230; I&#8217;m sure there is all kinds of stuff I could have done fiddling with indexed palettes, were I using something more powerful&#8230; The GIMP is great, but a tad obscure with some things. That said, the last time I played with indexed palettes was mid-2003, when I was working over at [Designate][2] &#8212; and even then, it was only because the archaic version of Flash I was using at the time didn&#8217;t like what various Adobe packages were throwing at it. Plus, I was surrounded by people who lived and breathed that stuff, so it&#8217;s not like I was stuck out on a limb, negotiating unfamiliar software territory alone.

So, the GIF image, with transparency, ended up at an impressively tiny 891 bytes for a 200 by 200 pixel image. The only problem was, it looked as though that were the file size compared to the purer PNG and shop files, too. Scrap that idea, it&#8217;s a complete corruption of all design which went into this element! Not that there was a substantial amount, but for a concept sketch and a 10 minute implementation&#8230; still, I&#8217;m fairly proud of the aesthetics of it, and conversion to GIF format completely destroyed that.

There is one option left, at this point, for web-distribution. And it doesn&#8217;t involve transparency, or alpha channels, or any of the fun stuff which I&#8217;d really prefer to use in this case&#8230; yes, I&#8217;m speaking of JPG images. I just changed the colour of my backing layer to the background colour of my `blockquote` element, and it worked&#8230; nothing particularly amazing or special about any of this, so I won&#8217;t detail it. For those who are curious, the hex code for the backing colour is #D3D3D3 &#8212; in RGB-speak, that&#8217;s 211 for all (obviously, that means HSV would be 0,0,211).

And the outcome? At 7.51KB, it&#8217;s still a little bigger than perhaps it should be. I&#8217;m over it, though. It&#8217;s a non-essential element of the design, and can load in however long it wants&#8230; if people see the graphic, great. If not, well&#8230; I&#8217;d hope that other elements of design make up for it.

This time around, I&#8217;m inviting *all* comment, technical or artistic. If you have some idea how to use indexed palettes in The GIMP properly, let me know!

*To see this `blockquote` element in action, take a look at either of these two posts:  
<http://www.joahua.com/blog/2004/09/24/killer-photography>  
<http://www.joahua.com/blog/2004/09/22/solid-linux-rss-reader>*

 [1]: http://www.joahua.com/blog/2004/09/22/new-blockquote-graphics
 [2]: http://www.designate.com.au/