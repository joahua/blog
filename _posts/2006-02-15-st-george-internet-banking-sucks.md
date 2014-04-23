---
title: St George Internet banking sucks
author: Josh Street
layout: post
permalink: /2006/02/15/st-george-internet-banking-sucks/
categories:
  - General
  - Usability
tags:
  - bank
  - incompetent web team
  - Internet banking
  - Internet Explorer
  - Java
  - JavaScript
  - Mac
  - PBX
  - Virtual Machine
  - web application
  - web developer
  - web support
  - web team
  - Windows
---
It requires Java. I can live with that, it&#8217;s a web application.

I had to call up to find out what browsers they officially supported, only to be told that support was limited to Internet Explorer on Windows, Mac (!!) and Netscape 7+ on both platforms. Firefox &#8220;hasn&#8217;t been tested&#8221;, Safari hasn&#8217;t been looked at. I&#8217;m not particularly keen on this, but hey, they&#8217;re a bank&#8230; we all expect them to be a bit backwards.

The application sniffs for a Java Virtual Machine and refuses to load *without even providing an error message* if one isn&#8217;t detected. This wouldn&#8217;t be so bad but for the fact that it checks explicitly and exclusively for the Sun virtual machine&#8230; so anyone who doesn&#8217;t use that platform for whatever reason (licensing, ethical, platform) &#8212; even if they have another fully compatible virtual machine &#8212; can&#8217;t get access.

My solution? Disable Java (not JavaScript) altogether using the Web Developer&#8217;s toolbar, then sign in (it doesn&#8217;t choke!), wait til you get to the main applet pane, re-enable Java, and press F5. Magic, it works.

There is *absolutely no reason or excuse* for this behaviour. If this fits into some perverted notion of security, I&#8217;m not comfortable having my money there. If it&#8217;s the product of an incompetent web team&#8230; well&#8230; they&#8217;re an incompetent web team. Grr.

I called up and asked why it wasn&#8217;t working, then explicitly asked for a report to be forwarded to the web team. Please lots of people do this (heh, you don&#8217;t even need to be with St George&#8230; they didn&#8217;t ask me for a name or account number during the phone call!)&#8230; this service is unneccessarily stupid at present!

On a plus side, their phone service is good fun. I couldn&#8217;t find a support number quickly, so I called the **dragondirect** number provided on a letter (1300&nbsp;30&nbsp;10&nbsp;20) and when none of the options matched &#8220;support&#8221;, I just hammered &#8220;9&#8243; repeatedly. Works on a lot of PBX systems, and it worked there&#8230; I [got through to a human][1] within 30 seconds, who then put me straight into the queue for web support. Good stuff.

 [1]: http://gethuman.com/