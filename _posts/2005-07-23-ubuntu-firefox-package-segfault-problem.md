---
title: Ubuntu Firefox package segfault problem
author: Josh Street
layout: post
permalink: /2005/07/23/ubuntu-firefox-package-segfault-problem/
categories:
  - Geek
tags:
  - DSP
  - Synaptic Package Manager
  - Ubuntu
---
I upgraded to the latest Firefox package available through Synaptic Package Manager (package version 1.0.2-0ubuntu5.4 in hoary-security) &#8212; and therefore the Ubuntu package repositiories &#8212; just then, and it&#8217;s been segfaulting on startup ever since.

`josh@joah:~$ firefox --verbose<br />
FIREFOX_DSP=esddsp<br />
APPLICATION_ID=firefox<br />
CMDLINE_DISPLAY=<br />
DISPLAY=:0.0<br />
REMOTE=0<br />
TRY_USE_EXIST=0<br />
OPTIONS=<br />
DEBUG=0<br />
DEBUGGER=<br />
Running: /usr/lib/mozilla-firefox/firefox-bin -a firefox -remote 'ping()'<br />
PING_STATUS=2<br />
Cleaning user profile<br />
Running: esddsp /usr/lib/mozilla-firefox/firefox-bin -a firefox<br />
Segmentation fault<br />
`

It&#8217;s not a huge problem for me, as I&#8217;ve recently installed Opera 8.01 on this machine and have absolutely fallen in love with it (but haven&#8217;t been using it as my primary browser because all my settings, cookies, etc. are stored in Firefox), and I&#8217;ve got Firefox on three other desktops should I need to test a website in it, but it&#8217;s a bit annoying.

Hoping whatever&#8217;s wrong with the package will get fixed relatively quickly&#8230;

<ins>UPDATE: Curiously, Firefox appears to launch without any problems whatsoever when a URL is specified (e.g. <code>firefox http://www.joahua.com/blog/</code> as a launch command). So, now it merely belongs in the realm of irritations as the bug can be circumvented with minimal effort.</ins>

<ins>A few moments later: Oh, no, apparently not. If one opens a new tab, Firefox decides to crash once again. Cruel world. *wanders back to Opera*</ins>