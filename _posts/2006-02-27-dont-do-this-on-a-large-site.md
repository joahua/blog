---
title: 'Don&#8217;t do this on a large site'
author: Josh Street
layout: post
permalink: /2006/02/27/dont-do-this-on-a-large-site/
categories:
  - Geek
tags:
  - JavaScript
  - large site
  - Ubuntu
  - xp
---
This post is actually something I meant to say last week, but forgot.

So I&#8217;ll say it now: Loading JavaScript on a prominent page that builds a link to a non-existent resource is a BadThing. Think ridiculous numbers of 404 errors and partially-defeated statistics tracking! Having said that, I managed to manual work out JS/no-JS support to be even lower than it is on this site &#8212; it&#8217;s 1.5% non-JS here &#8212; which is impressively (pleasingly) low!

AWstats is fun to run on many-gigabyte logfiles&#8230; just not multiple times once you&#8217;ve realised &#8220;Oh, I screwed up and no amount of grepping can save me now!&#8221; (First time I&#8217;ve absolutely required my dual-boot Ubuntu/XP install at work&#8230; because it&#8217;s lots easier to watch load on a computer you&#8217;re physically on rather than by SSH, and because multiple-GB-logfiles aren&#8217;t fun to transfer across networks!)