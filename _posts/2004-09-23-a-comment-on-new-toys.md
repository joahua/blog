---
title: A comment on new toys
author: Josh Street
excerpt: "A tale of suffering, endurance, and never-ending router tribulations.  Oh, and KVM's.  Because they're cool, yet at the same time, the root of all evil."
layout: post
permalink: /2004/09/23/a-comment-on-new-toys/
categories:
  - Geek
tags:
  - aforementioned trusty router
  - "Alzheimer's"
  - analog
  - caching
  - cough
  - Intel
  - "Josh's garage"
  - Linux
  - power management
  - random technology crap
  - software aspect
  - software package
  - Swiss Army
  - trusty router
  - web caching/filtering
---
Has anyone else noticed the potential new gadgets seem to have for wreaking havoc upon a geek workspace? I&#8217;m really struggling here after the latest toy arrived today. Things are un-cool, but supremely gimmicky.<!--more-->

<img src="http://www.joahua.com/blog/wp-content/2004/09/kvm.jpg" alt="My shiny new KVM" style="float:right" />

As you can see, it&#8217;s a KVM. Or, if you can&#8217;t see, then the description should have informed you. Anyway. That little goody wasted a LOT of my time, this afternoon! Not that this is necessarily a BAD thing, mind, seeing I&#8217;m now struggling with the purpose of my existence in a post-exam world. Well, not really. But you get the idea. Hmm.

So, I&#8217;d originally decided to get a KVM or three (well, okay&#8230; two) because there were computers enough to justify it. I was planning to use two computers, one as a dev machine, and the other as a miscellany/office/timewasting platform, both of which (for the present moment) running Linux. Of course, then [the house][1] decided to sell itself, so Josh&#8217;s random technology crap flew away to the graveyard in the sky, also known as my garage. This meant that my number of production machines decreased. A time of great sadness, no doubt.

But I digress. Long story short, shoving all nostalgia, eulogies and poeticism aside, the reason I once had for purchasing this equipment had faded somewhat, at least in the interim, until a new place of residence is acquired and I can go back to being messy again (well, it wasn&#8217;t even messy&#8230; just cluttered. You couldn&#8217;t see the floor, but the cases were only one layer deep, so that&#8217;s acceptable by my reckoning). This means, of course, that the only other thing I really had to use this darn switchbox on was my trusty router, used for routing IP packets, not reptiles from drains. Yes, there is a story behind that, and no, I don&#8217;t care to tell it now.

In an unfortunate turn of events, the aforementioned trusty router is something of an archaic beast, using an old AT power supply (for those to whom that means nothing, let&#8217;s just call it analog &#8212; you turn it on, you turn it off; there&#8217;s no power management special crap), and all the peripheral support that this entails. Well, guess what. Seeing I bought this KVM in the last decade (well, okay, seven to eight years&#8230; close enough, AT is dead), there aren&#8217;t any AT keyboard ports to be seen on it. Fortunately, I can still use it just for switching VGA, but this just isn&#8217;t anywhere near as much fun.

Enter the nightmare.

So, I waltzed out to the garage, negotiated with spiders of all persuasions, drifted between dust and precariously stacked furniture, to the cupboard, at the very back, which I have claimed for myself as the Fortress I.T. at 70 Lenthall Street. There, if you&#8217;re an interested thief, you now know where to look. It&#8217;s not worth going past the spiders unless you&#8217;re desperately in need of some fairly specific hardware, mind. The newest thing in there is a Pentium 3 system, and even that has Alzheimer&#8217;s. I emerged with the older of the two Pentium 3 systems (because this one had a nicer case), although I didn&#8217;t know which I had chosen at the time &#8212; it was a bagged system, in an attempt to keep rat excrement from falling into it. Okay, it&#8217;s not quite that bad, but I&#8217;d rather the rodents (and, more realistically, spiders webs) had as little to do with my gear as possible.

And what an opportune time for a hard drive failure! The system I&#8217;d extracted had a 3200MB hard drive, once hard at work in a BDC server (not mine). Apparently, too hard at work. [Graagh!!][2]. That&#8217;s the second drive around that size I&#8217;ve lost in recent months, and it&#8217;s starting to annoy me. I need a new fleet of smallish (hey, largish is good, too) drives, which haven&#8217;t been abused in servers without enough memory flogging at swapfiles for years on end (I happen to know, because I was the guy who de-commissioned the machine, that the server that drive came from only had 32MB of RAM, and was used for too many years, with too many users. Die, stupid I.T. departments, die. That&#8217;s German for &#8220;The, stupid I.T. departments, the.&#8221;). So my plans for world domination using an elegant distro and a relatively spacious (considering all the thing would be doing is packet forwarding, and web caching/filtering for five-odd users) were once again foiled. And, unlike [Soolie][3], it was nothing to do with my sleeping patterns.

Those were the causes. These are the effects.

I shutdown my router. You may have noticed a period of a few hours when Josh would normally be online and talking in 3<sup>rd</sup> person, but wasn&#8217;t. This is why. The router (note that I&#8217;m talking about a converted desktop PC running a slightly hacked version of [Coyote Linux][4], not a &#8220;hardware&#8221; router) was then moved into a conveniently located spot of floor, and dismantled. This is a more challenging procedure than it sounds, seeing my weapon of choice for such matters, the blue screwdriver which I would worship religiously, were that not against my real religion, had gone missing in this great shuffle of crap into the garage.

And so, I embarked on a dangerous voyage of case-unscrewing, using only my teeth. Well, okay. My teeth, and the worlds&#8217; bluntest imitation Swiss Army knife. Or maybe just the worlds&#8217; bluntest imitation Swiss Army knife. At any rate, it was far more difficult than it should have been. I ended up using the knife as a lever, to PRY the screws out, simply because I forgot which was I was trying to unscrew (you have no idea&#8230; this seriously took me fifteen minutes for six screws). Note that the six screws include hard drive screws, not just the case&#8230; honestly, who has six screws on their case that they use?!

Meanwhile, back at the ranch, on topic. So, this hard drive, right. It&#8217;s a 420MB Connor beast. They don&#8217;t make them like they used to. I don&#8217;t think I&#8217;ve ever heard anyone say a kind thing about Connor drives, so I&#8217;ll break the mold. Guess what, folks? This is my most enduring hard drive. Having said that, I&#8217;m bracing for it&#8217;s imminent death, some time next week, at which point I&#8217;ll be completely out of small hard drives, and back to searching for floppy-router distributions. Long live [FreeSCO][5].

Hardware is only ever the first half of any good I.T. geek&#8217;s nightmare, though. I hadn&#8217;t STARTED on the software aspect of things.

Right. I now have a hard drive, and a Pentium 3 system with PS/2 ports for keyboard and mouse, respectively. I don&#8217;t need the mouse, but that&#8217;s irrelevant, as I&#8217;ve always kind of been a keyboard guy anyway. Goal number one achieved! I can now double-tap &#8220;Scroll Lock&#8221; and flick between displays! How cool is that?! Not cool enough, I&#8217;m thinking.

Next up, pick a software package of choice. Yeah, well. [Dale][6] seems to always be ranting about &#8220;his [smoothie][7]&#8220;, so I figured I&#8217;d give that a shot. Why not &#8212; it was also the first router-related ISO I found sitting in my downloads directory. This computer even has a CD drive in it now! I know, ridiculous for such a device, but hey, you get that when it&#8217;s haphazardly built from spares dug out from amidst the spiders webs three inches thick in Josh&#8217;s garage after storage for one week. Hyperbole rocks.

Install, take one. Looking good, looking good. I figure out how you&#8217;re meant to setup PPPoE on these things, after a few goes. I discover I&#8217;ve got an Intel 10/100 Pro NIC in there (the genuine PCI article, not one of those crappy integrated things! ;-)), which is always cool&#8230; I remember when they used to cost $80.00! Oh, the nostalgia. I discover I can&#8217;t remember my DynDNS password for the life of me. And that I&#8217;m equally struggling when it comes to recalling my username. But that&#8217;s okay. The software is working, isn&#8217;t it?

Bzzzzzzzzt.

Well, it was working fine until I patched it! Hmm. Four patches, apparently not cumulative, and not to be installed simultaneously. Maybe I&#8217;m just a stupid user, or maybe I got lucky&#8230; maybe it&#8217;s Maybelline.

So, take 1 with software. Once I (manually, at command line, seeing I couldn&#8217;t guess the interface correctly &#8212; I&#8217;ve since figured out that the Realtek cheapie looks cheap on the backplane, and the Intel Pro NIC has an impressive array of no fewer than FOUR flashing LED&#8217;s! That made life easier, but I&#8217;m wishing I&#8217;d noticed sooner&#8230;) managed to get interfaces up, it worked great, until I patched it. At which point, I had a system refusing to boot. In retrospect, trying to simultaneously upgrade FOUR kernels probably wasn&#8217;t the best of ideas. Learning experience. \*cough\*

Take 2, it&#8217;s going okay. I haven&#8217;t had to reboot yet, so I&#8217;m a tad nervous about what it&#8217;ll do to me tomorrow morning&#8230; I&#8217;ve been sporadic enough in answering email lately, due to Exchange server being stupid with my work account (heh, a switch back to IMAP fixed everything&#8230; telling, no?), and further downtime certainly won&#8217;t help matters! I still haven&#8217;t patched this version, so if you know some l33t exploits to let you get an &uuml;ber root-kit on my b0xen, now&#8217;s the time. Oh yeah, is now the time. Because I&#8217;m locking this sucker down tomorrow morning, assuming it comes back up at all.

This KVM is very cool, but I&#8217;m currently hating it for making me do what I just did to my network!

 [1]: http://www.joahua.com/blog/2004/09/09/for-sale-house-sydney-australia
 [2]: http://kevan.org/brain.cgi?Joahua
 [3]: http://soolie.tk/
 [4]: http://www.coyotelinux.com/
 [5]: http://freesco.org/
 [6]: http://blog.dalegroup.net/
 [7]: http://smoothwall.org/

 *[Alzheimer&#8217;s]: Or, a lack of memory
 *[BDC]: Backup Domain Controller