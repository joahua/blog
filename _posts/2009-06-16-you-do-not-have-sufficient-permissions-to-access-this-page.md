---
title: You do not have sufficient permissions to access this page.
author: Josh Street
layout: post
permalink: /2009/06/16/you-do-not-have-sufficient-permissions-to-access-this-page/
syntaxhighlighter_encoded:
  - 1
categories:
  - General
tags:
  - PHP
---
Well, I finally got around to upgrading WordPress again. I made a fairly prodigious leap from 2.5(.somethingsomething) to 2.8 in one step, with pleasantly few hiccups.

In fact, the only significant hiccup I faced prevented me from logging in at all (fairly significant), giving a charming error: &#8220;You do not have sufficient permissions to access this page.&#8221;

This happened after I went to update my wp-config.php file to incorporate a circa-2.6 innovation, [Security Keys][1]. AUTH\_KEY, SECURE\_AUTH\_KEY, LOGGED\_IN\_KEY and NONCE\_KEY added to my wp-config, I attempted to login to the admin area again (it auto-logged me out, fair enough) to be greeted withÂ the aforementioned non-negotiable error!

Turns out it was a pretty stupid problem I had&#8230; If you get this, **check you have inserted the key definitions *before*Â the &#8220;Stop editing&#8221; comment in the document** (I think the comment is different in later versions &#8212; my wp-config is seriously ancient, I&#8217;ve been upgrading [since 0.73][2] and would only have started from scratch if at some past point it was required!)

Once I did this the errors went away entirely and I was able to login.

 [1]: http://codex.wordpress.org/Editing_wp-config.php#Security_Keys
 [2]: /blog/2004/08/27/interesting