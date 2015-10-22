---
title: Firefox 4 status bar
author: Josh Street
layout: post
permalink: /2011/03/29/firefox-4-status-bar/
categories:
  - General
tags:
  - browser
  - Design
  - firefox
  - JavaScript
  - security
  - unobtrusive
  - Usability
  - ux
---
On running Firefox 4 for the first time I was shocked to mouseover a link and apparently not be able to see where I was going. Had they banished the status bar? Of course, everyone&#8217;s just playing catchup to Chrome&#8217;s UI, and its status bar isn&#8217;t really a bar at all &#8211; it just appears as and when it&#8217;s needed. Perfect.

<div id="attachment_1676" style="width: 496px" class="wp-caption alignnone">
  <img class="size-full wp-image-1676" title="Floating status bar in Chrome - only appears as you mouseover a link" src="http://josh.st/blog/wp-content//2011/03/floating-status-bar-chrome.png" alt="Floating status bar in Chrome - only appears as you mouseover a link" width="486" height="198" /><p class="wp-caption-text">
    The way it's meant to happen!
  </p>
</div>

As and when typically just means &#8220;right before you click on a link&#8221;, with the whole thing triggered by mouseovers. The first page Firefox loads when you start the browser is available here &#8211; <http://www.mozilla.com/en-US/firefox/4.0/firstrun/> &#8211; can you see what&#8217;s wrong with it?

I love event-listenery JavaScript as much as the next guy, but the icon on Step 2 suggested I&#8217;d be going to another page (c&#8217;mon, that&#8217;s just what right angle quotation marks have been co-opted to mean on the web!) while the browser wouldn&#8217;t say where.

Before visiting any actual pages in Firefox, not much trusting it at this point, I did some quick Googling and discovered two things:

1.  That you can bring back the status bar by simply typing âŒ˜ + / or Ctrl + /, and
2.  That, not knowing this, people have created [at least one browser extension][1] to do exactly that.

Fail.

Of course, if I&#8217;d bothered to actually USE Firefox for 2 minutes&#8211;trusting it even though it wouldn&#8217;t tell me where links were pointing&#8211;I&#8217;d have discovered that ordinarily it does. Pie-faced, I retreated to blogging angrily about how Mozilla&#8217;s first run screen is a great HTML5 page but a horrible initial demo of the browser&#8217;s capabilities.

A few observations from this:

*   Browsers need to tell you where you&#8217;re going next. Users don&#8217;t[/shouldn't] trust the Internet enough to find out when they arrive.
*   None of this would&#8217;ve happened had the team creating the landing page used progressive enhancement and unobtrusive JS technique.
*   The team probably didn&#8217;t because they wanted to show off how well their amazing browser does fancy &#8220;HTML5&#8243; (in the [Jobs-ian CSS/JS inclusive sense][2]) stuff. Fine, but also link to a page that has the same content.
*   Browser vendors are responsible for keeping user&#8217;s trust from the very start. This is a weird issue because it&#8217;s actually nothing to do with the browser&#8217;s functionality itself, but it temporarily impacted my opinion on how seriously Firefox take user choice/security/usability in a significant way.
*   No-one [actually uses Firefox anymore][3], so it doesn&#8217;t matter. It is a pain while using Firebug to test my own sites, though. ;-)

 [1]: https://addons.mozilla.org/en-us/firefox/addon/status-4-evar/
 [2]: http://www.apple.com/hotnews/thoughts-on-flash/ "HTML5... lets web developers create advanced graphics, typography, animations and transitions..."
 [3]: http://news.cnet.com/8301-30685_3-20046114-264.html "Firefox 4 doubles IE9's 24-hour download tally"