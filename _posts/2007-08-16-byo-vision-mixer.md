---
title: BYO vision mixer
author: Josh Street
layout: post
permalink: /2007/08/16/byo-vision-mixer/
categories:
  - Christianity
  - Church
  - Geek
  - Visual
tags:
  - applied technology
  - BSD
  - capture hardware
  - good real-time capture hardware
  - Linux
  - RAM
  - Windows
  - x86 hardware
  - xp
---
[Gephex][1] is brilliant. Probably a great way to build a really capable vision mixer (with some good real-time capture hardware) on a shoestring budget. I&#8217;m sick of dropping $120 and trekking over to Artarmon every time a few sources need to be strung together! Actually, if it weren&#8217;t for the fact that hire was locked in for an imminent evening, I&#8217;d probably have cancelled and spent my $120 on another capture card, instead. It&#8217;s nearly 10 frames behind realtime but that&#8217;s on a regular Windows box running as an un-prioritised process&#8230; on a dedicated \*nix machine I reckon that would drop back to about 4 frames, which is totally a fair deal (you normally lose ~2 to genlocking/keyers anyway, and more if there&#8217;s a chain of mixers involved). Oh, yeah, and it does myriad effects and keying, too. Need to figure out how to link network streams in, but its pretty much perfect already. This is totally taking precedence as my spare-time hardware project &#8212; it&#8217;s just calling for some proper gear to be built. Time to buy that book on microcontrollers methinks.

There are other hardware projects I&#8217;ve got cooking, yes, but none so immediately useful or easily implemented. The great thing about this is the hard work (read:software) is essentially done already. At worst I&#8217;d need to hack some kind of interface driver, but, really, it&#8217;s pretty much functional as is. And, because it&#8217;s already been ported to Linux and BSD, it&#8217;s really trivial to build a barebones system upon which to base it all. Preserving keyboard + mouse input *is* a totally necessary design parameter anyway (for reasons of network stream integration, titling(!!), etc.) so hardware can be periodically switched on as it becomes available. I&#8217;m tempted to pull apart my languishing Athlon XP, but it feels too powerful for the task (not even kidding&#8230; this thing is lightning fast) and I wouldn&#8217;t know what to do with the rest of the RAM in it. My biggest concern is tracking down capture hardware that&#8217;s Linux or BSD friendly. Ideally there&#8217;ll be a security capture card that does PAL at full frame rate and has 4 inputs, because essentially that means it&#8217;d be trivial to add a few extra cards and, all of a sudden, it&#8217;s quite foreseeable to have a 12 input vision mixer that will key and title away til the cows come home.

One concern I have is that the mixer component only takes two sources&#8230; which is much the same as on any hardware mixers I&#8217;ve used (two buses: select source on A + B bus, mix buses), but it feels really inflexible. I&#8217;d chain them together but think that might necessitate extra genlocking time and increase overall latency. I can&#8217;t actually think of a usage scenario for this one, though, so it&#8217;s not a big deal. Because keying exists independently of mixing it&#8217;s not a concern of 2 sources + keyed source, and that&#8217;d be the main situation in which such a thing would be at all necessary.

The other cool thing about this is you can mix digital and analogue sources with impunity. Need SDI? Sure, get an SDI capture card and add an input source. Firewire? Done deal. Same goes for output: because you can output via FFMPEG, your &#8220;vision mixer&#8221; potentially also encodes an IP-distributable stream simultaneously with realtime output to a monitor.

This is an inestimably cool piece of software, but the most brilliant thing is it isn&#8217;t really anything new. I discovered it because I was looking for EffecTV which I&#8217;d last used in a production context over 12 months ago&#8230; Gephex uses existing open-source filters and processing solutions and just provides an excellent means of chaining them together. You can create some excellent motion artwork with it, but the most exciting thing for me is that it enables use of cheap and disposable x86 hardware in place of hideously expensive and proprietary (read: more expensive, but also inextensible and not particularly flexible) solutions that the &#8216;pros&#8217; use.

Increasingly I&#8217;m disinterested in &#8216;professionalism&#8217; about this sort of thing, because that&#8217;s way out of my price league and, to be honest, the most common place I wish this technology were applied is in church and Christian event contexts, where (even if there is money) no-one is interested in effective communication through applied technology. So we continue to try and push forward with no money and a bunch of innovative and irreverent (to the pros) solutions.

Ultimately, it&#8217;s about achieving excellence in the quality and nature of the work done to share the gospel and build up the body of those who follow Jesus &#8212; but excellence can be attained without even a smattering of &#8216;professionalism&#8217;.

That said, I&#8217;d still love to own an MX-70.

 [1]: http://www.gephex.org/