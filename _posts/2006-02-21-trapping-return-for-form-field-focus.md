---
title: Trapping return for form field focus
author: Josh Street
layout: post
permalink: /2006/02/21/trapping-return-for-form-field-focus/
categories:
  - Usability
  - Web Standards
tags:
  - DOM
  - HTML
  - JavaScript
---
Today I had to cook up a simple form with two input fields, so that two barcodes could be scanned into their respective fields and then submitted (the point being to link two IDs in a database that have been encoded in separate barcodes). There was one twist.

The barcode reader automatically appends a return character to the end of the string it&#8217;s read&#8230; which would, in any normal circumstance, submit the form. Obviously problematic unless we split the form over several pages, which is just yuck.

If the barcode reader hadn&#8217;t returned character 13 (return/enter/whatever you&#8217;ll call it) at the end of the string, it&#8217;d be trivial to pick up a &#8220;maxlength=x then go to next field&#8221; script off the side of the road&#8230; they&#8217;re everywhere. Not so much the case with this exact problem, though, so I thought I&#8217;d share&#8230;

[source:str javascript]function catchEnter(e){  
var characterCode  
if(e && e.which){  
e = e  
characterCode = e.which  
} else {  
e = event  
characterCode = e.keyCode  
}  
if(characterCode == 13){  
document.getElementById(&#8216;cardid&#8217;).focus();  
return false  
} else{  
return true  
}  
}[/script]

Note we&#8217;re not using DOM methods here&#8230; there isn&#8217;t any equivalent to `which` or [`keyCode`][1] that I&#8217;m aware of (I looked enough). `keycode` is the important one&#8230; `which` is used by the likes of Netscape 4.x and other nasties&#8230; I don&#8217;t really want to know about it, but I stole the key trap code from somewhere (lost the site) and didn&#8217;t really have a reason to intentionally *break* the behaviour for those browsers!

So we use one of those (probably keycode) to set characterCode, which is a numeric value that corresponds to Unicode decimal values. 13 is [carriage return][2]. Then it needs to be compared to `event` (the character that triggered the onkeypress event), here used as `e` for convenience&#8230; and if *this* is true, then focus will go to the next field (in this case `cardid`) and the character will `return false` to prevent the form from submitting.

[<img src="/blog/wp-content/2006/02/barcode/returnfocus.png" alt="Screenshot of the demo page" style="float: left; display: inline; text-align: left; margin-right: 1em" />][3]

I&#8217;ve got [a static demo][3] here (don&#8217;t mind the message at the top, it was an HTML mockup)&#8230; try entering something into the first field and pressing return. Then press return again, and the form will submit.

Obviously this Javascript only works for a two-field case&#8230; but you could dynamically set the element for focus to follow to by parsing that through to the function `onkeypress` event. The only other thing I can think of is to [getElementsByTagName][4] every input field in the form and use the array to dynamically set the &#8220;next&#8221; field&#8230; but that would have been waaaay overkill for what I had to do.

This behaviour isn&#8217;t just useful for barcode scanners, by the way. Desktop applications often exhibit this kind of behaviour, and it also goes some way to ensuring all fields are filled without doing formal validation (either JavaScript on `submit`, or server-side).

 [1]: http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/keycode.asp
 [2]: http://en.wikipedia.org/wiki/Carriage_return
 [3]: /blog/wp-content/2006/02/barcode/
 [4]: http://www.mozilla.org/docs/dom/domref/dom_doc_ref50.html