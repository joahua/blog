---
title: STP wire on steroids
author: Josh Street
layout: post
permalink: /2005/08/10/stp-wire-on-steroids/
categories:
  - Geek
tags:
  - actual conductor
  - telephony hookups
---
Category: Geek. Decidedly geek. Yeah, I&#8217;m talking about cables.

So we were patching an extension to the phone system here today (no, no more phones, don&#8217;t worry&#8230; just an extension for an existing handset), and for some reason were using some seriously weird STP cable. The S stands for solid. This stuff is very solid.

![Side by side shot, pretty background, not quite perfect focus on the telephone cable on the left but the STP is in clear view][1]  
![Side by side shot, white background, good focus on both the telephone cable on the left and the STP cable on the right][2]

The second photograph is probably better (though the first is far prettier &#8212; which was actually the only reason I shared it, sorry low-bandwidth visitors!)&#8230; you can clearly see that the STP cable (shielding and core) is nearly one and a half times the diameter of the standard (boring) ivory cable that we mere mortals generally use for telephony hookups. Which creates problems.

![Comparison of standard and super STP cable inside an RJ11 lug. Note STP does not fit into pin section of lug, whilst standard wire does.][3]

The back of this standard RJ11 connector allows the STP monster cores to insert up until the final section that guides individual cores to position under the pins &#8212; at which point it is simply too thick to continue. On the other hand, the normal (boring) ivory cable (that mere mortals use) moves unimpeded to the end of the lug without difficulties.

I haven&#8217;t got photo evidence to back up this claim, but the same is true of standard RJ45 connectors/lugs. This cable is truely&#8230; odd. Because it&#8217;s an STP cable with solid orange/white orange solid blue/white blue pairings, and seems in nearly all other respects like a network cable (albeit lacking two pairs)&#8230; but its cores are bloody enormous!

Trivially, it seems like the actual conductor in this souped-up cable is smaller than its standard counterpart. And it&#8217;s made out of tin. So it&#8217;s probably a worse cable, though my multimeter&#8217;s battery died (and I haven&#8217;t got any spares) so I couldn&#8217;t actually test impedence.

So. Does anyone know what this thing is? Got me stumped. And vaguely frustrated.

In the end I terminated it to a wall plate (because the odd stuff was of course what we used to do the long run in a cavity) and made a short RJ45 to RJ11 patch (because I didn&#8217;t have any RJ11 wall plates), thus avoiding all kinds of complications, but it&#8217;s more curiosity at this stage than anything else.

 [1]: /blog/wp-content/2005/08/prettysidebyside.jpg
 [2]: /blog/wp-content/2005/08/loosesidebyside.jpg
 [3]: /blog/wp-content/2005/08/compareinrj11.jpg