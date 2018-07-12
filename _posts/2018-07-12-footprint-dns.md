---
title: FootprintDNS - what is it for?
author: Josh Street
layout: post
permalink: /2018/07/12/footprint-dns/
categories:
  - Geek
tags:
  - security
  - performance
---

A while back I stumbled across a FootprintDNS host on a few Office 365 services, and wondered what it was up to. A [few](https://techcommunity.microsoft.com/t5/SharePoint/What-is-the-domain-quot-nrb-footprintdns-com-quot/td-p/170502) [others](https://www.reddit.com/r/sysadmin/comments/4y7pxf/footprintdnscom_microsoft_dns_tracking/) were wondering the same. There didn't seem to be an answer out there.

We've been looking into using Azure Traffic Manager for load balancing and in particular their Real User Monitoring feature. In the process of auditing how this works (noting it uses client-side JS), it became clear that it's using the footprintdns.com for tracking.

http://www.atmrum.net/client/v1/atm/fpv2.min.js is worth a read. It uses `.clo.footprintdns.com` subdomains for tracking.

Ostensibly the purpose is to learn about real user latency - which means that anecdotal reports of this service taking a while to load are sensible, and in line with its purpose!

For those wondering if this is blockable, it seemingly would have no impact on end-user experience, but of course in aggregate means your users aren't going to have Traffic Manager balance requests toward lower latency endpoints. Probably not a big issue if you are security conscious.