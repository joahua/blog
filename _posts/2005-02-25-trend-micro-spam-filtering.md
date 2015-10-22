---
title: Trend Micro spam filtering
author: Josh Street
layout: post
permalink: /2005/02/25/trend-micro-spam-filtering/
categories:
  - Geek
---
A client contacted me a few days ago about a message sent by a mailing list script I&#8217;d written being falsely tagged as spam by their Trend Micro filtering system. They wanted me to change a few things in the mailing list output to see if it made a difference, but I&#8217;m trying to track down exactly WHAT the messages are scoring points on and WHY, rather than changing things in an ad-hoc fashion in the hope of hitting something.

Trouble is, there&#8217;s close to no documentation on <a href="http://www.trendmicro.com/en/products/desktop/anti-spam/evaluate/overview.htm" rel="nofollow">Trend Micro&#8217;s free desktop filtering for Outlook</a>, and all I can gleam from the mail headers is this obscure line:

`X-tis-spam: score=7.80000 (90,112102,110534,112020)`

Great, hey? Has anyone had any luck/experience with filtering before? I don&#8217;t even know if it&#8217;s what&#8217;s caused that line to be added to the headers &#8212; it could be any one of the three other mail servers the message passed through before it got to his inbox!