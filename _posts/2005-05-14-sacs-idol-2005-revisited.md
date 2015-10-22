---
title: SACS Idol 2005 revisited
author: Josh Street
layout: post
permalink: /2005/05/14/sacs-idol-2005-revisited/
categories:
  - AV
  - Geek
tags:
  - Aaron
  - Ben
  - Guy
  - Jack Wright
  - SMS
  - Steve
  - Tribute
---
<p>It was good.  Better-than-last-year good, but that was sort of anticipated.  There were 19 performers all up, ranging from skits to musical performances to stand-up comedy to political-campaign style baby wielding.</p>
<p><a href="/blog/wp-content/2005/05/imgp1291letterbox.jpg"><img src="/blog/wp-content/2005/05/imgp1291crop.jpg" alt="Photo of a performance" /></a></p>
<p>The voting was a success, with about 160 people throwing in their voice &#8211; but primarily just via standard voting terminals, with SMS voting not being heavily used.  I don&#8217;t think it was the result of people&#8217;s hesitance to use SMS, but rather incorrect promotion &#8211; the programme should have featured SMS codes for all acts, as well as instructions on how to vote on the back cover.   We were going to do a brief &#8220;how to vote&#8221; video, but ran out of time to cut it together, which also didn&#8217;t help things.</p>
<p>The ticketing system was also partially to blame &#8211; there were two types of ticket; standard voting tokens (for use at the terminals) and SMS tickets, which featured a unique code.  More than a few audience members were looking for the non-existant SMS code on their ticket &#8211; more signage outside was required, and I didn&#8217;t get a chance to talk to the ticket sellers, so it&#8217;s possible they weren&#8217;t asking people how they&#8217;d like to vote.</p>
<p>Anyway, SMS voting was barely used, but needed a query that was stupidly complicated to figure out who voted for what (at least compared to last year&#8217;s system).  I hadn&#8217;t thought about how the votes would be returned that hard, thinking I&#8217;d be able to quickly cook up some SQL to do it, as per last year&#8230; so at about 4pm (<abbr title="Front of House">FOH</abbr> opened at 6:30pm) I realised that it was a little more complicated than anticipated, and I made a slightly-anxious phone call to <a href="http://www.bluetrait.com/">Michael</a>, who managed to cook up the following <em>over the phone</em>.</p>
<p><code>SELECT participants.name, count( votes.For_ID ) AS count<br />
FROM participants<br />
LEFT JOIN votes ON participants.ID = votes.For_ID<br />
GROUP BY participants.ID<br />
ORDER BY `count` DESC </code></p>
<p>Dale, you&#8217;re a freak, but thankyou!</p>
<p>Learning how to use LEFT JOIN is now high on my to-learn list.</p>
<p>Anyway, the results themselves were wonderfully controversial &#8211; the winner was <em>The Aaron Carter Tribute Band</em>, of Year 11, which was in direct competition with <em>The Backstreet Toys</em> of Year 12 all night &#8212; and <em>Backstreet Toys</em> came in second place with just <strong>one vote</strong> between them!</p>
<p>Third place was <em>Jack Wright</em>, who was a mere three votes from the winner &#8211; and all three were leap frogging each other for the duration of the voting period.  Exciting stuff to watch!</p>
<p><img src="/blog/wp-content/2005/05/05results.jpg" alt="SACS Idol results chart" /></p>
<p>Thanks to all who went on the night, you helped raise over $700 for <a href="http://www.assistancedogs.org.au/">Assistance Dogs</a>, and hopefully had a lot of fun in doing so!  Special thanks also to <a href="http://www.cat-man.info/">Ben</a> for his ability to keep driving in the small hours of the morning, to <a href="http://www.swylie.com/">Steve</a> and <a href="http://www.lucidien.com/">Guy</a> for coming back and cooking up vision, and to <a href="http://www.digihire.com.au/">Digihire</a> for reduced-rate hire of a MX-50 vision mixer!</p>
<p><img src="/blog/wp-content/2005/05/visionvotingdesk.jpg" alt="Vision and voting control desk" /><br />
<img src="/blog/wp-content/2005/05/imgp1289crop.jpg" alt="Two guitarists/singers onstage" /></p>
