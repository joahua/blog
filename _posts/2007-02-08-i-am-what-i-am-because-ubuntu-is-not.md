---
title: I am what I am because Ubuntu is not
author: Josh Street
layout: post
permalink: /2007/02/08/i-am-what-i-am-because-ubuntu-is-not/
categories:
  - Geek
  - Open Source
tags:
  - CentOS
  - file server
  - FreeBSD
  - media server
  - named-operating systems
  - North American Upstream Provider All In Title
  - operating systems
  - RAID
  - RAM
  - real dedicated server
  - sydney
  - Ubuntu
  - web dumping
---
I got sick of wanky pseudo-African named-operating systems.

Actually, that&#8217;s a lie, but I&#8217;m feeling a little vitriolic (oxymoron?). Ubuntu didn&#8217;t work at all, and of a sudden CentOS did. It&#8217;s not quite as polished but I could grow to love it (maybe). I just need to look past this whole RPM thing, which really is ugly compared to the breadth and depth of apt options available. IMO, of course. And the whole ports gig just scares me so I&#8217;m gonna stay away from FreeBSD here for a while longer (until this one breaks in another two years?)

I&#8217;d forgotten how much work I&#8217;d put into making Samba shares behave as well as they had been for the last forever, too. And was convinced there was nothing of value left on the computer (I didn&#8217;t delete the home directories, just in case&#8230; that was really easy because they&#8217;re even on a physically separate volume, it was basically less effort to just leave them there) and consequently (yet again) deleted a MySQL database with StuffOfValueâ„¢ in it. In this case a CYIADA survey database I&#8217;d built because there were no other options available and (you probably guessed it) I hadn&#8217;t sorted out hosting by IT at work yet.

So the aim now is to setup a similarly solid server that&#8217;ll last me another two years, barring hardware upgrades (this thing desparately needs more RAM even though it&#8217;s got half a gig&#8211;I have no idea where it all goes). This time around it&#8217;ll be more web-production-esque in its role, which basically means it&#8217;ll have more than just being a quiet Samba PDC and file server and web dumping ground on its plate, at least until everything I&#8217;ve got planned for it today reaches maturity, or my situation changes to the point that paying for a VPS or real dedicated server somewhere else is a viable option. [Loki][1] does, indeed, work quite well, but I can&#8217;t screw with it quite as much as some things make me want to (not that I&#8217;d want to do that to Loki&#8230; in between catastrophic hardware failure it&#8217;s amazingly stable and the lack of general screwing-around-ness is probably a big part of that! Probably&#8230; :P)

No aspirations surrounding the idea of a media server this time around. Though there&#8217;s a possibility I&#8217;ll look at maybe building a terabyte RAID server later this year, which would mean rethinking whisper&#8217;s role somewhat. It&#8217;d probably be relocated to downstairs (it&#8217;s cooler there) and replaced by a case with better ventilation and *requiring* better ventilation. The EPIA board I&#8217;ve got isn&#8217;t passively cooled, but I reckon it can deal with getting toasty that much more because it&#8217;s got a fan stuck to it. It&#8217;s a borderline fan requirement, anyway &#8212; the hard drives get hotter than the processor (highest I&#8217;ve seen the drives is about 62Â° C, the processor would only hit 55, tops) on forty-something degree Sydney days. If the storage upgrade is called for I&#8217;d probably look at getting something with a bit more grunt though, just because if the space requires better ventilation then that lets me stop constraining the system power according to temperature!

Anyway. Now I&#8217;m a CentOS kid. Which makes me feel kinda dirty inside because of the whole Prominent North American Upstream Provider All In Title Case issue, but I think I can live with myself for the time being.

 [1]: http://loki.lttd.net/