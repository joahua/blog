---
title: WebGL ready for primetime
author: Josh Street
layout: post
permalink: /2011/11/12/webgl-ready-for-primetime/
categories:
  - General
---
A [particularly timely][1] email went around the office this morning about WebGL and 3D animation.

All in all, it&#8217;s pretty depressing for us &#8211; but we&#8217;re on 2.5-3 year old hardware in some cases so the next generation won&#8217;t have the same issues. In fact, today&#8217;s [mobile devices][2] would probably demolish the desktops of yesteryear.

> **From:** Sam  
> **Sent:** Thursday, 10 November 2011 9:02 AM  
> **To:** Web Developers Frontend-DL  
> **Subject:** Three.js &#8211; 3D Animation in jQuery
> 
> The Web GL examples may not work if you have an older computer. I tried them at home â€“ pretty cool.  
> <http://mrdoob.github.com/three.js/>
> 
> This one is particularly cool  
> [http://alteredqualia.com/three/examples/webgl\_terrain\_dynamic.html][3]
> 
> Sam
> 
> **From:** Fiona  
> **Sent:** Thursday, 10 November 2011 9:09 AM  
> **To:** Sam; Web Developers Frontend-DL  
> **Subject:** RE: Three.js &#8211; 3D Animation in jQuery
> 
> :(
> 
> <img class="alignnone size-full wp-image-1717" src="http://josh.st/blog/wp-content/2011/11/browser-support.png" alt="Browser support - your graphics card doesn't work" width="598" height="137" />
> 
> **From:** Josh Street  
> **Sent:** Thursday, 10 November 2011 9:14 AM  
> **To:** Fiona; Sam; Web Developers Frontend-DL  
> **Subject:** RE: Three.js &#8211; 3D Animation in jQuery
> 
> Doh.
> 
> <img class="alignnone size-full wp-image-1716" src="http://josh.st/blog/wp-content/2011/11/vpu-recover.png" alt="VPU recover prompt" width="435" height="319" />
> 
> **From:** Sam  
> **Sent:** Thursday, 10 November 2011 9:18 AM  
> **To:** Web Developers Frontend-DL; Anton; Darian  
> **Subject:** Three.js &#8211; 3D Animation in jQuery
> 
> Safe to assume it&#8217;s not ready to go mainstream just yet.
> 
> Imagine IE6 trying to deal with it&#8230;

IE6 is probably not relevant anymore, but the real issue is IE7-9. On the basis of something that&#8217;s mostly software related &#8211; whether at a level of browser support for different graphics cards, or a user&#8217;s access to a particular browser at all &#8211; we&#8217;re inhibited from deploying particularly cool/useful technologies.

This is an old story. Users take too long to upgrade.

The difference here is that, post Windows XP, upgrades aren&#8217;t being held back by hardware or platform anymore. Performance has plateaued across desktops as integrated graphics are &#8220;good enough&#8221; for many applications (see system-on-a-chip mobile solutions where CPU and GPU are tightly &#8211; and beneficially- integrated) and discrete graphics are blazingly quick.

I was surprised to discover that the much-hyped Skyrim would purportedly run at high detail on my 18-24ish month old desktop. Caveat &#8211; I&#8217;m a bit of a hardware geek and probably over-specced (in terms of gaming) when it was built, but it cost under $1000 once you exclude all the hard drives (video editing box&#8230; before I switched to OS X). It&#8217;s still (apparently) getting incredible performance by today&#8217;s standards. This doesn&#8217;t speak to a lack of innovation &#8211; though it probably says something about the self-cannibalising properties of that industry.

&#8220;Oops, my PC is too fast&#8221; probably remains an uncommon complaint. Still, I&#8217;d contend that for many users, perceived speed will become less of an issue over the next upgrade cycle. Form factor (Macbook Air), low latency (SSDs) and portability (tablets) are the key competitive fronts today and will continue to be. For web technology, this means that we can innovate with confidence where performance is concerned.

The blocker is software.

For now, the trend appears to be targetting applications at particular select user agents to the exclusion of others. WebGL is a great example of this insofar as it doesn&#8217;t have a neat fallback option as tools like [RaphaÃ«l][4] do with VML. Fundamentally, this may be no different to [nested video embedding][5] that differs on the basis of browser capabilities. In practice, few will seek to implement equivalent functionality or design 2D experiences to match rich WebGL ones &#8211; it&#8217;s just too complex.

The real winner in all this is mobile, which has a reasonably broad support for hardware accelerated web experiences.

 [1]: http://blogs.adobe.com/flashplatform/2011/11/flash-to-focus-on-pc-browsing-and-mobile-apps-adobe-to-more-aggressively-contribute-to-html5.html "Flash crawls off into the darkness"
 [2]: http://www.theverge.com/2011/11/9/2546597/nvidia-tegra-3-launch-quad-core-kal-el
 [3]: http://alteredqualia.com/three/examples/webgl_terrain_dynamic.html
 [4]: http://raphaeljs.com/
 [5]: http://camendesign.com/code/video_for_everybody