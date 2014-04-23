---
title: Traffic boost
author: Josh Street
layout: post
permalink: /2004/07/18/traffic-boost/
categories:
  - Before WordPress
tags:
  - advertising
  - Google
  - Tokelau
  - web expansion
  - worth advertising
---
Well, sort of.&nbsp; My RSS feed attracted a fairly sizeable number of hits in the last 24 hours, compared to the rest of my website ;).&nbsp; Hardly unique, of course, but still.&nbsp; It&#8217;s been live for all of a day, and has attracted about 1/5th of the traffic IN A DAY that the rest of my site has accrued in a month.&nbsp; That&#8217;s hits speaking, not bandwidth, but still!&nbsp; Mildly insane.

I can now see why larger sites with RSS feeds request you keep your updates to an hourly timing cycle or whatever!&nbsp; Not that I want anyone to do that&#8230; I don&#8217;t really care, and I&#8217;d imagine that, at 3KB a pageload, Dale&#8217;s connection doesn&#8217;t really, either.

So, when I was looking at my logs, trying to figure out what kind of traffic impact the RSS had had, I was looking at the clients people were using to access RSS.&nbsp; [Awstats][1] doesn&#8217;t identify more obscure User-Agent strings (despite reputedly having 97 browsers which it supports), so I looked under "Unknown".&nbsp; Which was cool.&nbsp; A viewer called "Soup" came out on top, then KNewsTicker (I run that one in my panel, and updates are set to a meagre 5 minutes!&nbsp; Should probably set that value a little higher&#8230;), then FeedValidator.

Which is all well and good.&nbsp; But then I see another one in there.&nbsp; "Mediapartners-Google/2.1" &#8211; a few searches later, it&#8217;s revealed that this bot is used to spider websites using AdSense&#8230;&nbsp; gee, thanks guys.&nbsp; Nice to know that you think my measly 200 unique impressions a month is worth advertising to, really&#8230;

Okay, so now I&#8217;m really curious.&nbsp; Why am I being spidered for a service I&#8217;m not even advertising with?!&nbsp; Seems kind of stupid to me.&nbsp; Seeing this hosting isn&#8217;t costing me anything, I&#8217;ve got no reason to try and recoup costs on it&#8230; and really, that&#8217;d be all I could ever hope to achieve with Google Advertising, unless I saw a few hundred-fold increase in traffic.&nbsp; Which, of course, would probably mean I&#8217;d need to start paying for hosting somewhere with a nice amount of bandwidth and resources (got to love working for a webhost, at-cost hosting is a nice perk)&#8230; that said, it&#8217;d make more sense to purchase a TLD first.&nbsp; No, a frame-based redirect from some pacific island doesn&#8217;t count, as cool as Tokelau must be.&nbsp; At any rate, that kind of traffic seems to be a few months away yet. (Yeah, web expansion is the one area I&#8217;m an optimist&#8230; it WILL be months, not years ;) )

Has anyone else who is a bit pedantic about their log-checking noticed anything like this?&nbsp; I don&#8217;t care if you&#8217;re using AdWords on your site &#8211; that&#8217;s justifiable &#8211; but if you&#8217;re NOT, and still getting this weird spidering&#8230; yeah, if you&#8217;ve got any ideas, let me know.

 [1]: http://awstats.sourceforge.net/