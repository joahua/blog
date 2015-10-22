---
title: Atom 1.0 photo feed
author: Josh Street
layout: post
permalink: /2005/10/20/atom-10-photo-feed/
categories:
  - PHP
  - Web Standards
tags:
  - XML
---
I figured I&#8217;d go with Atom when creating an app to extract photo feeds for the gallery here, because it&#8217;s touted as the next best thing since sliced bread. It&#8217;s not. Maybe that&#8217;s just coz I&#8217;m overtired and have spent too long staring at [Feed Validator][1], but probably not. What the hell is with a limitation on the number of times you can have the same value on an update date? Maybe I posted multiple things at once! Or had scheduled posts. Whatever. Either way, a limit of two on this is ridiculous and&#8230; seemingly completely superfluous.

As is the requirement to have a &lt;content&gt; element in the feed. For this gallery feed, that really isn&#8217;t neccessary. I conceded that point, but am now regretting it: this means I am now bound to introduce a feature I really don&#8217;t want in the future! Note to self: next time a validator comes along, abscond. (Mmm&#8230; scones&#8230;)

On the record, right now: I know the feed is invalid, and I don&#8217;t give a crap. I haven&#8217;t even tested it in a feed reader yet: my eyes are doing all the parsing right now. You can check it out at <http://www.joahua.com/photostack/atomiccat.php> &#8212; thus named because of Atom and cat-scan. More bugs presently exist than I care to name, or even think about, but my neck feels like I&#8217;ve been sitting at this computer for about a day (it&#8217;s been a few hours&#8230;), and I really need sleep. Will resolve later, in the meantime&#8230; add that feed (application/atom+xml) to your feed reader at your own risk. It&#8217;s highly likely to break stuff.

I&#8217;ll also setup mod_rewrite rules sometime so it looks like a real feed. Sometime&#8230;

 [1]: http://feedvalidator.org/