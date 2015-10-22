---
title: SSI on OS X Mountain Lion Server 10.8.3
author: Josh Street
layout: post
permalink: /2013/04/26/ssi-on-os-x-mountain-lion-server-10-8-3/
categories:
  - General
tags:
  - Apache
  - includes
  - os x server
  - ssi
---
We currently have a strong dependency on SSI at work and were recently offered a nicely-specc&#8217;d Xserve that was being retired for use as an in-house preview server.

I&#8217;ve got my doubts about SSI, but we have literally thousands of templates that require it for includes. It also functions in subtly different ways to PHP, and we&#8217;re not about to embark on any bulk conversions of our front-end templates into haml, jade, or whatever else is in vogue – the legacy cost is too great.

Apologia out of the way, we are using Mountain Lion&#8217;s in-built Apache 2.2 server after a trigger-happy rm -rf on my part killed a painstakingly crafted homebrew version implemented by a colleague.

### Config locations

If you are using the in-built server, you are using virtual hosts.

This simple truth is not well documented online, so if you are spending time in `/etc/apache2/httpd.conf` you will not succeed. The default port 80 (non-SSL) vhost file is at `/Library/Server/Web/Config/apache2/sites/0000_any_80_.conf`.

### Enabling SSI parsing

There&#8217;s ample info online about enabling mod_include, but what isn&#8217;t mentioned is that *you need a handler specified in the virtualhost config*.

`AddHandler server-parsed .html` is all it takes, but this won&#8217;t necessarily have effect within your directive unless you tell it to.

An age old tale of computers doing exactly what you tell them. And a wasted Friday afternoon!

 *[SSI]: Server Side Includes