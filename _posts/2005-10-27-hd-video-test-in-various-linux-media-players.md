---
title: HD video test in various Linux media players
author: Josh Street
layout: post
permalink: /2005/10/27/hd-video-test-in-various-linux-media-players/
categories:
  - Geek
  - Open Source
  - Visual
tags:
  - Ben Waggoner
  - Jon Johansen
  - Linux
  - media players
  - Warner Bros
---
Jon Johansen [posted a month or two ago about some HD trailers][1] a guy called [Ben Waggoner][2] put together of [The Island][3] (with permission from Warner Bros, it&#8217;s all good :)).

I grabbed the more recent, 8Mbps VBR followup test. This is 1920&#215;1080 stuff, no interlaced crap. To put things in perspective, this 1 minute 42 second trailer is roughly 100MB.

Quick summary, it works like this: gstreamer crapped out, mplayer wouldn&#8217;t start a lot, VLC kept crashing, xine puts in a great performance. mplayer was pretty good, too, when I tried enough times to get it to startup properly and play stuff&#8230; so long as I didn&#8217;t &#8216;jog&#8217; the track or anything (I love the OSD that it and xine do, though&#8230; very nice.)

Running with xine, X.org and xine sat at 97% usage (split roughly 55/45&#8230; yeah, everything else was pretty much idle) on my Athlon 2200+ (1.8GHz) &#8212; and that was with the MPEG2 version. The WMV version worked well on a 3GHzish Pentium 4 built for playing back video&#8230; but it looked like crap coz it was hooked up to a display at not-quite-native resolution (the display is a very expensive piece of crap. Not my fault.) On my desktop, however, the WMV version would only *start* to load.

Actually, that&#8217;s not quite true. mplayer would play vision (with lots of dropped frames) all the way through, but ignore audio, xine would play jerky audio and no video (well, it&#8217;d grab the first frame and stick with that on display), and gstreamer wasn&#8217;t even game to try.

The Real Video 4/Cook Audio version was an interesting one. mplayer would play audio smoothly for a few seconds, then cut out, then play video smoothly to catch up, then audio would catch up, etc. Never both at once! And, strangely, it decided to try and display this version in 4:3 (the trailer is 16:9, and it detects that fine with all other versions). xine played video smoothly at about half speed (as in, consistently half, no obviously dropped frames), but had no audio. Possibly a codec thing, but I thought mplayer and xine were using the same w32codecs package here. Could be wrong. VLC took a look at the file and gave up (it didn&#8217;t crash, it just sat there expecting attention as it normally does. I&#8217;m no fan, can you tell?), whilst gstreamer was typically competent. (Typically for it, of course, meaning &#8220;did nothing.&#8221;)

Everything could play the MPEG2 version fine&#8230; except for the usual suspects, though performance wasn&#8217;t quite so bad this time. gstreamer was pretty poor, cutting out regularly, but VLC managed an almost-acceptable performance &#8212; its only fault was occasional slowness between high-motion frames, and loss of A/V sync. (Heh, I&#8217;m glad it managed to play this one. I don&#8217;t think I&#8217;d *ever* seen VLC successfully play video before. Well, aside from boring 320&#215;240 stuff, anyway.)

The MOV was the worst in terms of all-round support. VLC played the AAC audio track fine, and only the first frame of video. Everything else choked, because the Linux drivers aren&#8217;t ready for Apple&#8217;s H.264 implementation (which, rumour has it, is crap anyway. Not that this makes a difference, seeing as they publish most of the world&#8217;s trailers &#8212; we&#8217;re all going to clamour to see them, just coz they&#8217;re in sexy HD), and neither mplayer nor xine separate streams like VLC does (at least, that&#8217;s what it looks like. I don&#8217;t really know :P). gstreamer I have no great idea about.

The quality was&#8230; very impressive. As in, I couldn&#8217;t fault it :P This is what I imagined DVD to be like before I actually encountered it, though, because they marketed the crap out of it even when the product itself was thoroughly mediocre. Aside from the digital/multi-channel audio and extra features thing, DVD really doesn&#8217;t do it for me in terms of quality&#8230; because it&#8217;s (often fairly heavily) compressed, medium-resolution MPEG2 (maxing out at 720&#215;480, <acronym title="If I recall correctly">IIRC</acronym>).

Incidentally, that&#8217;s one reason why I&#8217;m glad this whole HD DVD vs. Blu-Ray thing seems to be going Blu-Ray&#8217;s way: hopefully, the extra space will mean that content producers are less likely to compress things too badly anymore, and we&#8217;ll actually enjoy the benefits of the format. With Blu-Ray&#8217;s highest test and theoretical limits more than double what HD DVD has achieved, I&#8217;m looking forward to some absolutely awesome quality video in the not-too-distant future. (Sure, it&#8217;ll be another five years til I can *afford* it, but meh!) Here&#8217;s [a good comparison of the two from Engadget][4].

I&#8217;m currently torrenting the 18Mbps version&#8230; if I don&#8217;t post about it, it&#8217;s possibly because my computer exploded in a fireball large enough to engulf me when trying to process massive amounts of video information.

<ins>Whoa, no, it works fine. Admittedly, my computer can do absolutely nothing else at the same time, including resize the window, but it&#8217;s still not a bad thing. Quality is pretty much imperceptibly different (or, I think it <em>might</em> be better, but can&#8217;t really say for certain &#8212; placebo effect and all that &#8211;, so I&#8217;m not going to).</ins>

 [1]: http://nanocrew.net/2005/09/05/the-island/
 [2]: http://www.benwaggoner.com/
 [3]: http://www.theisland-themovie.com/ "Warning: The website sucks. Well, it might be good in IE, but I wouldn&#8217;t know about that."
 [4]: http://www.engadget.com/entry/1234000623059130/