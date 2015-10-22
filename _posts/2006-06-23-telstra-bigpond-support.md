---
title: Telstra Bigpond support
author: Josh Street
layout: post
permalink: /2006/06/23/telstra-bigpond-support/
categories:
  - Geek
tags:
  - auth server
  - defined server
  - gas stove
  - heartbeat software
  - Internet connection
  - MAC address
  - non-desktop-solution
  - pain
  - supervisor
  - Telstra
  - third-party routers
---
I hadn&#8217;t called support for at least six months. I did, yesterday, because our router went on holidays and I&#8217;d neglected to keep a local copy of Bigpond clients, etc., and knew they had a super-secret-accessible-without-authentication FTP site I could download one (for the record, it&#8217;s [61.9.192.138][1] under dist/ with anonymous auth) from. Because I wasn&#8217;t going to pay a net cafe/couldn&#8217;t be bothered walking the 1km to the nearest one, and because I couldn&#8217;t find an open AP to steal wireless from(!! and I *drove* nearly a kilometer trying to, even the usual places were out!).

That was yesterday. Today, I called again because I couldn&#8217;t get it un-setup. And got the most completely and utterly clueless technical support person I&#8217;ve ever encountered. Not to sound misogynistic or anything, but&#8230; well, no male tech has ever come close to this woman&#8217;s sheer level of cluelessness. She hadn&#8217;t heard about their MAC address locking auth which has been going on since the beginning of time. Obviously, this was an impediment to getting things working when clearly it was a locking problem. She read me an SM server IP address off some sheet she had (which, so she claimed, was the way they did things now&#8230; yeah, righto. I&#8217;m now connected just fine without any such defined server, thanks) which I entered &#8212; of course &#8212; to no avail. Then I asked if she knew whether I should be using a SM or a DCE auth server, in light of the fact I&#8217;ve been connected for a couple of months without any problems (no joke&#8230; when Telstra works, it&#8217;s the most spectacular thing in the world. Getting it up and running is often quite a different story.) and she said:

&#8220;Uhhh I don&#8217;t know&#8230; SMTP server? Hmm&#8230;&#8221;

\*josh bangs head against desk\*

Some minute and a half later she realises, &#8220;Oh, that&#8217;s about email, right. Let me check that for you.&#8221;

Uhh, yeah, that&#8217;s what I wanted you to do three minutes ago. \*waits on hold\*

&#8220;Well, I just spoke with my supervisor and they don&#8217;t know either.&#8221;

Please, give more support contracts to the Indians. They know more than support-script-monkeys in Australian call centres.

So, next question &#8212; can you tell me when I&#8217;ve shown up as authenticating/connecting in the last 72 hours?

I know what the answer to this question should be, because they&#8217;ve been able to do it before. Hers was &#8220;Oh, hang on&#8230; oh dear, this is too technical for me.&#8221; \*Raised eyebrow, before violently ripping limbs from tech-support voodoo doll reserved for this purpose\* Realising the irony of her statement, she laughed airily, &#8220;And I&#8217;m meant to be the support person!&#8221; Oh, really? \*Starts to warm soldering iron for use in doll&#8217;s eyes\* Unsurprisingly, she couldn&#8217;t figure out what was going on enough to answer my question.

She proceeded to launch into the standard &#8220;Oh but you said you were using a router and actually we don&#8217;t support those so I&#8217;m sorry we&#8217;re not really trained in how to use them&#8230;&#8221; I was tempted to cut her off and start setting it up on another computer now to prove it still wasn&#8217;t working, but thought the pain had gone on long enough. So she continued with her &#8220;Bad user, you and your stupid non-desktop-solution that uses third-party routers.&#8221; Nevermind that these routers feature Telstra-licensed heartbeat software (at least, one would hope so, because bpalogin is GPL&#8217;d and router firmware certainly isn&#8217;t!). I could see the &#8220;contact the manufacturer&#8221; recommendation coming &#8212; it did &#8212; but then she threw out another gem that can&#8217;t possibly be ignored. She proceeded to actively recommend a third-party support company to setup my *Telstra Bigpond Internet connection*, as though they&#8217;d somehow be able to fix my (Telstra-induced) MAC locking problems.

At this point I took the doll downstairs, and left it sitting on the gas stove.

*Addendum: I have encountered good female techs plenty of times in the past&#8230; I&#8217;ve just never encountered any male techs this **bad**. I think it&#8217;s probably a result of moronic gender equity corporate policies, whereby they employ useless females to make up the numbers &#8212; simply because not many work in the industry, doubtless at least in part because of the &#8220;clueless female&#8221; flack that some apparently cop. Proud to be a part of the problem. \*rolls eyes\* It was said in jest, live with it ;-)*

 [1]: ftp://61.9.192.138