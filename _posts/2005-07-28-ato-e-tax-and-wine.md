---
title: ATO e-tax and Wine
author: Josh Street
layout: post
permalink: /2005/07/28/ato-e-tax-and-wine/
categories:
  - Life
tags:
  - chair
  - e-tax
  - Internet Explorer
  - Linux
  - web application
  - Windows
  - Windows XP
  - xp
---
The ATO&#8216;s e-tax application is a pretty horrible beast, and a perfect example of something that really should be a web application &#8212; but it works on Wine near-perfectly. Sort of.

I just filled out my 2005 tax return on Linux, before getting to the final step and discovering it wouldn&#8217;t print nor submit electronically (because, apparently, they can&#8217;t code and are dependent on Internet Explorer as a connectivity layer &#8212; and yet they test for security before allowing you to download the program! Hah!)&#8230; but it would save just fine, so I copied my tax file across the network to a Windows computer (resenting all the while having to leave my chair, because I really shouldn&#8217;t have had to even leave my browser &#8212; In this instance Firefox &#8212; if they&#8217;d done this properly) and imported, printed, and submitted it electronically without any significant problems.

Note that you can&#8217;t import a file from anywhere &#8212; you need to actually copy the file into the e-tax folder itself (probably `C:\etax2005`) before e-tax will let you startup without creating a new file. You&#8217;ve also got to enter your TFN again (presumably as a meagre form of security) to get it to open the file.

It annoys me that they don&#8217;t even support Mac users natively, instead saying that it will function, if &#8220;suitable Windows Emulator software&#8221; is installed. That&#8217;s so presumptuous I was tempted to fill in the section asking for costs incurred in filing the tax invoice, listing three licences for Windows XP purchased earlier this year (not really, but it&#8217;d be a nice revenge :)).

Okay, rant over.

 *[ATO]: Australian Taxation Office
 *[Wine]: Wine Is Not an Emulator
 *[TFN]: Tax File Number