---
title: Django on .Net
author: Josh Street
layout: post
permalink: /2006/11/30/django-on-net/
categories:
  - General
tags:
  - fantastic solution
  - IronPython
  - PHP
  - Ruby
  - Smalltalk
  - Windows
  - XML
---
You can run [Django in IronPython under .Net][1]. Awesome. A Windows-based server is suddenly a choice again, which is&#8230; fantastic. Mostly for piping documents through MS Office products for indexing and PDF generation, because OO.o is great with Word docs but not so great &#8212; font sizing issues, etc. &#8212; with other things, especially PowerPoint, which could account for up to a quarter of the content contributed by users, I&#8217;d say. So I can run native MS Office -> PostScript export -> ps2pdf processes, and MS Office -> Horrible XML -> Scrub markup filters -> Search index, without having to battle with Wine, etc.

Of course, the second process would probably benefit from [using OO.o as a processing environment][2], but that&#8217;s equally achievable on a Windows or \*nix platform.

So many fears about platform (OS and language) have been sufficiently allayed. Which is kind of annoying, because, all of a sudden, .Net is actually an option. I&#8217;m still confused over databases though, so there&#8217;s plenty of befuddlement to go around. Ultimately it doesn&#8217;t matter a great deal if we find the right developer (for whatever language&#8230; except obscure things like Smalltalk and Ruby &#8230; oh did I say that? &#8230; doo be doo &#8212; just for future-proofing/maintenance reasons), which, hopefully, we will. Another meeting about money for this thing is happening on December 13<sup>th</sup>, so prayer is very welcome for that! I want $35,000 to spend over about two and a half months to pay one other developer and outsource design, as well as myself, of course (the front-end dude). By the end of that time we&#8217;ll hopefully have an absolutely fantastic solution that will magically propel (not that I really want to use [Propel][3], because that&#8217;s for PHP ;-)) itself forever&#8230; yeah, right.

We&#8217;ve got a half-baked business plan for this thing (by half-baked, I mean it&#8217;s all stuff I&#8217;ve written and the real gurus haven&#8217;t had anything to do with the numbers, etc., so it&#8217;s not really authorative) that should get it out of the red by a couple of months in (which is ridiculously quick&#8230; another reason to think it&#8217;s half-baked) and allow for cleaning up all the bits we missed in the hectic two and a bit months it was originally thrown together in, but, at the same time, it&#8217;s going to be partially dependent on licensed, published (dead tree) content (i.e. not just user-contributed stuff, which, longer term, will hopefully account for the bulk of sales &#8212; the profit margin is lower, but it&#8217;s also easier to move more units because of the sheer scope of content we&#8217;re hoping will be available) &#8212; so because we&#8217;re licensing that revenue is going to be eaten into by publishing division and other content sources.

All of *that* is, of course, dependent on people wanting to use these things (they do, but from there it&#8217;s a question of making the product known to them and making adoption easy) and being okay with sharing stuff they&#8217;ve written. Some knee-jerk reactions have been negative to that, but the objections were accompanied by acknowledgement of a need to think more about what sharing content is doing &#8212; that is, why we&#8217;re bothering to create this site anyway.

Which, I have realised, I have not shared here yet. I want to write it another time because I think I&#8217;m getting clearer at explaining what we&#8217;re trying to do every time I try, so it&#8217;s no bad thing repeating myself. Here&#8217;s [a brief overview of what Josh does (or, is trying to do) at Youthworks][4].

 [1]: http://d.hatena.ne.jp/perezvon/20061030/1162209668
 [2]: http://docvert.com/
 [3]: http://propel.phpdb.org/trac/
 [4]: /blog/2006/11/30/what-josh-does-at-youthworks