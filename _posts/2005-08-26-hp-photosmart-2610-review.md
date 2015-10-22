---
title: HP Photosmart 2610 review
author: Josh Street
layout: post
permalink: /2005/08/26/hp-photosmart-2610-review/
categories:
  - Geek
tags:
  - Administrator
  - bundle software
  - desktop scanning software
  - Elizabeth Barrett Browning
  - file sharing
  - Internet Explorer
  - Mac
  - Mac OS X
  - network printer protocol
  - software flaws
  - software side
  - software sucks
  - UNIX
  - web interface
  - Windows
  - Windows XP
  - xp
---
Our new printer/scanner thingy arrived today, which is, as the title suggests, an HP Photosmart 2610. We lease our printers, so the Officejet G85 is going away \*sniff\*, but this thing promises new and better things! (Even if some of the software sucks &#8212; I&#8217;ll get to that, later.)

![A photo of the printer][1]

You can see the printer in that photo &#8212; it&#8217;s a fair bit smaller than the G85 was (before you go searching &#8212; because I *know* you actually care that much &#8212; I&#8217;ve only ever fleetingly mentioned that printer on here before. A quick search just [turns up a whinge about drivers, from last July.][2]), probably between two thirds and a half its size (in terms of bulk &#8212; it has an equivalent footprint, or maybe a bit shallower).

So what&#8217;s this thing do? Printing, scanning, faxing. Duh. It also has PictBridge stuff (which I doubt I&#8217;ll ever use), memory card slots, an LCD display, and network support.

I&#8217;m still uncertain which of the last two is cooler, but I&#8217;m leaning towards the network support.

The main control panel is very well planned out, and highly usable.

![The main panel][3]

The LCD screen tilts backwards and forwards (into a recessed area within the printer), and is backlit.

![The LCD display][4]

Its viewing angle is pretty mediocre, but it&#8217;s good when you&#8217;ve got your head in the right place/adjusted the screen properly.

Now that I&#8217;ve got the trivial stuff out of the way with lots of pictures, time for some more exciting and slightly-less trivial stuff with even more pictures! The network feature!

![A plugged in network port][5]

Yeah, okay. We&#8217;ve all seen a plugged in network cable before. Probably even seen a network cable plugged into a printer before. So why&#8217;s this special? To quote Elizabeth Barrett Browning, &#8220;Let me count the ways&#8221; &#8212; okay, so I&#8217;m not *quite* in love with it. (Thank goodness).

For one, this is a dirt cheap consumer printer. Well, probably a little more than dirt cheap. But squarely in the home/SOHO market, so the network support (it does USB, too) is out of the ordinary.

Not only is the presence of a port out of the ordinary, the software side of things is also surprising. HP, of course, have their own &#8220;JetDirect&#8221; network printer protocol. Which isn&#8217;t IPP, and isn&#8217;t some crappy Windows share. It&#8217;s supported on Unix systems thanks to HP&#8217;s co-operation with the open-source community, and on Windows/Mac systems, HP bundle software to deliver this functionality.

Still nothing special? Okay. How about this.

**You can not only use this network printer to print, but also to file share and network scan.**

Yeah. Cool, huh? Whenever you plug a card into the memory slots, it will appear as a network drive on Windows systems with the HP software installed (with one caveat, but I&#8217;ll get to that soon). I&#8217;m not sure what happens with Mac computers, but I imagine it&#8217;d be similar &#8212; we haven&#8217;t got any of those here for me to test with, a situation I&#8217;m planning to remedy in the near future.

Whilst on the topic of those memory slots, it&#8217;s also possible to scan on the device direct to the card, so you don&#8217;t even need a computer with drivers for scanning. Also, much in the same way as many consumer scanners have a button you can press to activate scanning on your computer, this device similarly allows you to do that &#8212; only you&#8217;re given a choice of which network-connected computer to send the scan to!

Scanning needn&#8217;t be so complicated, however. The first thing I did after installing cartridges was to setup the network inteface manually to ensure the device had a static IP and couldn&#8217;t get lost on the network. In my usual compulsive geek-investigator state, I scanned the ports of that IP (I picked 192.168.0.4, the lowest static IP still available on my network &#8212; we also use 192.168.0.101 to 200 for DHCP, but that&#8217;s a story for some other time) and discovered that in addition to the JetDirect and Windows file sharing ports, there was also port 80 open.

Score! I thought, as I hadn&#8217;t expected anything so civilised as a web interface on this thing.

I loaded up the page, and was greeted with this:

![A screenshot of the web interface][6]

It gives miscellaneous information about the status of the printer, along with links to various other functions. The most important of which is &#8220;Scan&#8221;.

Clicking through to &#8220;Scan&#8221;, I&#8217;m greeted with a simple enough screen that offers a choice of image type, and document size. One thing that *does* suck here is that A4 isn&#8217;t an option for the document size, so it&#8217;s impossible to scan the full size of the plate with the web interface. Standard desktop scanning software has no problems, this is just a usability flaw in the web interface.

You can preview your scan in this page, as shown in this screenshot&#8230;

![Screenshot of preview scan page][7]

&#8230;before progressing to the actual scan.

This next bit had me confused. At first, I thought it just didn&#8217;t like Firefox &#8212; so I walked over to a Windows computer and gave Internet Explorer a go. Same problem. It said the scan had completed successfully, but I couldn&#8217;t see anything. Internet Explorer, however, offered a more intrusive explanation of what had happened, proudly proclaiming that it had blocked a popup window.

So, back to Firefox, I added 192.168.0.4 to the list of allowed popup sites, and all was merry.

The experience has been a mostly positive one, with one exception. Their Windows XP software sucks. That needs some qualification &#8212; it only sucks if you&#8217;re using it in an environment that has been administered correctly. If you&#8217;re Joe-my-computer-is-full-of-spyware-from-running-as-administrator-Smith, then you&#8217;re in luck (for once): it&#8217;ll work fine. But, if you&#8217;ve setup user accounts (as could be expected, even in a small network environment) that aren&#8217;t running as Administrator (even the Power User group doesn&#8217;t work), then you can&#8217;t print or scan or read the contents of flash disks in the printer.

As I write, there is no known solution to the problem, and what I&#8217;ve read would suggest that HP are denying such a problem exists. Well, it does, and it isn&#8217;t solely because of inept administration.

In all, a good device marred by a few software flaws. If you&#8217;re looking for a network printer for a non-XP environment, be that earlier versions of Windows or Mac OS X or a \*nix environment, I&#8217;d say it&#8217;s a great buy. Bonuses are the ability to use the flash card reader on all connected computers, network scanning, and an LCD preview display.

In terms of print quality, the colours are okay, though key (black) isn&#8217;t wonderful. I&#8217;ve only tested on 60GSM paper, though, so that&#8217;s obviously a contributing factor in my judgement. I doubt the quality would be of concern to most users, at any rate. It&#8217;s more than adequate for most desktop tasks.

 [1]: /blog/wp-content/2005/08/hp2610/ps2610.jpg
 [2]: http://www.joahua.com/blog/2004/07/10/back-back-again
 [3]: /blog/wp-content/2005/08/hp2610/controls.jpg
 [4]: /blog/wp-content/2005/08/hp2610/display.jpg
 [5]: /blog/wp-content/2005/08/hp2610/network.jpg
 [6]: /blog/wp-content/2005/08/hp2610/webfront.png
 [7]: /blog/wp-content/2005/08/hp2610/webscan.png

 *[SOHO]: Small Office/Home Office