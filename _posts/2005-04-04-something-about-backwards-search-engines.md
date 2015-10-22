---
title: Something about backwards search engines
author: Josh Street
layout: post
permalink: /2005/04/04/something-about-backwards-search-engines/
categories:
  - Design
  - Geek
  - Usability
  - Web Standards
tags:
  - AAP
  - australia
  - brand new search engine
  - fresh search engine
  - Google
  - internal web team
  - JavaScript
  - main search results
  - search clutter
  - Search engine
  - search engines
  - search terms
  - software providers
  - Sydney Morning Herald
  - the Sydney Morning Herald
---
No, I&#8217;m not talking about [elgooG][1].

The Sydney Morning Herald published an article entitled &#8220;[New Australian search engine launched][2]&#8221; today, the first paragraph of which reads &#8220;Australia&#8217;s newest search engine [Ansearch][3] opens for business today with a novel twist, demographic searching.&#8221; It&#8217;s not a particularly well written article, but the article vendor is AAP, not the SMH itself, so we&#8217;ll leave *that* alone, at least for the minute.

It goes on to laud the search engine for their innovation, both in this feature of demographic searching, and in other areas:

> Ansearch says it cuts down search clutter by displaying the main search results as single websites and not the individual pages of websites.

What, like the Google [More results from domainname] feature? You know, the one that actually *works properly*? I say &#8220;works properly&#8221;, because a quick search of Ansearch reveals that their &#8220;cutting search clutter&#8221; feature is a tad broken &#8212; not to mention their character encoding.

![Proof that it's broken, demonstrated by duplicate entries and incorrectly encoded characters][4]

<!--more-->

Speaking of broken character encoding, let&#8217;s take a look at their source&#8230; well, they get some marks &#8212; at least they bothered with a Content-Type. Never mind if the content is *broken* when displayed with that Content-Type &#8212; it&#8217;s not like a search engine could actually do any useful data processing to make things display correctly when using a slightly redundant Content-Type&#8230; oh, wait, disregard that comment: *they&#8217;re not using a doctype, either*.

See, what gets me is that this search engine has *just been launched*. Which means the climate in which it&#8217;s been developed isn&#8217;t the same as 5 years ago, when accessibility was just on the very edges of the radar &#8212; you&#8217;d (wishfully) imagine that at least a **doctype** wouldn&#8217;t be too much to ask for, even if they still insisted on using table-based layouts. Interestingly enough, that&#8217;s what one of their software providers, [Omniture][5], have done. Which leaves something of a foul taste in the mouth, too, because they&#8217;re reselling that garbage to people &#8212; including, if you believe their website, three of the five top Fortune 500 companies (aside: doesn&#8217;t that make them three of the top Fortune 5?).

Perhaps that criticism is unfair &#8212; their latest version (assuming that&#8217;s what powers their own website, although possibly not&#8230; maybe their internal web team accepts that their product would be overkill, and coded it in Dreamweaver, instead&#8230; some of the JavaScript certainly looks Dreamweaver-esque, and, if Ansearch&#8217;s website is any example, the doctype probably doesn&#8217;t come from the Overture system!) seems to handle much better than what Ansearch are running: I say this, because apparently they&#8217;re using a version which was written back in 2003. Hey, if it works&#8230; but we&#8217;ve already established it *doesn&#8217;t*.

And there concludes my rave review of yet another quite-some-way-from innovative and fresh search engine, this time in Australian waters.

<small>Note: I&#8217;m not saying it&#8217;s any worse in terms of accessibility, usability, and semantics than most other search engines are &#8212; only that it has less excuse, being launched <em>now</em>, as opposed to 5 or 10 years ago. It&#8217;s easier to make something work first time than it is to haphazardly patch over it later, especially something as gargantuan as I&#8217;d imagine a search engine would be.</small>

Oh, and now for something that&#8217;s just plain amusing &#8212; the number 1 search terms on this brand new search engine, from befuddled users wondering why it sucks so much:

![Top search queries are Google for both Weekly and Monthly statistics][6]

Yes indeed, the first thing users did was try to escape&#8230; how&#8217;s that for telling?

 [1]: http://www.alltooflat.com/geeky/elgoog/
 [2]: http://www.smh.com.au/news/Technology/New-Australian-search-engine-launched/2005/04/04/1112489391541.html
 [3]: http://www.ansearch.com.au/
 [4]: /blog/wp-content/2005/04/ansbrokendashlite.jpg
 [5]: http://www.omniture.com
 [6]: /blog/wp-content/2005/04/anspopsearch.jpg