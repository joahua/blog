---
title: Dalegroup.net random images
author: Josh Street
layout: post
permalink: /2004/10/28/dalegroupnet-random-images/
categories:
  - Design
tags:
  - caching
  - Dalegroup.net
  - PHP
---
I just noticed what is (to me) a new feature over at the [Dalegroup.net][1] root website, which loads a random image for each request.<!--more--> It&#8217;s quite stylish; my personal favorite image is number 6, because dead trees are cool! Erm&#8230; yes.

What, you want details? The contrast between the tree and the sky is great, as is the degree of change in lighting (specifically shadow) evident on the tree itself. Perspective is a bit wonky, but as always, it&#8217;s a subjective thing! That, and the crop probably enhances any perspective evident in the original (which I have seen, but don&#8217;t recall all that well).

I&#8217;m tempted to steal this idea, although I have no idea how best to apply it here. Whenever I get around to working up a new style for this website (I&#8217;ve got a sketch, but no time to implement), we&#8217;ll see how best to plagiarise that concept &#8212; which is of course featured on other websites in turn, perhaps most notably [Photo Matt][2].

One thing I&#8217;ll bear in mind, and would perhaps recommend Michael looks at, is keeping the filesize of the images right down, to the extent that load times aren&#8217;t consequential to *any* users &#8212; this is far more important when displaying images as CSS backgrounds, because there *aren&#8217;t any placeholder graphics* displayed in user agents by default, so users won&#8217;t wait for them to load! Another suggestion more immediately applicable and concrete is that instead of generating a new stylesheet from <acronym title="PHP: Hypertext Preprocessor">PHP</acronym>, thus completely killing browser caching (half of the advantage of <acronym title="Cascading Style Sheets">CSS</acronym>), you have a single CSS file and use inline styles, or the `style` attribute with a specific tag, to specify your custom backgrounds.

Aside from that, it&#8217;s snazzy!

 [1]: http://www.dalegroup.net/
 [2]: http://photomatt.net