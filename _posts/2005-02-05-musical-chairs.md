---
title: Musical chairs
author: Josh Street
layout: post
permalink: /2005/02/05/musical-chairs/
categories:
  - General
tags:
  - AMP
  - 'D-Link DI-624  wireless router'
  - directly-Internet connected device
  - domain controller
  - email server
  - Fedora
  - file/print server
  - FreeBSD
  - Linux
  - nice happy domain controller
  - NVidia
  - operating system
  - SuSE
  - Telstra
  - United States
  - Windows
  - wireless router
---
If something starts going right, something else has to break. At least, that&#8217;s how it seems at the minute &#8212; as soon as one PC starts behaving, another falls to a most miserable state of existence. It&#8217;s all about the distribution of &#8220;lucky points&#8221;, a brilliant friend remarked&#8230;

My SuSE desktop isn&#8217;t booting into X (or, is, but the proceeds to become unusable&#8230; go figure &#8212; the numlock key still works, and it&#8217;s fine in runlevel 3, but as soon as X starts, out go the network interfaces and display!) &#8212; which wouldn&#8217;t be a problem on any *normal* system, but I&#8217;m fairly sure I&#8217;ve whinged in the past about how stupidly stupid SuSE is when it comes to doing things in any standard way&#8230; even binary stuff like NVidia&#8217;s Linux drivers it manages to mangle, which is the problem here &#8212; I can&#8217;t uninstall them, and I can&#8217;t reinstall them, because SuSE apparently requires special treatment. <small>Sort of. The NVidia guide says you can manually install it but it won&#8217;t handle kernel upgrades on its own (e.g. you&#8217;ll have to reinstall the drivers every time, like on all other distros!) &#8212; except, this problem was caused by a kernel upgrade and SuSE&#8217;s failure to deal with it on its own, and now I&#8217;m up the proverbial creek because manual intervention isn&#8217;t an option (or rather, it&#8217;d be faster just to reinstall another operating system, or something.)</small>

There is good news, though (not that this has substantial/any impact on the rest of the world &#8212; it&#8217;s good for me, and this website is all about my status as a &#8220;[cheap exhibitionist][1]&#8220;! &#8212; plus the fact that you&#8217;re reading this implies that you&#8217;re either bored enough to be interested, or objectively interested&#8230; but I digress even more!).

I&#8217;ve thrown Fedora from the third floor of this house (I love being able to do that!!), and replaced it with FreeBSD (I could say it&#8217;s all [Dale&#8217;s][2] fault &#8212; yes, click the link, he&#8217;s running his blog on a snazzy new domain!), but that&#8217;s hardly true&#8230; having said that, his good reports certainly played a part in that decision). It&#8217;s not going to handle routing anymore, but *will* be proxying as soon as I get that adequately setup, if only for the purpose of ad blocking (and possibly bandwidth &#8212; I&#8217;ve used a ridiculous amount thus far this month, to the point that I&#8217;ll actually be going over the 10GB soft-limit if things continue this way&#8230; meh! Shouldn&#8217;t be a big issue.). Its primary function is as a [Samba][3] server, functioning as a domain controller and file/print server. It&#8217;ll also be handling scanning, although that&#8217;s completely separate from Samba functionality.

The routing aspect of things is now being handled by a [D-Link DI-624][4] wireless router, which does 802.11g, and has an inbuilt BPA client (which, incidentally, sucks. Working on that problem, too &#8212; it *seems* as though different firmware might make the world a better place, but exactly *which* firmware remains to be seen&#8230;) &#8212; it&#8217;s also got 4 wired ports, only two of which are in use &#8212; one uplinked to the main switch, the other directly into the server.

FreeBSD is fun, but it took me a while to figure out how to get root via remote access. There&#8217;s something mildly depressing yet strangely funny about jumping up and down shouting &#8220;g0t r00t!!!&#8221; in reference to a computer you have physical access to, but I did, nonetheless :-P Shrug, it wasn&#8217;t a problem I&#8217;d had before&#8230; learning experience? ;-)

I&#8217;m currently having fun with ports, which is great, because I haven&#8217;t really got the foggiest idea if I&#8217;m doing this right. I feel like I should have updated the ports index when I first installed, because I know for a fact some of the stuff listed here is oldish&#8230; but whether that&#8217;s for security reasons or whatever else I honestly couldn&#8217;t say. It matters less now, because I&#8217;m not using this thing as a directly-Internet connected device, which is good. I contemplated sticking one interface of it onto a DMZ, but figured that probably wasn&#8217;t be best of ideas, seeing I&#8217;m the one responsible for patching and otherwise DoingStuff&trade; with the system&#8230; shrug!

Samba&#8217;s just been compiled and installed, and I&#8217;m grabbing vim before attempting anything further, simply because I find myself lost without being able to type &#8220;vim filename&#8221; and having it DO something, instead of just giving me errors. I&#8217;m a long long way from being any kind of vim guru, and it&#8217;s overkill considering how I use it (open file, press Insert to edit, press escape, `:wq`), but using &#8220;edit&#8221; just doesn&#8217;t feel right. As soon as that&#8217;s done compiling (it&#8217;s still downloading patches painfully slowly from some US server &#8212; is there any way to change the source of download for ports??), I&#8217;ll start getting Samba up and running, which involves installing OpenLDAP, setting up users and stuff in there, then figuring out how to make Samba a nice happy domain controller, pointing Windows clients to it, setting up login scripts to make the clients mount drives nicely, and then fix my other SuSE desktop (haha, don&#8217;t think it&#8217;ll stay SuSE much longer&#8230; suggestions anyone? :)) with a view to getting *it* to authenticate users with the domain controller (presumably using&#8230; some Linux thing&#8230; Kerberos? Shrug. I&#8217;ve got no idea what I&#8217;m talking about, as should be plainly clear to anyone who does by now!). Following that, I get to setup Squid, and then <acronym title="Apache MySQL PHP">AMP</acronym> which&#8217;ll be fun. And then an email server. I&#8217;ve discovered I can send outbound messages on my own SMTP server without any problems (cue applause), but I don&#8217;t know if Telstra is stupid by default with inbound MTA stuff&#8230; I&#8217;m sure if it doesn&#8217;t work you&#8217;ll read all about how terrible they are here as I jump up and down and cry about it, before calling Technical Support, listening to their groooovy hold music (seriously, it&#8217;s great &#8212; no crappy &#8220;Your call is important to us&#8221; rubbish, just cool jazz&#8230; at least, it was last night. I nearly plugged my phone into the new amp to hear it better, coz the speakerphone wasn&#8217;t doing it justice!), and then resolving the whole thing with a few mouse clicks.

Oh, and I would take photos, but there isn&#8217;t really anything that looks new and interesting that I haven&#8217;t posted already, so&#8230; I won&#8217;t yet :P That means don&#8217;t ask for less talk and more pictures, [Steve][5] :P

 [1]: /blog/2005/01/29/moderation-fixed#comment-918
 [2]: http://www.bluetrait.com/
 [3]: http://www.samba.org/
 [4]: http://www.dlink.com/products/?pid=6
 [5]: http://www.swylie.com/