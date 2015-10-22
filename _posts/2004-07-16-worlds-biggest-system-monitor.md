---
title: 'World&#8217;s biggest system monitor?'
author: Josh Street
layout: post
permalink: /2004/07/16/worlds-biggest-system-monitor/
categories:
  - Before WordPress
tags:
  - BSD
  - Java
  - Kernel
  - Shure i2c Headset
  - SuSE
  - trippy hardware
---
My current project (as of a few days ago, nothing long term ;)) is getting a working [phpSysInfo][1] page *with* trippy temperature monitoring and other such kah-razy features.

So, I grabbed the latest from the SF [CVS][2] server (2.3-cvs) and installed it, because my old version (2.2-release) has some serious issues with SuSE&#8217;s way of doing things &#8211; it "worked", sans Memory Usage and missing much of the Hardware Information.&nbsp; Not that that is really relevant anyway, seeing I (of course!) wanted to try out the latest.

I&#8217;m not sure if 2.2 supported the trippy hardware monitoring thing, but even if it did, I&#8217;m over it already ;)&nbsp; 2.3 has a nicer version number :p

Yeah.&nbsp; So.&nbsp; Hardware monitoring.&nbsp; I downloaded a few (it supports 4 different backend programs) and tried to compile &#8211; xmbmon downloaded and compiled fine (well, okay &#8211; mbmon compiled fine, the x extension didn&#8217;t&#8230; not that it matters, because for my purposes I only *want* the CLI version)&#8230; except it&#8217;ll fail except when run as root.&nbsp; It&#8217;s a documented problem, although the only reference to it was in relation to \*BSD systems, and the fix refers to some kernel-related file which apparently doesn&#8217;t exist.

So I gave up on that&#8230; it was probably a surmountable problem, but still, other peoples code scares me off.&nbsp; Moving on to the next (non-BSD-only) option!

LM Sensors&#8230; hey, that&#8217;s okay.&nbsp; Relies on kernel hooks, which prior to 2.6 kernels involved rolling your own with an i2c extension compiled in.&nbsp; I am, for the first time, as greatful as I should be for SuSE&#8217;s lean towards the cutting-edge!&nbsp; Hmm.&nbsp; That said, LM Sensors apparently won&#8217;t compile without kernel source.

So.&nbsp; I want to install a 780KB app, and wind up downloading ~700MB of stuff!&nbsp; Hmm.&nbsp; This works, really it does.&nbsp; Kernel sources are only ~180MB (at least, the SuSE respiritory RPM&#8217;s are that big&#8230; last time I checked the size of the kernel (admittedly, that was back when 2.4 was the new thing), it was about 60MB!), but I got distracted in package-selection, and saw that a newer version of Opera was available, so I grabbed that.

Apparently the old version of Opera had no problems at all without a certain dependency, but this latest one requires Eclipse&#8230; a ~170MB Java library thingo.&nbsp; At least, I think that&#8217;s what it was&#8230; OSS is way too trusting with dependencies!&nbsp; Hehe.

So after having downloaded all that, I&#8217;m thinking the compile still isn&#8217;t going to work!&nbsp; Doh!

Ah well.&nbsp; phpSysInfo is still cool ;)

 [1]: http://phpsysinfo.sf.net/
 [2]: http://cvs.sourceforge.net/viewcvs.py/phpsysinfo/