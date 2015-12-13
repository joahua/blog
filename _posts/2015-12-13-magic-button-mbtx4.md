---
title: Fixing a Magic Button MBTX4 remote (which is really a Neatrol Systems 4Ch RFAND Tranceiver)
author: Josh Street
layout: post
permalink: /2015/12/13/magic-button-mbtx4-neatrol-4ch-rfand/
categories:
  - Geek
tags:
  - hardware
  - rf
  - remotes
---

Our garage remote died recently. We subbed the battery, and nothing improved. Stood closer, nothing improved. Sporadic successes were very-much outweighed by failures.

The base station/"receiver" (it's actually a tranceiver, I think? If you want to learn more about this than I did, [KeyLoq](https://en.wikipedia.org/wiki/KeeLoq) would be a good starting point) in our little block of four has been known to have some problems, but the sporadic failures and our pretty comical attempts to hold the remote at different angles, out windows, bashed-sideways, bashed-frontways, etc., were yielding poorer and poorer results.

Anyway, an afternoon prodding the thing got us to "oh the button’s probably dead". So much for those new batteries.

At least in our situation, a four-button remote is a pretty useless thing - there’s only one gate to control. Turns out the numbering on the front of these things doesn’t even line up with the PCB - we hit "2", which always confused me no end, but this is really pressing button 1 on the circuit.

Button 1, in this case, was doing nothing at all.

Replacement time!

The PCB's pretty generously spaced, probably because no-one wants a remote so tiny it gets lost. The surface mount buttons are pretty easy to work with. I ordered [this pack of 20 buttons](http://www.ebay.com.au/itm/310787954698) from an eBay seller (described as a "20pcs 6x3x4.3mm SMT SMD Momentary Micro Tact Tactile Push Button Switch" in the very likelihood the listing has vanished by the time you’re reading this… eBay, stop the bitrot!) for about $5 having measured up the button as being, well, vaguely that size. The buttons on my remote were black and these were white, but hey, it's behind a piece of rubber anyway. If anyone needs 19 SMD buttons and is in Sydney, holler at me - they're probably in a drawer somewhere.

I realised while I was popping off the old button and soldering on the new that I actually didn't need to order any buttons at all, of course.

If you, like me, only use a single of your four remote buttons… just swap the bad one for a good one! My soldering is shocking but the original SMD work was pretty tidy and easy to get things on and off. The good news is it's a spacious enough board you probably don't need to worry too much about melting the wrong thing.

Anyway, yay, working remotes again!
