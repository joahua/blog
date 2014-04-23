---
title: A whinge about DNS and other things
author: Josh Street
layout: post
permalink: /2004/05/28/a-whinge-about-dns-and-other-things/
categories:
  - Before WordPress
tags:
  - caching
  - DNS
---
Dynamic IP addresses suck.&nbsp; Uberly overboard caching DNS servers suck even more.&nbsp; [Platform 7 ][1] was apparently "out" today, because the schools&#8217; DNS server didn&#8217;t think to resolve a CNAME record &#8211; of course, the address which the CNAME referenced was working fine, despite having changed less than three hours earlier, but to actually resolve the CNAME *to* this would have required a leap of logic which is evidently beyond whatever DNS software our esteemed IT department are using.

I&#8217;m a tad more irritated about it than I should be, perhaps, but really, given the amount of bandwidth that much extra name resolution requires, it&#8217;s somewhat insignificant next to a school full of students randomly downloading crap from all over the place.&nbsp; Or so you would think.&nbsp; Or I would think.&nbsp; Or something.

 [1]: http://www.platform7.info/