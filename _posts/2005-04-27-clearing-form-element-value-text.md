---
title: Clearing form element value text
author: Josh Street
layout: post
permalink: /2005/04/27/clearing-form-element-value-text/
categories:
  - Usability
tags:
  - search box
  - Search engine
---
I just realised I hadn&#8217;t implemented this on my website yet, so I just remedied that situation. Due to workloads at the minute I&#8217;m not getting time to write lots here, so I thought I&#8217;d just share this snippet quickly.

It&#8217;s a good practice for search forms to include some text (the `value` attribute) so that users can know what they&#8217;re for, even if it&#8217;s apparently self explantory. On this website, the search box at time of writing lacks any label at all except for the text denoting &#8220;search&#8221; in the box. This is all well and good, up until the time someone wants to actually search for something. They can&#8217;t just click the field and type the query and bang return; they need to ensure they select the contents of the field properly, so that they can delete it and it isn&#8217;t included in the query.

We can do this with event handlers &#8212; in this case, `onclick`. Essentially, the logic flows something like this:  
If a person clicks the field, the contents are wiped.

Anything wrong with that?

Yes, of course there is. That&#8217;s the simplest way to do it, but it&#8217;s wrong. What if the user types a query in and uses the mouse to click a point in the text to edit it? Their query would be wiped, because `onclick` clears the field whenever it occurs, regardless of content.

So what do we want? Using the text on this site as an example, we want to wipe the contents of the field when a person clicks it *only* if the contents are exactly &#8220;search&#8221;. Admittedly, this still has some problems &#8212; if someone were searching for a search engine or had any other reason to include &#8220;search&#8221; in their string and went to edit, there&#8217;d be potential for issues, but that, by my thinking, is tolerable.

The simpler version, which doesn&#8217;t check to see if the value is &#8220;search&#8221; before erasing, is simply

`onclick="this.value=''"`

The marginally more complicated version, which is far more usable, goes like this

`onclick="if(this.value=='search'){this.value=''}"`

That means our new `input` field code looks like this:

`<input type="text" class="search" value="search" name="s" id="s" size="13" onclick="if(this.value=='search'){this.value=''}" />`

Now go use it!

<small>p.s. No need to say that this isn&#8217;t particularly groundbreaking. I&#8217;d just forgotten to implement it here, and thought it could be helpful to other people write about.</small>