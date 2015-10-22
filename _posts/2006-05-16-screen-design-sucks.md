---
title: Screen Design Sucks
author: Josh Street
layout: post
permalink: /2006/05/16/screen-design-sucks/
categories:
  - Design
  - Usability
  - Web Standards
tags:
  - BBC
  - Felix Miata
  - main concern
  - not-originally-designed/written-for-web material
  - PDA
  - Web design
---
In my copious amounts of spare time, I&#8217;ve been contemplating redesigning this site. And disliking the fact that screens are different sizes.

Maybe it&#8217;s just that the sites I&#8217;ve spent the most time building with CSS at Raw Ideas have been sufficiently indifferent to anything less than 1024&#215;768. Or that the content of these sites is so disposable that sustainability isn&#8217;t really a great concern. Either way, I know what I should be doing in terms of design, then I&#8217;m aware of what is being done for various reasons, and they&#8217;re not matching up.

For this site, I&#8217;ve got a design concept lined up&#8230; my only concern is execution of that.

[Felix Miata][1] is an absolute legend by whom I find myself constantly pursuaded (though not always, for various reasons&#8211;mostly professional/design inhibition/the culture of superficiality-over-function so prevalent in web design&#8211;, able to follow), and he&#8217;s built this [really compelling example of why not to use fixed-width/px-based layouts][2]. I don&#8217;t think he particularly cares about design, and comes across somewhat like RMS does in his fanatical advocacy of a particular approach to styling web pages.

Only, unlike Stallman, his agenda is not some arbitrary and often unrealistically-founded ideology (yeah, I&#8217;m trolling. Go on, rant. Stallman can&#8217;t see past his own version of open-source, and his attitudes provide no realistic migratory path from closed- to open-source solutions; such zero-tolerance rejects the pattern that *has* become established in IT, so there&#8217;s no point in moronic reminscences of a time when there were only twenty people in the world using computers and they all shared, yada yada yada. No one cares.) but a practical NEED and independently corrolated evidence regarding people&#8217;s desires for larger text on websites.

So the text is staying big here. But that&#8217;s a given (well, at least on this site&#8230; I&#8217;m trying to sway other places, and the best I&#8217;ve got thus far is text-resizing styleswitcher controls on a design I got handed last week. Usability will prevail! Gosh that sounded like the government propaganda guy from *V for Vendetta*. Ah well. This post is now officially very digressive!), not my main concern.

No, my main concern is this site winding up looking like the BBC&#8217;s does on enormous screens (see Felix&#8217;s page linked to above). I&#8217;m a fan of whitespace as much as the next guy, but 800&#215;600-wide on a 2000-pixel wide screen just doesn&#8217;t do it for me.

And, going the other direction, I just bought a mobile/PDA which means I&#8217;m now going to be designing mobile stylesheets as well (at least I have that option!) for a 320-pixel wide screen. All new challenges.

Fluid layouts are all dandy until you introduce graphics.

Here, I&#8217;ve got a policy of editorial graphics (i.e. pretty much everything except photos that exist outside of blog context/are linked to as files denoted as full resolution) not exceeding an inviolable maximum of 700 pixels. This is, in my thinking, not negotiable. I&#8217;m building for an 800px wide minimum, which means a main-content column width of 760px tops.

Plus I can get away with lots more in terms of editing photos from my excellent-except-for-in-low-light-as-most-consumer-digital-cameras-are camera when the publication requirement is kept low. I like to fill the column with colour as much as possible in a vain attempt to balance out the ([comparatively voluminous][3]) amounts I write&#8230; I&#8217;ve started to use the &#8220;Read more&#8221; functionality again for publishing essays and other not-originally-designed/written-for-web material (where PDF equivalents are available), in order to hide fulltext from the front page. You&#8217;ll note that on [the second of today&#8217;s Cymbeline posts][4].

So, I&#8217;m torn between keeping everything narrow and keeping control, or, well, not.

Centred layouts, when done properly, cater even for people with StupidlyLargeScreensâ„¢. They&#8217;ll probably be using 120dpi fonts to start with, which makes things reasonable even at &#8220;Normal&#8221; font size. IE will go up two more steps&#8230; every other browser well beyond that. That&#8217;s probably reasonable. The &#8220;challenge&#8221; to me there is simply to size the centred layout in em&#8217;s, so that scales as well. My greatest concern is that I *cannot* style images to fill a set percentage of their parent element (scaling appearances don&#8217;t, for the most part, concern me&#8230; this is mostly pulled off without too much damage if the difference is slight), because of vast amounts of legacy content. I think specifically of instances where I&#8217;ve floated images that exist purely to support the article, not providing any great amount of content in their own right&#8230; these images are usually from 200 to 400 pixels in width, and often sit adjacent to text. Refer to *Cymbeline* example again for an instance in which images are helpful and effective, but it would be foolish to style them globally.

Legacy content is the reason this can&#8217;t be achieved&#8230; I *could* conceivably go throughout every one of the just-shy-of-1000 posts on this blog (in other milestones, we had a second birthday three days ago) and add classes as appropriate. But I won&#8217;t.

My (final, because I need sleep) concern with scaling layouts is using background images in CSS, which *don&#8217;t* scale, and can&#8217;t be sized in percentages unless you do stupid things with redundant markup (non-semantic IMG tags) and abuse z-indexes to the more worn edges of sanity.

It all comes down to loss of artistic control. I embraced that with the present design, which I&#8217;m well aware people say looks like crap. You know, I don&#8217;t mind hearing that. The fact remains, it&#8217;s probably the most functional design I&#8217;ve ever built.

That said, I&#8217;m off to get my hands dirty with some ink.

 [1]: http://mrmazda.no-ip.com/
 [2]: http://mrmazda.no-ip.com/SS/bbcSS.html
 [3]: http://www.bluetrait.com/archive/2005/09/01/month-post-/
 [4]: /blog/2006/05/16/essay-iachimo-imogen-and-cymbelines-denouement