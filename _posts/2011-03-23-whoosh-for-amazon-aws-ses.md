---
title: Whoosh for Amazon AWS SES
author: Josh Street
layout: post
permalink: /2011/03/23/whoosh-for-amazon-aws-ses/
categories:
  - General
tags:
  - Amazon
  - aws
  - os x
  - ses
  - software
  - the escapers
  - whoosh
---
[<img src="http://josh.st/blog/wp-content//2011/02/whoosh.jpg" alt="Whoosh for AWS" title="Whoosh for AWS" width="700" height="527" class="alignnone size-full wp-image-1673" />][1]

After spending a day and a bit last week hacking together a simple mailer (with merge capabilities) for Amazon&#8217;s [Simple Email Service][2] (it&#8217;s really pretty simple) it struck me that there must be a better way to do this. I toyed with launching a web app for others to use to simply accomplish the same thing, but figured someone, somewhere, must&#8217;ve already done something substantially similar.

Turns out [they have][1]. Perfect.

For us, SES was a great way to send once-off personal mail beyond the volume that our Apps for Domains accounts permit. The biggest downside was Amazon&#8217;s rate limiting &#8212; something that still applies for this app.

This app would&#8217;ve made the process a lot quicker, though I&#8217;m not sure of its value for regular list emailing &#8212; which seems to be how they&#8217;re marketing it. You&#8217;re not just paying to send emails with MailChimp/Campaign Monitor &#8211; you&#8217;re paying for deliverability and list management. AWS give you the deliverability side (at least, that was our experience) but do nothing to help you with unsubscribes, updates, and tracking.

That said, if I&#8217;d found this a week ago&#8230;

 [1]: http://www.theescapers.com/whoosh/index.html
 [2]: http://aws.amazon.com/ses/