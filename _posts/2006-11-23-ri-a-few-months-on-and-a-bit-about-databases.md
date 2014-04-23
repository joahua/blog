---
title: RI revisited, Web standards, AJAX, LDAP and architecture
author: Josh Street
layout: post
permalink: /2006/11/23/ri-a-few-months-on-and-a-bit-about-databases/
categories:
  - Geek
tags:
  - AJAX
  - CYIADA Global administration
  - DHTML
  - Feedback
  - leader
  - legacy systems
  - Organisational Unit
  - RDBMS
  - relational database
  - Search engine
  - Summer School
  - Tino
  - web development world
  - Web Standards
  - webmaster administrator
---
I visited [Raw Ideas][1] today and was really quite excited by what I saw. They&#8217;re about to move office again so I was popping in to return the keys (I still had them even though I haven&#8217;t worked there for several months now) and generally catch up. Tino was working on a tape library application for archiving DVCPro and Mini DV and HD(V, mostly) footage in a really searchable and generally more-manageable-than-shelves-full-of-labels kind of way, and he was pretty keen to show it off. Freakin&#8217; awesome stuff. Aside from some DHTML gimmicks (fading rollovers, etc., stuff that you think is cool when you&#8217;re developing it but does nothing but irritate you once you have to sit down and finally *use* the application for five minutes!) it was great to see he&#8217;s using [Scriptaculous][2] for some genuinely useful AJAX-based functionality.

Because it&#8217;s a library, it&#8217;s basically one big search engine. Which means that autocomplete is a really handy thing to have, and being able to click on a piece of information and edit it straight away (so, taking plain text and converting it into a `textarea` or `input` field for editing immediately, without a separate admin view) is absolutely priceless for moving through a library quickly. This is so the way content editing should be heading &#8212; I&#8217;m hoping we all get there in the end.

But even more exciting than Javascript usability gimmicks was to see that he&#8217;s still using CSS, now more extensively and without assistance, and with kick-arse semantics. I looked at the source of his page quickly and the only complaint I had was his use of a span for a header instead of an Hx&#8230; totally wonderful to see a few months after the resident standards nazi (that would be me) has taken off!

So we threw around ideas about that (including ripping timecode off DV tape and trying to set marker points, importing EDL&#8217;s for use inside the library, automating transcoding processes and exporting H.264 or FLV for previews, and a couple of other equally fun things), then eventually started chatting about what I&#8217;m doing over here at [Youthworks][3] these days.

I think I made him kind of jealous. I&#8217;ve seriously got one of the best jobs in the web development world right now. I get to come up with stuff that&#8217;s genuinely useful for users (and productive for the Gospel, yada yada &#8212; that&#8217;s the implicit goal of all of this), entirely in response to their needs, without being burdened in particular by history, or legacy systems that need to integrate, or any major competitors &#8212; it&#8217;s wonderful. So we started talking about platforms and whatever and I said I was considering Django (and got a big tick accordingly, which was nice) with an RDBMS (i.e. MySQL, just because that&#8217;s pretty much all I have experience with insofar as DBs go) but then outlined a bit more about the project and he recommended an LDAP system pretty strongly.

LDAP is a directory-based database which is strongly heirarchical and finely granulated in nature. Which is bloody useful when you&#8217;ve got a user structure five layers deep:

![Simple CYIADA universe][4]

But, of course, moderators do not &#8220;contain&#8221; leaders any more than leaders &#8220;contain&#8221; youth. All of these tiers exist independently of one another. They are internally defined by their extrinsic relations, even though their user experience of the website will vary depending on their heirarchical position. The latter makes LDAP seem entirely sensible, but the former definition of personal identity (that is, what constitutes a &#8220;self&#8221; or independent user entity &#8212; a Distinguished Name, in LDAP-speak) seems to rile against that directory concept.

&#8220;Moderator&#8221; is, in fact, a property of &#8220;Leader&#8221;. That is, it is a quality belonging to the user, who belongs to the group &#8220;leader&#8221;. Users should be unique and belong to an Organisational Unit (again, in LDAP speak) that reflects their role within the system. Thus, moderatorship generally will necessitate belonging to two OUs: one does not cease to lead within their own group context if they are appointed as a sitewide moderator &#8212; likewise, moderators *may* be appointed who do not have any formal role as a leader of a youth group. (This problem may be circumvented by creating such users at a CYIADA Global administration level, instead &#8212; for example, I do not lead a youth group in the target demographic, and I volunteer to edit content occasionally: I am not *the* webmaster administrator (hypothetically), but require moderation powers without being a leader associated with any group).

![CYIADA universe with groups][5]

Groups, of course pose their own set of stupid difficulties. They appear to have no heirarchy at all: indeed, even where they could (for example, a Katoomba Convention branch with KYCK, KYLC, KEC, etc. sub-branches, or a CMS branch with Summer School, MMM, etc. sub-branches) this isn&#8217;t particularly useful (and, consequently, not desirable).

They don&#8217;t constitute OUs, because OUs have already been used to assign roles (probably a bastardisation of standard X.520 practice, but so much of this will be I don&#8217;t particularly care). The only way I could see it working would be by defining multiple Organi[s/z]ation components, but even then&#8230;

I don&#8217;t know. My head has been in relational database space for so long I want everyone to have a numeric identifier linking them to another table chock full of organisation records. It makes me comfortable. But then, LDAP would manage authentication and roles, if not association, and appears to generally have potential to make life a *lot* easier. So perhaps there&#8217;s some way to connect directory and RDBMS happily?

Feedback more than welcome. I&#8217;m not worried about platform specifics, just about the theoretical architecture of such a beast (and my conception of LDAP in general). If you&#8217;re reading this and know anything about OpenLDAP or AD or RHCS or any other platform, or just know about connecting to existing sources and extending them, please leave a comment and make me happy :-)

 [1]: http://www.rawideas.com.au/
 [2]: http://script.aculo.us/
 [3]: http://www.youthworks.net/
 [4]: /blog/wp-content/2006/11/simple-cyiada-universe.png
 [5]: /blog/wp-content/2006/11/cyiada-universe-groups.png