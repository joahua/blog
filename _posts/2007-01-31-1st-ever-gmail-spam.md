---
title: 1st ever Gmail spam?
author: Josh Street
layout: post
permalink: /2007/01/31/1st-ever-gmail-spam/
categories:
  - Geek
  - Spam
  - Usability
tags:
  - microsoft
  - outlook
  - webmaster
---
In my account at least, I think.

![Spam that snuck past Gmail's filtering using CSS positioning][1]

Note that it displays perfectly and sans any word obfuscation/misspelling as is usual for these things &#8212; though I would hasten to add that anyone that follows up aforementioned spam is unlikely to have intelligence enough to avoid something with shifty spelling.

It&#8217;s achieved by embedding arbitrary characters in the middle of a word in a span element, and then floating these to the right. It&#8217;s only a two-part division at this stage, so it&#8217;s fairly trivial to break up keywords into their component parts and match either side of spans occurring in the middle of a word &#8212; hardly common in respectable markup. Even if there were more divisions, the fact that they occur without even a space either side of the element should be a giveaway.

The other notable feature is the inversion of &#8220;web!master at example dot org (remove the exclamation mark)&#8221; concept &#8212; here, they&#8217;re using it to avoid immediate blacklisting based on a reported domain.

This will in all probability be dealt with soon by people who know far more about it than I, but I thought it an interesting enough development to be worth mention, particularly in a &#8220;explaining the absurdity of their markup&#8221; sense &#8212; this constitutes, for anyone significant who reads this, absolutely no reason for reconsidering the (limited) CSS given to campaign authors as it is best dealt with at a markup level alone.

In terms of minimal impact to legitimate email, this is the *only* way forward &#8212; contrary to what Microsoft might have you believe with [their recent brain-deadness concerning Outlook 2007&#8242;s rendering engine][2]. (Though we&#8217;re all still guessing at the reasoning behind this, and I&#8217;m falling closer to the anti-trust separation theory than anything related to security/spam prevention, etc.)

 [1]: /blog/wp-content/2007/01/css-spam.png
 [2]: http://www.molly.com/2007/01/18/what-happened-with-html-and-css-in-outlook-2007/