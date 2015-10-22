---
title: 'whisper power consumption &#038; emissions'
author: Josh Street
layout: post
permalink: /2007/08/07/whisper-power-consumption-emissions/
categories:
  - Geek
tags:
  - APC UPS
  - dell
  - energy efficient devices
  - laptop computer
  - low-power-consumption processor
  - Polaroid i-Zone 300W Digital Camera
  - streaming media
  - sydney
  - The Great Global Warming Swindle
  - thermal energy dissipation
  - web server
---
Now, I&#8217;m not sold on this whole greenhouse thing just yet (*The Great Global Warming Swindle* had at least as much sway over my opinion as that Powerpoint presentation to which it was, perhaps, a counterpoint), but as a matter of mere consumption (and intellectual curiosity) I was keen to learn just how much power one of my computers, in particular, was using annually.

This one sits in a cupboard, answers to the name of &#8216;whisper&#8217;, reaches obscene temperatures in summer (yet does not crash), and, at its heart, features a low-power-consumption processor and motherboard by VIA. It also has two hard drives and a single 512MB (8-chip double-sided (16 total)) DDR-400 DIMM.

And that is all.

Most of the time, it&#8217;s relatively untaxed&#8230; it acts as file storage, a web server for miscellaneous stuff I want to share quickly, and a development box for more adventurous things. At one stage it was hosting streaming media (and, very *very* briefly, a Counter-Strike server&#8230; it is horribly under-specc&#8217;d for such duties). It&#8217;s also useful for SSH&#8217;ing into and bypassing proxies when you really need to get to something (entirely legitimate, mind), but increasingly less so as a certain workplace of mine blocked SSH out access when we moved floors. No matter &#8212; I&#8217;ve identified a HTTPS-SSH solution to that particular problem, but haven&#8217;t been motivated to implement it just yet!

So, here&#8217;s the run-down:

<pre>Load	Idle
VIA EPIA PD10000	23W	15W
Generic 512MB		2W	1.5W
ST380011A		12W	8W
ST380011A		12W	8W
			49W	32.5W</pre>

Most of those have been rounded a little bit, but&#8230; let&#8217;s just say it only uses 49W at the most.

Then, there&#8217;s the 65%-efficiency-at-full-load (230W) power supply to consider. We&#8217;re no-where near full load, but let&#8217;s just say it&#8217;s consistently efficient (or, in-efficient) regardless of load. In practice, it&#8217;d probably be slightly better for lower loads due to reduced heat production.

So, our 49W suddenly becomes (49&#215;1.35) 66.15W

That&#8217;s 579.47kWh/year, which (apparently) equates to about 400KG of emissions. This, friends, is absolute worst-case scenario. More realistically, the system will be idle most of the time, using 384.3kWh/year, and pumping out around 260KG of carbon.

I&#8217;d be interested to see how this would compare to a typical laptop computer.

For this particular computer, there&#8217;s only a little that can be done to improve efficiency. The obvious target is the two hard drives, which, combined, draw nearly as much power as the rest of the system! Considering there&#8217;s not a dramatic amount of storage presently in use, I could almost justify replacing these with a solid-state device (in the form of an IDE-card reader bridge, because real SSD drives remain prohibitively expensive and difficult to obtain in this country) if the need were really there.

And what would create such a need? Well, part of the reason I wanted to find out was to see how many hours this thing could live off a fairly cheap UPS for. Turns out it&#8217;s probably got at least an hour&#8217;s worth of life in it, which is moderately incredible compared to the typical ten-minute-or-it&#8217;s-fsck-time expected parachute expectancy!

The only problem in adding a UPS is that they&#8217;re not the world&#8217;s most energy efficient devices themselves, with an APC 500VA model chewing 24BTU (82.02W, since we&#8217;ve been working in that thus far) per hour when &#8220;online&#8221;. BTU is a measure of thermal energy dissipation, by the way, so probably it&#8217;s also less-than-ideal for sticking in a cupboard in which the next-largest heat source is probably the power supply at a meagre 17.15W (assuming its inefficiency is purely thermal, which, of course, it won&#8217;t be &#8212; other non-thermal radiation must account for at least some of its loss).

So, there we go. A fairly useless exercise that will become marginally less useless if ever there are rolling brownouts in Sydney and I need something to be able to weather the power storm. The other great thing about UPS is they provide fairly decent power conditioning, too. Given you can pay about $50 for a decent 6-way surge protected board, or only $140 for a 500VA (300W) APC UPS these days, it&#8217;s really not that bad a deal afterall.

Sources:

VIA EPIA-PD10000 power usage: [http://www.via.com.tw/download/mainboards/3/4/OG\_EPIA-PD\_111804.pdf][1]  
Generic 512MB DDR-400 memory power usage:  
My memory, from prior reading and specs of higher-quality memory that actually publish such data.  
Seagate ST380011A power usage:  
<http://www.seagate.com/support/disc/manuals/ata/cuda7200pm.pdf>

SFX-230M2 switching power supply (used by a lot of big OEMs like Dell and HP, it turns out) specifications:  
<http://www.sirtec.com.tw/photot2/10205/210205R11.pdf>

 [1]: http://www.via.com.tw/download/mainboards/3/4/OG_EPIA-PD_111804.pdf