---
title: A 5 line quote script in PHP
author: Josh Street
layout: post
permalink: /2005/03/26/a-5-line-quote-script-in-php/
sponge:
  - 1
syntaxhighlighter_encoded:
  - 1
categories:
  - Geek
  - PHP
  - Quotations
tags:
  - PHP
  - quote
  - script
  - snippet
  - text
---
&#8230;mainly because [Ben][1] has taken too long to write his own (I don&#8217;t think he was trying, but meh&#8230; no more excuses!)

18 lines of comments, and 5 lines of code. If this is too hard to use, you shouldn&#8217;t be using PHP (or any programming language, for that matter!)

<?php
#-----Simple Random Quote script-------#
# Place this file somewhere servable,  #
# and stick a file "quotes.txt" in the #
# same directory as it. Alternatively, #
# change the $quotesfile variable to   #
# something desirable.                 #
#                                      #
# IMPORTANT: Quotes file must be       #
# server readable. Obvious, but often  #
# overlooked.                          #
#                                      #
# quotes.txt format is:                #
# Quotation::Author                    #
# Use one entry per line only.         #
#                                      #
# Output from the regex replacement is:#
# <p>Quotation<br /><em>Author</em></p>#
#--------------------------------------#

$quotefile = "quotes.txt";
if ($quotes = file($quotefile)) {
 echo eregi_replace("([^[]*)::([^[]*)","<p>1<br /><em>2</em></p>", $quotes[array_rand($quotes)]);
} else{
 echo 'An error has occurred, no quotes are available at this time.';
} ?>

I hope WordPress doesn&#8217;t mess that up&#8230;

 [1]: http://www.cat-man.info/blog/

 *[PHP]: PHP:Hypertext Preprocessor