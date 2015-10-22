---
title: IE7 expected a string, identifier or number
author: Josh Street
layout: post
permalink: /2012/04/19/ie7-expected-a-string-identifier-or-number/
categories:
  - General
tags:
  - bug
  - ie7
  - json
  - pebkac
---
JSON is nice to read. It&#8217;s also nice when parsers are forgiving, but here we are.

I just spent ages chasing [what I thought was] a bug using $.getJSON in IE7 that turned out to be an issue with something else entirely.

If you&#8217;re using $(el).css or .animate with JSON, make sure you&#8217;ve terminated all items correctly and don&#8217;t have any hanging commas left over:

<img src="http://josh.st/blog/wp-content/2012/03/unterminatedJSON.png" alt="Hanging comma at end of JSON params" title="Unterminated JSON. Not where you might think." width="245" height="65" class="alignnone size-full wp-image-1737" />

This case sent me particularly crazy as I was also dealing with an actual JSON request in the same general vicinity that I&#8217;d validated a bunch of times and seemed perfect.

Note to self: Before you go down the whitespace and text encoding rabbithole next time, make sure you&#8217;re actually checking the right JSON!