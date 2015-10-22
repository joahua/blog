---
title: totem-xine and playing nice with esound
author: Josh Street
layout: post
permalink: /2005/05/22/totem-xine-and-playing-nice-with-esound/
categories:
  - Open Source
tags:
  - sound server
  - Ubuntu
---
Totem is great, but adding plugins via its brilliant drag-and-drop-couldn&#8217;t-be-easier &#8220;Add Proprietary Plugins&#8221; interface does absolutely nothing if you&#8217;re using the `totem-gstreamer` version (the default that ships with Ubuntu). Switching to `totem-xine` makes the playback with these plugins possible, but potentially introduces problems of its own.

The inbuilt configuration of Totem is pretty poor, but thankfully there&#8217;s a way around it. The actual configuration exists in a hidden folder in your home directory &#8211; for me, this is `/home/josh/.gnome2/` &#8211; the file you&#8217;re looking for is `totem_config`

For me, it was simply a case of uncommenting audio.driver and setting it to &#8220;esd&#8221; (`audio.driver:esd`) &#8211; but depending on what distribution and sound server you&#8217;re using, <acronym title="Your Mileage May Vary">YMMV</acronym>.

Anyway, Totem now works great, and I have cooler visualisations than gstreamer&#8217;s!