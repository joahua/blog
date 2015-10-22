---
title: My Quasi-static IP
author: Josh Street
layout: post
permalink: /2005/10/01/my-quasi-static-ip/
categories:
  - Geek
tags:
  - broadband
  - DNS
  - DNS system
  - Telstra
---
So, I use a [Dynamic DNS][1] service to point the CNAME alias record home. on this domain to, surprisingly enough, my home Internet connection with Telstra BigPond (or puddle, whatever).

I&#8217;m using a Dynamic DNS service instead of just setting up an A record (much simpler, plus that would mean I could have a catchall on the domain&#8230; my current DNS host &#8212; also my registrar, [Joker.com][2] &#8212; doesn&#8217;t like wildcard CNAME records, though) because, theoretically, my plan only has a dynamic IP address prone to changing at any given moment. Dynamic DNS services really should only be used by people with dynamic IP addresses, for a number of reasons&#8230; the most obvious one being that they are designed to change, and expire if you don&#8217;t let them. (At least with DynDNS, which is pretty excellent for the price&#8230; free.)

With this in mind, I received this message today:

> A hostname you have registered with Dynamic Network Services at DynDNS, sn0239410.dnsalias.net, with current IP address 60.225.85.25, will expire in the next 5 days. This expiration is due to an automatic timeout; your host has not been updated for 30 days, and hosts are removed after not being updated for 35 days. This is our policy to prevent a stagnant DNS system. Users with static IP addresses can use the Static DNS system, which does not have this timeout.

There&#8217;s more, I just can&#8217;t be bothered repeating it here.

That&#8217;s the fourth time I&#8217;ve read that paragraph in separate messages. That exact paragraph. Yeah, not even the IP changed.

To give that some time scale, see the quoted portion above: &#8220;hosts are removed after not being updated for 35 days&#8221;. I&#8217;ve manually touched my subdomain&#8217;s record once every 35 days or thereabouts for the last four months. Before that, the same situation existed, but then only for three months. Before that? Two. (And before *that* was iiNet, back in the day, and that doesn&#8217;t really bear commenting&#8230; every time your modem disconnected you&#8217;d get a new IP, and sometimes more often! Though it seems to have improved since&#8230;)

Seems to me as though Telstra is slowly and quietly making its dynamic IPs more and more static as broadband adoption picks up. So, Telstra, when are you giving us (mere plebs) [IPv6][3]?

 [1]: http://dyndns.com/
 [2]: https://joker.com/
 [3]: http://vee-six.telstra.net/