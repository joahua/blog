---
title: Routed routers and CSS
author: Josh Street
layout: post
permalink: /2004/10/05/routed-routers-and-css/
categories:
  - Design
  - Geek
tags:
  - cluttering
  - Coyote Linux
  - DSL
  - Eric Meyer
  - Internet Explorer
  - Linux
  - Mozilla
  - Smoothwall
  - Vortech Consulting
---
Today consisted of miscellaneous fun and frustration, most of it revolving around assorted pieces of technology. I&#8217;ve decided that my hardware took offense at my failure to let them know I was going away for a few days, and as such, it is all refusing to work.<!--more-->

At least, it *was* all refusing to work &#8212; I&#8217;ve sat here for much of the day with a mouse in one hand and a knife flicking in and out in the other, and it seems to have taken a hint. In the end, I ended up not doing too much with hardware, although I had some seriously odd problems with my router, which are easily attributed to software, but it&#8217;s far more difficult to explain exactly what the software was doing wrong. I made a call to my ISP to see if there were any reported faults (because they&#8217;d never support me, as I dare to run, get this, a firewall on direct-to-Internet connected computers, even when I&#8217;m forced by support to not use my rouer)&#8230; turns out there wasn&#8217;t, and when I convinced myself it was worth plugging in the modem direct to one of the two remaining Windows computers (I had to find a disc with firewall software on, that thing hadn&#8217;t had a direct connection for so long!), it connected fine. Square one.

At least I had working broadband, though. I kind of got frustrated at that point, and proceeded to blame [SmoothWall][1]&#8230; it was stubbornly refusing to connect in any circumstances, despite the built in PPPOE client in my nifty little D-Link DSL 300 modem managing just fine. The next port-of-call was the website of my previous router distribution, [Vortech Consulting][2], the makers of [Coyote Linux][3]. I&#8217;ll admit, I&#8217;m a tad promiscuous when it comes to technology&#8230; it&#8217;s part of being a geek, I&#8217;m sorry.

The latest version of Coyote is quite nice &#8212; better than the old version of it, certainly. It still fits on a single floppy with tonnes of room to spare, and I think it&#8217;s generally quite nifty. It doesn&#8217;t do all the trippy things that SmoothWall did, but there are modules I could download to do the same, if I were so inclined. Not that I am.

On a non-failing equpiment related front, I spent the *other* part of my day hacking at CSS of two websites, one of which is turning out rather nicely. I&#8217;m applying some of [Eric Meyer&#8217;s][4] wonderful [CSS/edge][5] techniques to one of them, which is essentially taking the primary navigation I&#8217;ve got happening on this website, and adding some rather classy touches to it. This time around, it has to work well in Internet Explorer, though. Don&#8217;t you hate that? If you look to the top right of this web page (as of the style in production use on October 5, 2004) in Internet Explorer, the navigation menus are decidedly not-working, when compared to their intended display, as per Mozilla-based browsers (including Netscape, Mozilla and Firefox) and recent-ish versions of Opera.

Hopefully I&#8217;ll bother porting the fixed version back to this website when that project goes live, but we&#8217;ll see. &#8217;tis exciting stuff, really. I&#8217;m a little wary about the sematics of Eric&#8217;s code, thinking especially of non-visual UA&#8216;s, but such problems shall disappear by the final version of the project, as text will be replaced with images &#8212; purely presentational elements, with null alt values, such that the ancillary text may explain things perfectly clearly without cluttering non-visual &#8220;display&#8221; (or just making no sense when read aloud by screenreaders). But I&#8217;m rambling; none of this makes sense to the rest of the world. That said, I&#8217;ll keep rambling about it, in the hope that there&#8217;s some documentary value to what is written once various websites go live.

 [1]: http://www.smoothwall.org/
 [2]: http://www.vortech.net/
 [3]: http://www.coyotelinux.com/
 [4]: http://www.meyerweb.com/
 [5]: http://www.meyerweb.com/eric/css/edge/

 *[UA]: User Agent