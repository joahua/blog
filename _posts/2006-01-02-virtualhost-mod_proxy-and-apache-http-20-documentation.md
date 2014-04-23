---
title: VirtualHost, mod_proxy, and Apache HTTP 2.0 documentation
author: Josh Street
layout: post
permalink: /2006/01/02/virtualhost-mod_proxy-and-apache-http-20-documentation/
categories:
  - Geek
tags:
  - HTTP
  - software ailments
---
I had to setup a virtual host that proxied through to another server today, and found the Apache 2.0 [documentation on that matter][1] particularly unhelpful for a rather trivial reason.

Here&#8217;s their broken version:

&lt;VirtualHost \*:\*&gt;
ProxyPreserveHost On
ProxyPass / http://192.168.111.2
ProxyPassReverse / http://192.168.111.2/
ServerName hostname.example.com
&lt;/VirtualHost&gt;

Here&#8217;s my working version:

&lt;VirtualHost \*:\*&gt;
ProxyPreserveHost On
ProxyPass / http://192.168.111.2/
ProxyPassReverse / http://192.168.111.2/
ServerName hostname.example.com
&lt;/VirtualHost&gt;

Spot the difference.

Yes, it was as simple as an omitted trailing slash.

Only takes a minute or two to figure out what&#8217;s going wrong, but it&#8217;s pretty darn annoying for that minute: I assume, as would many people, that documentation is generally infallible &#8212; its purpose being the *cure* to various software ailments, not the cause! Ah well. I&#8217;d have edited the Apache documentation, but it&#8217;s not a wiki and I can&#8217;t be bothered joining whatever mailing list I&#8217;d have to join to get one character added to their site!

 [1]: http://httpd.apache.org/docs/2.0/vhosts/examples.html#proxy