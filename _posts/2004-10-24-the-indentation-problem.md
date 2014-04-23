---
title: The Indentation Problem
author: Josh Street
excerpt: 'Plagued by horrific markup, we set out to find a better way to format poetry, and anything else that needs indentation of one kind or another.  An answer is found, but the Snark is still not captured...'
layout: post
permalink: /2004/10/24/the-indentation-problem/
categories:
  - Web Standards
---
I&#8217;ve posted a question along the lines of what follows below (indeed, some is copied verbatim) to the [WSG][1] mailing list, so apologies if you&#8217;ve seen this already.<!--more-->

Basically, there&#8217;s text which requires indentation in order to be true to the original form in which it was written, or simply for the purpose of legibility. The example I&#8217;ve used to demonstrate this is the first stanza of Lewis Carroll&#8217;s *The Hunting of the Snark* (a poem).

You can use CSS to indent text with padding and whatever else, but that&#8217;s a pain if you have a sitewide CSS file, and the text to be indented isn&#8217;t usually sitting in any defining container (be that a div element, or whatever else)

&#8212;  
Example 1:

â€œJust the place for a Snark!â€ the Bellman cried,
        As he landed his crew with care;
Supporting each man on the top of the tide
        By a finger entwined in his hair.

may be marked up as a single paragraph (as it corresponds to a single stanza of a poem &#8212; in this case, the first stanza of Louis Carroll&#8217;s &#8220;The Hunting of the Snark&#8221;, just for a random example.) as follows:

&lt;p&gt;â€œJust the place for a Snark!â€ the Bellman cried,&lt;br /&gt;
        As he landed his crew with care;&lt;br /&gt;
Supporting each man on the top of the tide&lt;br /&gt;
        By a finger entwined in his hair.&lt;/p&gt;

&#8212;

As line break tags &#8220;<br />&#8221; are self-closing elements, I don&#8217;t *think* it is possible to style with them (e.g. to indent the relevant lines) &#8212; and, even if it were, it would be an ugly solution (assuming I&#8217;m even thinking along the right lines, and that it would work at all):

&#8212;  
Example 2:

&lt;p&gt;â€œJust the place for a Snark!â€ the Bellman cried,&lt;br class="indent" /&gt;
        As he landed his crew with care;&lt;br /&gt;
Supporting each man on the top of the tide&lt;br class="indent" /&gt;
        By a finger entwined in his hair.&lt;/p&gt;

&#8212;

Assuming the style would apply to the following, and not preceding, line. This example is untested, and would most likely not work at all. I&#8217;m just thinking out loud.

One potential solution (albeit a hideous and bloated one) is simply to use repeated non-breaking space characters:

&#8212;  
Example 3:

&lt;p&gt;â€œJust the place for a Snark!â€ the Bellman cried,&lt;br /&gt;
&nbsp;&nbsp;&nbsp;As he landed his crew with care;&lt;br /&gt;
Supporting each man on the top of the tide&lt;br /&gt;
&nbsp;&nbsp;&nbsp;By a finger entwined in his hair.&lt;/p&gt;

&#8212;

but that, of course, probably isn&#8217;t the most desirable solution.

In terms of light markup (but of dubious semantic appropriateness), I&#8217;ve seen definition lists employed to this end quite effectively:

&#8212;  
Example 4:

&lt;dl&gt;
        &lt;dd&gt;â€œJust the place for a Snark!â€ the Bellman cried,
                &lt;dl&gt;
                        &lt;dd>As he landed his crew with care;&lt;/dd&gt;
                &lt;/dl&gt;
        &lt;/dd&gt;
        &lt;dd&gt;Supporting each man on the top of the tide
                &lt;dl&gt;
                        &lt;dd>By a finger entwined in his hair.&lt;/dd&gt;
                &lt;/dl&gt;
        &lt;/dd&gt;
&lt;/dl&gt;

This renders without any problems in visual user agents without styling required, and is apparently valid XHTML &#8212; but it seems dubious to me. It appears structurally better, at least to me (my eyes follow the markup flow more easily than the other examples above), but that doesn&#8217;t deal with the issue of semantics.

[Neerav][2] recommended the use of `blockquote` elements to markup indentation, which I think is about as semantically correct as using definition lists, and said as much in another email:

> In the HTML4 recommendation (<http://www.w3.org/TR/REC-html40/struct/text.html#h-9.2.2>), the semantic meaning of blockquote and q is defined as being for quotations. That&#8217;s okay &#8212; for the purpose of the example I used, at least. If I were to reproduce the whole 8 fits of the poem, then it ceases to be a quotation, and begins to be a work in its own right&#8230;
> 
> &#8230;[this website] demonstrates the use of a blockquote element, with styling appropriate to the purpose (or at least, my understanding of the purpose of the element at the time I developed the CSS file). Imagine if I were to attempt to apply that to the example below&#8230; [Lewis Carroll's poem] &#8230;I&#8217;d have a mess.

Admittedly, if I defined a class for blockquotes in my <acronym title="Cascading Style Sheet">CSS</acronym> file, and specified this class for relevant `blockquote` elements, then I could achieve my purpose visually &#8212; but I&#8217;m still stuck out in a semantic hole.

So far, we&#8217;ve got a whole bunch of solutions, none of which are really any better than the others. I was nearly resigned to the fact that there were no semantically-correct ways in which to mark indented poetry up! Now is as good a time as any to remark that this is (in the case of most poetry) *purely* presentational, and I&#8217;m being pedantic in looking for a solution. Having said that, this is twice in two days now I&#8217;ve wanted to be able to indent content on this website properly, and haven&#8217;t been able to.

[Mordechai Peller][3] shares his thoughts on the issue, providing significant insight into the problem at hand, and ultimately a working solution. His response is reproduced in part as follows:

> Joshua Street wrote:  
> >Is it okay to use definition lists like this at all?
> 
> I wouldn&#8217;t say a dl is totally out out place here, as there is quite a  
> bit of flexibility in where a dl is proper, but I think here it is a bit  
> of a stretch. But were you to use it, it should be done like thus:
> 
> &lt;dl&gt;
    &lt;dt&gt;"Just the...&lt;/dt&gt;
    &lt;dd&gt;As he...&lt;/dd&gt;
    &lt;dt&gt;Supporting...&lt;/dt&gt;
    &lt;dd&gt;By a....&lt;/dd&gt;
&lt;/dl&gt;
> 
> >Or, better still, does someone have another solution which I&#8217;ve missed completely?  
> With XHTML2 ans CSS3 this would be much easier. XHTML2 has the &lt;l&gt; tag,  
> though I suppose a &lt;span&gt; can sit in its stead. The lack of CSS3, where  
> you could select each (2n) lines (I forget the exact syntax), or even  
> full implementation of CSS2, is more of a problem. Since you need to  
> work with what&#8217;s available, how&#8217;s about:
> 
> &lt;p class="stanza"&gt;
    &lt;span class="lineA"&gt;"Just the...&lt;/span&gt;
    &lt;span class="lineB"&gt;As he...&lt;/span&gt;
    &lt;span class="lineA"&gt;Supporting...&lt;/span&gt;
    &lt;span class="lineB"&gt;By a....&lt;/span&gt;
&lt;/p&gt;
> 
> or:
> 
> &lt;p class="stanza"&gt;
    "Just the...
    &lt;span class="lineB"&gt;As he...&lt;/span&gt;
    Supporting...
    &lt;span class="lineB"&gt;By a....&lt;/span&gt;
&lt;/p&gt;
> 
> or:
> 
> &lt;p class="stanza"&gt;
    &lt;span&gt;"Just the...
    &lt;span&gt;As he...&lt;/span&gt;&lt;/span&gt;
    &lt;span&gt;Supporting...
    &lt;span&gt;By a....&lt;/span&gt;&lt;/span&gt;
&lt;/p&gt;
> 
> or:
> 
> &lt;div class="stanza"&gt;
    &lt;p&gt;
        "Just the...
        &lt;span&gt;As he...&lt;/span&gt;
    &lt;/p&gt;
    &lt;p&gt;
        Supporting...
        &lt;span&gt;By a....&lt;/span&gt;
    &lt;/p&gt;
&lt;/div&gt;
> 
> or even:
> 
> &lt;p class="stanza"&gt;
    &lt;span&gt;"Just the...&lt;br /&gt;
    As he...&lt;/span&gt;
    &lt;span&gt;Supporting...&lt;br /&gt;
    By a....&lt;/span&gt;
&lt;/p&gt;
> 
> with:
> 
> p {
   padding-left : 2em;
}
span {
   text-indent : -2em;
   display : block;
}
> 
> This is one of the few places where a &lt;br /&gt; is semantic.
> 
> I&#8217;m sure there are more possibilities, but this is what I came up with.

As you can see, he had more than a handful of suggestions, which were quite workable. I&#8217;ve got significant issues with most of them, though, because all but the last solution (marked in red) *would not render correctly* as unstyled content. This ceases (at that point) to be a purely presentational issue &#8212; the markup simply doesn&#8217;t reflect the line (foot structure, meter, etc.) as composed by the poet. And, at this point it is necessary to point out that accessibility isn&#8217;t just about non-sighted users &#8212; it&#8217;s also about graceful failure in browsers which don&#8217;t support every feature the developer may desire. This means Internet Explorer, it means Netscape 4, it means screen readers and it means users who choose to browse with either stylesheets or images disabled, for whatever reason.

The only reason consecutive `span` tags as in the example would function is because of the <acronym title="Cascading Style Sheet">CSS</acronym> information which specifies `display: block;`. As soon as you disable styles, your content begins to be displayed inline (as `span` tags will behave by default), and the structure of the poem (or whatever other text) disappears.

With the last example, the line break tag preserves standard formatting without requiring any degree of styling. The indentation disappears, but that doesn&#8217;t leave us in any worse a situation than when we began.

So, there we go. A semantic solution! Go forth and use it, or something. I&#8217;ll be working it into my style sheets here at some point, and using it as required.

 [1]: http://webstandardsgroup.org/
 [2]: http://www.bhatt.id.au/blog/
 [3]: http://www.pellerweb.com/