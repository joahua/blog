---
title: Literally lost
author: Josh Street
layout: post
permalink: /2005/11/02/literally-lost/
categories:
  - Geek
tags:
  - basic Internet gateway
  - cable modem
  - Commander
  - LAN
  - network connected devices
  - PBX
  - web inteface
  - web interface
  - wireless Internet access
---
<blockquote cite="http://bash.org/?5273">
  <p>
    &lt;erno&gt; hm. I&#8217;ve lost a machine.. literally _lost_. it responds to ping, it works completely, I just can&#8217;t figure out where in my apartment it is.
  </p>
</blockquote>

I always thought [that bash.org quote][1] was fabricated until just now. I literally lost my router. It was responding to ping, it worked completely (I was using the web inteface), but I had no idea where it was. I looked in the usual place and it was gone!

So I rebooted my cable modem instead (the BigPond connection was &#8220;there&#8221;, just not working. Happens once every month or two.), went to the web interface and reconnected, and all was good.

I *think* it might have fallen somewhere underneath our Commander PBX, but I&#8217;d need to move a not-insubstantial desk full of cables and various IT gear, and risk disconnecting some of the 12 or so network connected devices, in order to see it for sure. Meanwhile, it&#8217;s out of sight and working perfectly!

Working perfectly, that is, as a basic Internet gateway. If we were using its horrible unsecurable (you *can* do MAC based auth, but only if you&#8217;re prepared to enter the MAC addresses of LAN devices, too. I&#8217;m not. It&#8217;s also impossible just to grant wireless Internet access and block off the LAN &#8212; I&#8217;d be perfectly happy leaving the AP wide open if I could do that, because bandwidth should be free. Yeah, whatever, I&#8217;m a &#8216;net commie.) wireless, I imagine reception would be rather poor in that RFI nest! (Assuming it&#8217;s where I think it is)

 [1]: http://bash.org/?5273