---
title: cPanel/WHM deleting account slowness
author: Josh Street
layout: post
permalink: /2006/03/14/cpanelwhm-deleting-users/
categories:
  - Geek
tags:
  - over-selling systems
  - Perl
---
I&#8217;m amazed at how *long* this takes! My guess is it&#8217;d take longer on over-selling systems (i.e. lots of accounts using very little resources, sold more resources on one host than would ever realistically be used rapidly enough to warrant concern) because of the volume of lines/files to be parsed for various services, but still. I just got rid of a site that&#8217;s wound up and it must&#8217;ve taken about a minute and a half (this is on a normally-quite-responsive dual Xeon 2.8 with HT (so it *looks* like a quad processor box! ;-)) with a not-so-small 4GB of memory). There was a really-quite-small database and less than 10MB of files (across probably less than 100 files for the entire site)&#8230; seems like a pretty long time!

I guess things would be slowed down by the fact that because the script is being run from a webpage (probably Perl?) it doesn&#8217;t multitask things (so, for example, syncing a password database for a particular service might be CPU/memory intensive whilst other processes are just quickly marking inodes as empty &#8212; but the two can&#8217;t occur at once). Shrug! I think this is the first time I&#8217;ve ever had to do this, so I&#8217;m hardly jumping up and down with anguish at all the wasted hours of my life (heh, I&#8217;m a uni student, I have no right to complain about such things! Or something.)&#8230; just seemed a bit lame.