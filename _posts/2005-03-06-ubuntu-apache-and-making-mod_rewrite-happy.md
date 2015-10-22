---
title: Ubuntu, Apache and making mod_rewrite happy
author: Josh Street
layout: post
permalink: /2005/03/06/ubuntu-apache-and-making-mod_rewrite-happy/
categories:
  - Geek
  - Open Source
tags:
  - default site
  - Google
  - PHP
  - Ubuntu
---
The following only applies to the [Apache][1] which ships with [Ubuntu][2] &#8212; so if you&#8217;re wondering why your mod_rewrite isn&#8217;t working with something else, chances are this won&#8217;t be *that* helpful.

<img src="/blog/wp-content/2005/03/apacheubuntu.jpg" style="float:left;margin:.5em;" />I was playing with mod_rewrite in the context of [WordPress 1.5][3] for use as a <acronym title="Content Management System">CMS</acronym> on a new website, and it basically wasn&#8217;t working at all. The module was there, it was enabled, but it was doing absolutely nothing. I reinstalled Apache manually (from source), and tried to do the painful stuff that goes with that (<acronym title="PHP: Hypertext Preprocessor">PHP</acronym> `./configure` options, anyone? [Some people][4] might be able to do it, but not me!), but gave up in disdain when I realised I had 2 hours to get work done before a meeting and didn&#8217;t have a working Apache install to get it working *on*. mod_rewrite or not, it was back to the stock install that &#8220;sort of&#8221; worked.

mod_rewrite wasn&#8217;t working for the meeting, but that didn&#8217;t really matter&#8230; I&#8217;ve discovered that I care more about friendly URLs than most other people I&#8217;ve ever met in real life! That evening, I looked at the problem again, and, after trawling through apache2.conf (Ubuntu&#8217;s equivalent of httpd.conf &#8212; don&#8217;t ask why, I don&#8217;t think even they know) and talking to [Michael][4] about it, I discovered that I&#8217;d been looking in the wrong place.

It doesn&#8217;t matter whether rewrite.conf is in the mods-enabled folder (although it needs to be &#8212; but that&#8217;s not the issue at hand here) &#8212; by default, Ubuntu&#8217;s Apache install has a default virtual host setup under &#8220;sites-enabled&#8221; (actually just a symlink to &#8220;sites_available&#8221; &#8212; this is best practice when creating new vhosts, by the way: stick the config in sites-available and symlink to that from sites-enabled&#8230; there are a few reasons for this, which wouldn&#8217;t really affect the casual user, but if you were running LOTS of websites off it it&#8217;d soon become helpful if you needed to disable websites because of policy violations or billing without actually *deleting* the configuration.), instead of just the single &#8220;real&#8221; server. Okay, this probably makes sense&#8230; but for the fact that it didn&#8217;t SAY it anywhere, and additionally, despite having support for .htaccess files built into the apache2.conf file, it&#8217;s set to do absolutely nothing in the virtual host config &#8220;default&#8221;.

Basically, to get mod_rewrite to work, load the module by symlinking to mods-available/rewrite.conf in mods-enabled, then set AllowOverride to &#8220;all&#8221; in sites-available/default in both the root (&#8220;/&#8221;) container and the /var/www/ container. Whilst you&#8217;re there, it may be a good idea to get rid of the RedirectMatch, simply because it&#8217;s annoying&#8230; I haven&#8217;t, but only because I haven&#8217;t bothered to put something in the root of the default site.

This stuff is probably self explanatory to many, but it took me too long to realise it, even with help, and in my trawlings of Google I hadn&#8217;t found anything to say how to do it, so there we are.

*Updated: see comments [3][5] and [4][6]*

 [1]: http://httpd.apache.org/
 [2]: http://www.ubuntulinux.org/
 [3]: http://wordpress.org/
 [4]: http://www.bluetrait.com/
 [5]: /blog/2005/03/06/ubuntu-apache-and-making-mod_rewrite-happy#comment-3599
 [6]: http://www.joahua.com/blog/2005/03/06/ubuntu-apache-and-making-mod_rewrite-happy#comment-3601