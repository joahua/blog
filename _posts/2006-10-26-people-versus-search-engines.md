---
title: People versus search engines
author: Josh Street
layout: post
permalink: /2006/10/26/people-versus-search-engines/
categories:
  - Open Source
  - Usability
  - Web Standards
tags:
  - advertising model
  - all-things-to-all-people content networks
  - cash-cow-marketing-tool
  - deputy
  - facebook
  - free web hosting services
  - Google
  - internal search needs
  - ISP
  - King
  - marked-up doing-everything-wrong-with-the-web
  - meaningful search
  - player
  - R
  - search engines
  - semantic web
  - VOIP
  - web hosting
  - Whirlpool
  - Yahoo!
---
It seems that search engines are an immutable fact of early-twenty-first century existence. We can&#8217;t escape them in any immediate sense, and cannot believe they could ever disappear (I recall one instance on Whirlpool forums where a user thought his/her ISP&#8217;s interational link must be down because he couldn&#8217;t access Google. This was one of the very few times Google had actually dropped off the face of the planet for about twenty minutes. It was simply outside the realm of possibility.)

Yet, increasingly, our surfing habits are defined by this bizarre social concept that seems to be shaping certainly acquisitions and web-two-point-oh-bubblism, wherein websites serve users by connecting them with one another, not on the basis of them knowing what they wanted, but rather in a bizarre *a priori* manner whereby degrees-of-separation (MySpace) or user-supplied-already-knowns (LiveJournal, Xanga, etc.) define connectedness and displayed content.

Search is no longer the macro-inter killer app, but an intra-site facility applied to microcosm &#8212; often based on &#8220;transparent&#8221; technology that has, on the basis of known knowns (in the words of a certain [Rumsfeld][1]), already done some of the hard work for users (I should say people, but don&#8217;t out of habit: it is an industry hazard) without actually asking them anything. This is where location- and organisation-based matching (*cf*. MySpace, Facebook, etc.) come in.

But none of this data is intelligently searchable by generic engines.

None of this data (in the case of Myspace especially, horribly marked-up doing-everything-wrong-with-the-web technically entity that it is) is *available* for indexing by search engines because it&#8217;s not abiding by any defined semantics. There is not, for example, any overwhelming use of microformats &#8212; [hCard][2], etc. &#8212; for defining contact details in any common sense. Yet these things *are* searchable within a given website. 

And, what&#8217;s more, these things are searchable with great precision within (social networking) sites. This is because of a very well defined internal semantic (**not** the &#8220;semantic web&#8221;, but internal data structures) and an enforced obedience to these structures that was never a part of pre-SocNet sites.

SocNet platforms are radically different from web 1.0 systems in that they are (ironically) *vastly more constricting*. As &#8220;web 1.0&#8243; I would cite [Geocities][3] and free web hosting services, portals, and all-things-to-all-people content networks. Now, we&#8217;ve got blogs (precisely defined websites), [MySpace][4] (chiefly SocNet profiles with bits on the fringes common to the users, and now with enough impetus to appear unstoppable), [Flickr][5] (free &#8212; and fee-for-service that people actually pay for &#8212; web hosting, precisely defined as photo hosting), and, strangely, a portal ([Yahoo!][6]) still on top of Alexa 500 rankings. A portal that owns both Flickr and Geocities, but has changed the model of the latter to place greater emphasis on fee-for-service hosting. But I digress into strategy &#8212; the point is not that, but rather in the way social data is stored.

Flickr is meta-data rich. It uses a well defined system based on EXIF, intrinsic semantics (title, description, tags &#8212; tags that get used properly, unlike Facebook which doesn&#8217;t bother to make such things clear &#8212; I want Facebook to flop, by the way, because it annoys me, so don&#8217;t expect nice things to be said about it. It&#8217;s a poor closed-system imitator, albeit with a stupidly effective advertising model everyone else should be wishing they came up with first but haven&#8217;t seen in order to copy&#8230; because it&#8217;s a closed system (or used to be) exclusive in scope. Which makes it very effective SocNet/Web 2.0, by my own definition, so I don&#8217;t really have a basis for complaint.) and extrinsic semantics (groups, pools, etc.).

Profiles, unlike &#8216;pure&#8217; SocNet (Myspace, Facebook), permit anonymity, but allow disclosure of as much as is desired: at any rate, that is not the purpose of the site. Myspace/Facebook&#8217;s *raison d&#8217;etre* is profiles. (Well, and that and cash-cow-marketing-tool of the RIA&#8217;s of the world) Accordingly, its profiles have very definite semantics even whilst the rest of the site may not (I speak of Myspace more, here). Myspace gives core &#8220;Details&#8221; profile info individual fields, whilst allowing a diverse &#8220;Interests & Personality&#8221; information in freeform textareas that are designed to entice users into participation (and, possibly, aiding more fuzzy searches &#8212; but mostly I think it&#8217;s just compelling content, as there is no immediately obvious way to search that data).

&#8220;Interests & Personality&#8221;, along with blog content, seems to be the only freeform contributed material available on the site. Want music or a video with your profile? You&#8217;ve got to browse to the band&#8217;s site, load the player (no go in Opera with Flash at the minute, it seems), and then select &#8220;Add&#8221; on the track. They (yeah, it&#8217;s kinda big-brotherish) know exactly what song you chose, what band it&#8217;s from, what genre, etc. &#8212; that is to say, unambiguously and certainly beyond a probably-common song title. This isn&#8217;t an upload-yourself-and-we&#8217;ll-manage-rights kind of thing. The officiality gives that internal data structure that much more depth: but, again, the point is that the data is internal and not open.

This, it seems, is the defining quality of SocNet. That&#8217;s what makes the ideas of [open federation advocated by Google Talk earlier this year][7] so bizarre for the rest of us. We don&#8217;t particularly care, because closed systems mean innovation (because we can define new data for ourselves to work with) and/or extensibility that isn&#8217;t possible in an open platform (if, for example, not all federated partners agree to a spec extension &#8212; take, for example, Google Talk&#8217;s own Jabber base and proprietary VoIP on top of that). Openness is in Google&#8217;s interests, because it&#8217;s so dependent on things being open for its core business (search). But real people want services that work, not services that push them to another site. I&#8217;ve never trusted sites that bounce me off to Google for their site&#8217;s search, even if it&#8217;s one of those crappy co-branded things. It doesn&#8217;t make sense. Why would you make someone inspect your website from an inferior perspective when *all the information* is stored in a database, with the possibility of more semantically meaningful search open internally only?

Google *won&#8217;t* deal with your internal search needs. It&#8217;s not designed to. It does a great job of dealing with publicly indexed materials completely aside from SocNet services. SocNet sites thrive on and are empowered by strong intrinsic semantics that make clever profile-based (or UGC-based) search possible, which builds loyalty etcetera in a way foreign to informational websites. SocNet is experiential and (surprise surprise) social &#8212; it doesn&#8217;t have to be *about* anything.

Content was deposed as king sometime in the middle of the first decade of the twenty first century, and with that regime change his deputy, Search, was also shuffled to a somewhat less prominent position. Somewhere out of sight, Search&#8217;s identical twin, Query, is the real power behind the throne: it uses unindexed data and makes clever links to bring people closer together in a way that traditional search engines had never even envisaged.

 [1]: http://www.knownknowns.net/index.html
 [2]: http://microformats.org/wiki/hcard
 [3]: http://geocities.yahoo.com/
 [4]: http://myspace.com/
 [5]: http://flickr.com/
 [6]: http://www.yahoo.com/
 [7]: http://googleblog.blogspot.com/2006/01/open-federation-for-google-talk.html

 *[UGC]: User Generated Content