---
title: 'Sexy stylin&#8217; and page generation insanity'
author: Josh Street
excerpt: "It's all about the stylin' and the speeeeeed!  Well, okay, perhaps not that much speed, or even style, but more than enough for most circumstances..."
layout: post
permalink: /2004/08/28/sexy-stylin-and-page-generation-insanity/
categories:
  - Design
  - Geek
  - Web Standards
tags:
  - Alex King
  - remote server
---
Yeah. The style you&#8217;d see if you were reading this on Saturday, August 28, 2004, would be [*Silver Is The New Black*][1], as featured on Alex King&#8217;s [WordPress CSS Style Competition website][2]. Unfortunately, part of its appeal can be attributed to its use of proprietry Mozilla CSS hooks, which just sucks.

Not because they&#8217;re not nice: they are. But the whole lack of standards compliance (coming from the platform everyone seems to be proclaiming as *the* uber-standards testing platform) is really irritating, regardless as to how well the Mozilla engine might handle established standards. If, in five years time, those &#8220;proprietry&#8221; hooks become used for something else, then we have five-year-old content which is screwed over. Admittedly, -moz-radius isn&#8217;t something which seems very likely to be applied elsewhere, but the principle remains.

So yeah&#8230; It&#8217;s nice and all, but I&#8217;m hacking it back to standards compliance, before making it look DIFFERENT from the original style. To be fair, this style is really only an intermediate step, until I can bang together something which I&#8217;m happy with. And even then, I&#8217;ll probably only be happy with it for a few weeks or months, but hey ;)

On another note, the page generation time on this magnificent piece of software really isn&#8217;t that bad. I haven&#8217;t had an opportunity to test it on a remote server yet, but I&#8217;d say it is DEFINITELY faster than my own blog script even *with* the calendar enabled.

This is being written with WordPress running on my own server, and generation times with the Calendar are averaging 0.037s. With Calendar disabled, this drops to a smooth 0.029s generation average. At any rate, even if I were being pounded with a few thousand hits per second (which, in case you hadn&#8217;t already realised, I&#8217;m not!), the generation times wouldn&#8217;t be substantial compared to the saturation of bandwidth!

I don&#8217;t really think that is a valid argument against WordPress, sorry. Anyhoo&#8230; I&#8217;m off to hack at styles and things!

 [1]: http://www.alexking.org/software/wordpress/styles/sample.php?wpstyle=silver_is_the_new_black "Silver Is The New Black, a sexyish WordPress style"
 [2]: http://www.alexking.org/software/wordpress/styles/sample.php?wpstyle=silver_is_the_new_black "Good stuff, that."