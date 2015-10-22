---
title: CMYK thumbnailing of JPEGs with Gmail/Google Mail
author: Josh Street
layout: post
permalink: /2009/09/16/cmyk-thumbnailing-of-jpegs-with-gmailgoogle-mail/
categories:
  - General
tags:
  - attachment
  - bug
  - cmyk
  - Design
  - gmail
  - Google
  - IMAP
  - JPEG
  - jpg
  - PIL
  - Python
  - rgb
---
I periodically freak out when reviewing emails that I&#8217;ve sent, particularly to printers, using Gmail&#8217;s (hosted apps) webmail interface. It has this habit of converting CMYK JPGs to RGB thumbnails really badly &#8211; but without apparent corruption.

<img class="alignnone size-full wp-image-1614" title="Gmail getting CMYK thumbnails wrong" src="http://josh.st/blog/wp-content//2009/09/gmail-cmyk.jpg" alt="Gmail getting CMYK thumbnails wrong" width="380" height="265" />

The blue in the image above is actually a deep red!

Accordingly, while the colours are totally out of whack, there are no other artifacts in the image. Normally this just looks weird &#8211; sometimes, in the case of logo variants, it looks plausible but utterly incorrect! My guess is they&#8217;re using an older version of [PIL][1] (we all know how much Google loves Python) prior to [this March 2009][2] patch. Sounds like the same phenomenon.

Still, those people emailing CMYK JPGs has to be a little bit niche, so I&#8217;m not heaps hopeful of this getting fixed too soon! The main reason I care is because web interfaces are so much faster than retrieving large attachments from IMAP stores.

 [1]: http://www.pythonware.com/products/pil/
 [2]: http://mail.python.org/pipermail/image-sig/2009-March/005519.html