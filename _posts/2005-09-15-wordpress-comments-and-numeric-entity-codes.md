---
title: WordPress comments and numeric entity codes
author: Josh Street
layout: post
permalink: /2005/09/15/wordpress-comments-and-numeric-entity-codes/
categories:
  - Geek
  - Web Standards
tags:
  - HTML
  - Matt Mullenweg
  - Matt Thommes
---
I received an email from [Matt Thommes (matthom)][1] today, regarding his comments on a post not showing up as [he&#8217;d commented a few days back][2]. I thought that was odd, because I don&#8217;t think I&#8217;ve ever moderated one of his comments &#8212; they&#8217;re perpetually relevant and on topic, or just said in good fun with taste &#8211;, and people who have posted here previously should be automatically authenticated and allowed to post.

His problem arose, he says, when trying to include certain character entities, or when posting twice on the same topic. I think I&#8217;ve misproved the twice-on-same-comment thing, but the entity concern is valid &#8212; when using numeric entity codes. (Those are the ones that take the form &#xxxx; where xxxx is a number)

There&#8217;s not much documentation on this, but it would appear it&#8217;s an inherent WordPress anti-spam procedure, lest spammers encode their entire message in this way (that would have negligible SEO benefit, but carefully crafted messages can entice users, and the ease of distribution means that the chance of *someone* clicking through makes it worthwhile, for them) and thus avoid detection.

In fact, the only near-official word I could find on the matter was [this comment on Matt Mullenweg&#8217;s (WP lead developer) weblog][3], in which he states:

<blockquote cite="http://photomatt.net/2005/07/05/xml-rpc-vulnerability/#comment-22165">
  <p>
    I do block comments with numeric entities lower than a certain number.
  </p>
</blockquote>

Whether or not this holds true for the WordPress platform as a whole, I can&#8217;t say conclusively &#8212; though it seems that&#8217;s the symptom, here.

In Matthom&#8217;s case, the concern was marking up an HTML tag for display [in a comment][4] &#8212; using entity codes &#60; (<) and &#62; (>).

I usually use < and > for this purpose, so I hadn&#8217;t noticed the problem until now. That works fine, but I think WordPress deleting this outright is a little extreme&#8230; Not entirely sure what the problem is here.

 [1]: http://matthom.com/
 [2]: /blog/2005/09/10/digging-a-tunnel-through-the-earth#comment-4836
 [3]: http://photomatt.net/2005/07/05/xml-rpc-vulnerability/#comment-22165
 [4]: /blog/2004/10/24/the-indentation-problem#comment-4956