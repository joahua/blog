---
title: Subclipse Proxy problems
author: Josh Street
layout: post
permalink: /2007/11/16/subclipse-proxy-problems/
syntaxhighlighter_encoded:
  - 1
categories:
  - CYIADA
  - Geek
  - Open Source
tags:
  - eclipse
  - HTTP
  - Linux
  - Microsoft Vista
  - proxy server
  - subclipse
  - subversion
  - Windows XP
---
Finally, Subversion&#8217;s PROPFIND is enabled on the proxy server at one place I work, but for some reason Subclipse was still being a little bit special.

Turns out it *doesn&#8217;t* use Eclipse&#8217;s HTTP Proxy settings, but needs setting elsewhere.

On Windows XP, this will be in your Application Data path under Subversion. Mine is as follows:

C:\Documents and Settings\joshs\Application Data\Subversion

I haven&#8217;t got a Vista machine to test on, but it will still be the Application Data\Subversion folder within the user&#8217;s path. (I will confirm this next time I&#8217;m on a Vista box.)

Linux users, look in ~/.subversion/

Open the file &#8220;servers&#8221; (no extension) and scroll to the bottom section, [Global].

Un-comment and edit the http-proxy-host and http-proxy-port settings (and user/password if required, it wasn&#8217;t for me) as appropriate and everything will start working. You don&#8217;t even need to reload Eclipse.

Productivity just soared!