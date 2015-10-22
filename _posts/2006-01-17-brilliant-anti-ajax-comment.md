---
title: Brilliant anti-AJAX comment
author: Josh Street
layout: post
permalink: /2006/01/17/brilliant-anti-ajax-comment/
categories:
  - General
tags:
  - AJAX
  - author
  - broadband
  - buzzword-compliant site
  - Dan
  - distant server
  - HTML
  - Injection Molder
  - online content remains
  - webmaster
---
Pinched in fulltext from [a comment][1] on a post regarding Web 2.0 (originally written for [FT][2], so it&#8217;s not particularly geeked out).

<blockquote cite="http://dangillmor.typepad.com/dan_gillmor_on_grassroots/2005/04/web_20_try_30.html#comment-5184623">
  <p>
    <q>Such pages, however, tended toward dullness and infrequent updating.</q>
  </p>
  
  <p>
    Or, to put it another way: Such pages tended to fulfill the original vision of the Web, which was to allow absolutely anyone to publish information that might otherwise be lost to the public, in a way that allows it to be searched, indexed, bookmarked, and linked to related information. And accessed by absolutely anybody who&#8217;s looking for it.
  </p>
  
  <p>
    <strong>As opposed to today&#8217;s &#8220;dynamic&#8221; Web, where you need a broadband connection, an industrial-grade graphics workstation, and more plug-ins than a Roman orgy just to look up the atomic weight of molybdenum. Which you can&#8217;t bookmark because the URL is a dynamically-generated conglomeration of the hostname, your session ID, the phase of the moon, and the bra size of the webmaster&#8217;s current girlfriend, that doesn&#8217;t point to a page that&#8217;s actually stored on disk somewhere.</strong>
  </p>
  
  <p>
    As nifty as it is that people have found new ways to make use of HTTP and HTML, we seem to be slowly losing the very concept of &#8220;publishing&#8221; as &#8220;preserving a record of today for future recall&#8221;. Instead of being the equivalent of an &#8220;address&#8221; where one can &#8220;go&#8221; to retrieve information, the URL has become a &#8220;magic incantation&#8221; that instructs a distant server to perform some action that may or may not produce the same results as the last time it was used.
  </p>
  
  <p>
    In some ways, that&#8217;s good: it&#8217;s nice to be able to use the same mechanism to say &#8220;Bring up the latest edition of Dan&#8217;s blog&#8221;, &#8220;Show me the current pressure and temperature readings of Injection Molder #7&#8243;, and &#8220;Display page 7 from our company&#8217;s 2003 annual report&#8221;.
  </p>
  
  <p>
    But there&#8217;s some very scary Orwellian potential here, as well as the risk of exacerbating the Digital Divide by constantly ramping up the minimal platform needed to access much of the web. Those librarians Dan mentioned lately shouldn&#8217;t be the only ones worried about making sure that a large percentage of online content remains &#8220;dull&#8221; and &#8220;static&#8221;.
  </p>
</blockquote>

I think the &#8220;Orwellian potential&#8221; bit is a load of scare-mongering crap (in relation to the other concerns posed in the article, at any rate), but everything else rings true.

I am, at present, working on the first large-scale project I&#8217;ve been involved in where <a href="http://en.wikipedia.org/wiki/AJAX/" title="Asynchronous JavaScript and XML">AJAX</a> is being utilised. In this instance, yes, it was my call: yes, I do feel it&#8217;s justified (reasons include traffic, and the advantage of not having to reload an entire page &#8212; yes, it&#8217;s large scale enough for that to be significant &#8212; and simple usability, because the architecture is such that users will desire to move quickly between elements of content, and AJAX facilitates that. More details post-release). We&#8217;ve been very careful to preserve functionality in non-XMLHttpRequest enabled UA environments, but it&#8217;s still not perfect &#8212; bookmarking is one (minor, given the nature of the content) problem that still requires rectification: that&#8217;s one thing I&#8217;m hoping to resolve tomorrow (along with general CSS compatability back to IE 5, possibly 4 &#8212; but that&#8217;s not particularly relevant). The Javascript is not particularly &#8220;unobtrusive&#8221; (still using inline onclick), which I&#8217;m hoping to similarly resolve prior to launch, but it&#8217;s not of any particularly great consequence.

This is not a site to be archived, as the author of the comment above laments. But he shouldn&#8217;t. That wasn&#8217;t ever this site&#8217;s purpose, so I&#8217;m not particularly concerned if the markup isn&#8217;t prestine. Yes, there will be RSS/Atom syndication. It&#8217;s a fairly Web 2.0 buzzword-compliant site, though (I hope) not particularly unneccessarily adoptive of such technologies. We&#8217;ll see.

 [1]: http://dangillmor.typepad.com/dan_gillmor_on_grassroots/2005/04/web_20_try_30.html#comment-5184623
 [2]: http://www.ft.com/

 *[UA]: User Agent