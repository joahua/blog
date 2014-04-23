---
title: A cool little program
author: Josh Street
layout: post
permalink: /2004/06/13/a-cool-little-program/
categories:
  - Before WordPress
tags:
  - artist
  - author
  - C
  - Linux
  - PHP
  - remote web host
---
Originally written for [WordPress][1], this two-part application displays XMMS&#8217;s currently playing song.

Consisting of a C module, which is compiled and operates as part of XMMS itself (as a plugin) and a PHP script which reads the output of this plugin and displays it wherever the user wants (i.e. on a remote web host).&nbsp; It uses sockets, so the webserver doesn&#8217;t need to be on the computer running XMMS, which is handy for websites like&#8230; this one.

Why am I not yet using it?&nbsp; A few bugs, it would seem&#8230; I don&#8217;t speak C, so I&#8217;ve emailed the author to ask what&#8217;s going on.&nbsp; Anyone else running Linux/XMMS I&#8217;d recommend take a look [here][2], even if you&#8217;re not running WP (that is of little significance).

I&#8217;ve got the script running here: <http://nicktangents.is-a-geek.com/random/playing.php> until it is worked out properly, at which point I&#8217;ll move it over to this part of the world (i.e. the server the website you are viewing now is running off).

It is interesting, but only partially working&#8230; the "currently playing" song as displayed there is just the first entry in my playlist at the minute&#8230; the artist field does not function, however as the song string is actually the XMMS title string, that doesn&#8217;t matter too much.&nbsp; I&#8217;m more interested in resolving the first-entry-in-playlist-only display thing, personally.

Any resolution shall be posted here-ish as soon as it happens!&nbsp; A reason to get the Projects section off the ground, perhaps&#8230;

 [1]: http://wordpress.org/
 [2]: http://wordpress.org/support/10/1706