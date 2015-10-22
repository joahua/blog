---
title: IE6 Scripting security
author: Josh Street
layout: post
permalink: /2005/12/29/ie6-scripting-security/
categories:
  - Geek
  - Web Standards
tags:
  - microsoft
  - pain
  - random web server
  - web server
---
Well, IE is notoriously insecure, but today I was hit with one particularly stupid (though supposedly not undocumented &#8212; someone on WSG had encountered it before and alleviated much pain!) &#8216;feature&#8217; of the browser. Basically, I&#8217;ve been dependent upon PNG alpha channel working. Hey, the design isn&#8217;t mine and I&#8217;m just trying to make the CSS work with as few images as humanly possible &#8212; though I have realised I have one that isn&#8217;t required, but can&#8217;t be bothered changing&#8230; because once I&#8217;ve slated my markup, I only ever add things to it as required, and never work backwards. Otherwise, I wind up in a perpetual cycle of markup optimisation that culminates in a loss of probably under 2KB over about as many days. Tis bad. Must post the way I do CSS/markup workflow here some day, coz it&#8217;s something I&#8217;d be interested to see other people&#8217;s processes of and how different it is/isn&#8217;t from my own.

Anyway! Digression aside, I was using IE5.5+&#8217;s `filter` thing (pretty well documented PNG fix with some caveats&#8230; it&#8217;s the best we can do until IE7 in all its splendiferous glory dribbles from Microsoft&#8217;s front door. Don&#8217;t ask me where that came from.) with great success, but for the incessant security warnings every time I loaded the page. Yeah, great, this really looks usable. Not. Every twit using XPSP2 is going to be pretty happy to stay on a page when their browser is blurting security warnings at them&#8230; and don&#8217;t get me started on IE7&#8242;s proposed phishing alert thing that lets users report false positives. Dumb users (i.e. 97% of the population) are going to be scared away regardless, and malicious users (i.e. 2% of the population) are going to write viruses that exploit the reporting mechanism to let sites through.

Wow. This is a really windy post.

Okay. On topic (hah!). The moral of the story is, don&#8217;t execute web pages locally. IE won&#8217;t trust you. However, if it&#8217;s on any random web server (I ended up installing Apache on loopback), IE is perfectly happy to let it execute whatever the hell weird kinda code it wants. And that, kiddies, is why we all love Microsoft.