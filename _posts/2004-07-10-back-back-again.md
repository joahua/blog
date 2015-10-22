---
title: Back, back again
author: Josh Street
layout: post
permalink: /2004/07/10/back-back-again/
categories:
  - Before WordPress
tags:
  - Novell
  - stuttering
  - SuSE
---
Yay. I&#8217;m about to go and get some sleep, but just quickly posting to say that the changeover was relatively painless and all is well-ish.

I now have full Exchange functionality within Ximian Evolution, which was a major factor behind my decision to move to SuSE (i.e. because of their close ties to Novell) over any other platform. ALSA audio is now happening as well, although it took a wee spot of hax0ring before it got over the fact that I had two soundcards, one of which doesn&#8217;t really work &#8211; it was clipping and stuttering all over the place&#8230; well. No. It wasn&#8217;t \*solely\* having two soundcards. It was incidental that the problem went away when I deleted the dodgy one from the system (YaST2 is lovely) &#8211; but it recurred later, even though the card was theoretically disabled.

The fix? I had to disable &#8220;IEC958 Mix Analog&#8221; using KMix, and suddenly all was golden again. No, I have no idea what that is meant to do. Seeing it was clipping all over the place, &#8220;IEC958 +5V&#8221; would seem a more probable choice, but hey, trial and error works miracles. For the purpose of people Googling this problem, my soundcard is a C-Media PCI CMI8738 and my onboard audio was (before I cooked it several months ago &#8211; it still detects, because I haven&#8217;t disabled it in the BIOS yet) recognised by SuSE 9.1 as a Gigabyte GA-7VAX Onboard Audio (Realtek ALC650) device.

It&#8217;s not blatant hit-generation techniques, I was just unable to find anything about my soundcard and clipping with ALSA/SuSE9.1 when I was looking before.

Anyway. That was one of several problems of significance I had&#8230; other weird ones are to do with printers! My goodness! Okay, so I have this behemoth HP OfficeJet MFD thingo which scans and prints (and faxes, but I haven&#8217;t risked setting up the computer to interface with THAT yet). Detects fine. Doesn&#8217;t do ANYTHING until I download and re-compile the [hpoj][1] drivers &#8211; once that happens, at least CUPS will detect the printer (previously, only YaST2 and all its specialness could see that it was attached)!

Twenty minutes later, I&#8217;ve installed the printer (again, this time without the &#8220;assistance&#8221; of YaST), and XSane is working its marvels. Just because it was handy, I grabbed a nice scan of the cover of &#8220;The DaVinci Code&#8221; &#8211; full colour, 300dpi, nothing had any problems. Okay, so at least ONE direction of our USB is working great. For the first time since installing SuSE, I actually did the obligatory poke-around-the-startbar-equivalent-menu thing&#8230; and uncovered this: System &#8594; Monitor &#8594; HP Office Jet.

Which shows what the two-line LCD on the printer is currently displaying. And that, of course, worked perfectly. YET I STILL CANNOT PRINT!!!!

Doh!

If anyone knows whether hpoj would affect scanning ability, please say something &#8211; if it is completely unrelated, then I can safely assume that hpoj is borked and needs to be poked with sticks. If it \*does\* have a connection with scanning, then the plot has thickened!

Hmm. So much for quickly posting. Meh!

 [1]: http://hpoj.sourceforge.net/