---
title: Mountains, reporting and the developers bias
author: Josh Street
layout: post
permalink: /2004/05/22/mountains-reporting-and-the-developers-bias/
categories:
  - Before WordPress
tags:
  - GIF
  - membership applications
  - PHP
  - web developer
  - web developer geeks
---
<http://www.alistapart.com/articles/mountaintop/>

Kind of cool.&nbsp; I&#8217;m still trying to think of a valid application for it, but it&#8217;s undeniably cool.&nbsp; I can&#8217;t see how it would work with any kind of dynamic content, and that&#8217;s the only place it would be justifiable &#8211; if there is static content, use static images which fit with your design, save your masters with layers, and all is good sans special CSS code (which, might I add, is actually more time consuming than manually editing four images if you&#8217;re using layers appropriately) and browser quirks when it comes to standards compliance (although I believe that this particular thing should work on pretty much anything under the sun without any significant problems&#8230; please, feel free to prove me wrong).

If it IS dynamic, and you&#8217;re using a sitewide CSS definition, then, well, you&#8217;re screwed if you ever want to use it for anything else than the purpose for which it was originally defined (i.e. a thematic kind of graphic, such as that&nbsp; &#8211; revealing an application for the potential inclusion of page-specific CSS code (worth looking at, I shall examine that one more closely later, if I remember to), but doing little else.

I wonder if it&#8217;d be possible to use that for really cool graphs with PHP&#8230; thinking of course of using GD and various things to plot points&#8230; I can&#8217;t for the life of me remember if it does GIF output (the only reliable cross-browser image format with transparency &#8211; PNG is technically superior, of course, but a certain [browser][1]&#8230; has issues rendering transparency with it correctly) with transparency.&nbsp; It handles transparency internally (i.e. in processing stages) well enough, though, so graphs could always be overlaid on fancy background images (much the same way as my dynamic news titles simply consist of text with transparency overlaid upon a static background image).&nbsp; And that, of course, nullifies the validity of using CSS for special backgrounds.

This has some interesting applications, especially in the field of traffic reporting, marketing and the like &#8211; the difference between using a simple, default, black on white PowerPoint presentation and a styled, themed, coloured one is, of course, the interest it attracts.&nbsp; Now, graphs can get pretty boring.&nbsp; And editing graphs to put into a document of any kind (I only say PowerPoint because that is something that is on my mind at the minute) can be somewhat tedious &#8211; unless, of course, the graphs come pre-generated and styled appropriately for use with predefined document styles.&nbsp; Which this allows to happen.

Even if it were something as simple as a corporate watermark (i.e. if a web developer was to report on the success of a website or other electronic promotional venture) for use in reports &#8211; GD is well equipped to handle this.&nbsp; Coloured backgrounds, and even images as backgrounds, don&#8217;t require any significant complication of the process.Reports that clients can access without any intervention required, generated on the fly (no month-old data here &#8211; site hits and session lengths and membership applications and whatever else is required may be stored in a database &#8211; this is a concept I had working over 12 months ago, but haven&#8217;t done anything with yet), complete with branding and in accordance with whatever document styles either the client or the development house dictates.

Sound cool?&nbsp; Yeah, only to the web developer geeks out there, and those in marketing.&nbsp; I&#8217;m a fair way from the subject of CSS right now, aren&#8217;t I?&nbsp; Just goes to show, there is more than one way to solve a problem&#8230; my server-side bias has led me be inclined towards this solution.

 [1]: http://www.microsoft.com/windows/ie/