---
title: OpenID again
author: Josh Street
layout: post
permalink: /2007/03/09/openid-again/
categories:
  - CYIADA
  - Geek
  - Usability
  - Web Standards
tags:
  - API
  - external verification services
  - Google
  - Internet identities
  - social networks
  - software developers
  - sydney
  - web strategist
  - Windows
  - wonderful technology
---
I&#8217;ve mentioned OpenID [here][1] and [here][2] before (the first only in passing), in the context of fragmenting social networks and LiveJournal. By the way, check out the second of those posts&#8230; for meta-writing/meta-blogging, it&#8217;s (IMO) surprisingly good! I was pleased.

Anyway &#8212; [OpenID][3] is still around 10 months later (though the spec was last updated around the time I last wrote on the matter), [WordPress.com have announced they are now an IdP][4] for it, and it seems everyone wants to be a provider, not a consumer (in OID spec parlance, consumer means the website requesting verification of an Identity &#8212; &#8220;end user&#8221; is the term given to an actual human user).

In fact, [Ma.gnolia.com][5] is the only OpenID consuming site of consequence that I&#8217;ve encountered thus far in my travels. Which is, to say the least, slightly perplexing.

I&#8217;m aware the whole *point* of OpenID is that it&#8217;s a vastly decentralised spec that enables myriad providers to exist, but it seems somewhat redundant (in the sense in which that means &#8220;pointless, without purpose&#8221;, not failover-type redundancy) if there does not exist a single consumer of consequence!

And, let&#8217;s face it, why should being a consumer be attractive? You know less about your customers, they can bail on you more quickly, and&#8230; all of a sudden, advertising is the only way of monetising a website. [JanRain][6] operate &#8220;[MyOpenID][7]: Your first (and last) identity provider&#8221;, as well as a couple of services that use OpenID, and have (to my eyes, at least) no conceivable way of generating revenue at present.

Which is potentially fine, but completely stupid if that&#8217;s happening on a wider scale. As a concept, OpenID has much to offer &#8212; I just wouldn&#8217;t use it in CYIADA. I *might* consider it for smaller projects (commercial clients), but, really, I think it&#8217;d have a better chance if Myspace were an OpenID provider. And [we all know what *they&#8217;re* like when it comes to web standards][8] (and general usability issues)!

Plus, of course, there&#8217;s the issue of the popularity of up-stream providers if you want to verify against something other than OpenID (like, for example, someone&#8217;s Google account &#8212; which you *can* do quite easily using various API tools they provide). With anything youth targeted, there&#8217;s a special impetus that we don&#8217;t really see in other places. I read this absolutely hilarious comment on [a great analysis of an article about Myspace][9]:

> Itâ€™s easy to imagine teenagers as a pack of wildebeests on a grassy plain, simply running with wild abandon.

Why yes, yes it is. They&#8217;re not (article has more on this), but the bottom line is if you&#8217;re using external verification services, you&#8217;re dependent on the existence and longevity of these services for the existence and longevity of *your* services, not the least in user profiling and building up meaningful market data so you can adjust your mix to a known audience.

You don&#8217;t have the same degree of control over these things, and there&#8217;s a trust relationship there beyond just the security/phishing issues side of things, that most businesses don&#8217;t want to touch with a ten foot pole.Â With good reason.

OpenID feels like a wonderful technology in a chicken-egg situation. It&#8217;s still just too bloody geeky for your average LJ user to get on board with. And they&#8217;ve got it easy. For anyone else, it&#8217;s completely impossible.

Here in Sydney, we could probably get away setting up verification against Windows Live simply because [that&#8217;s what people use here][10], as I have noted before (about halfway down the post linked). But developing different authorisation schemes as a matter of localisation is most definitely not in my book of best practices (if I were ever to write one :P) &#8212; so, instead, fragmented Internet identities persist.

That bugs me.

If you have any answers or thoughts&#8230; let me know. Blog about it and send a pingback/trackback. That&#8217;s one of the few open standards that&#8217;s worked well on the web, albeit with plenty of spam abuse, but there&#8217;s of course the problem that not enough people are socially blogging aside from software developers and design geeks and&#8230; whatever category I fit into (&#8220;web strategist&#8221; is still what I&#8217;m calling myself&#8230; we&#8217;ll see how much longer that sticks) &#8212; so, of course, there&#8217;s no instinct to reply in this manner.

In the same way, developer and business instinct is to build your own authentication and profiling platform. Is it worth resisting?

 [1]: /blog/2006/05/11/rss-takes-all-the-fun-out-of-life
 [2]: /blog/2006/05/15/perplexingly-pithy
 [3]: http://openid.net/
 [4]: http://wordpress.com/blog/2007/03/06/openid/
 [5]: http://ma.gnolia.com/
 [6]: http://janrain.com/
 [7]: http://www.myopenid.com/
 [8]: http://www.baselinemag.com/article2/0,1540,2082937,00.asp
 [9]: http://bokardo.com/archives/is-social-all-about-cool-or-why-teens-switch-from-myspace/
 [10]: /blog/2006/02/06/wordpress-redeemed-a-little-and-a-rant-about-parallel-blog-universes