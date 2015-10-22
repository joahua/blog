---
title: Cheap secure authentication
author: Josh Street
layout: post
permalink: /2008/02/08/cheap-secure-authentication/
syntaxhighlighter_encoded:
  - 1
categories:
  - Security
  - Usability
tags:
  - australia
  - bank
  - Canada
  - eBay
  - PayPal
  - United States
  - Verisign
  - VPN
---
![Verisign OTP from PayPal][1]

These things [can be had from PayPal][2] for about five bucks. Or $7.50 if you&#8217;re an Aussie. Verisign will flog them off to you [for $30][3], if you&#8217;d like, but basically PayPal rocks for this kinda stuff. It&#8217;s a one-time password token that effectively enhances your authentication by a massive degree. It&#8217;s cool because it works with PayPal and eBay. It&#8217;s cooler (and worthwhile) because you can potentially use it with OpenID.

Essentially, it&#8217;s a random number seeded with a unique key that gets appended to your regular password. This defeats keyloggers and pretty much all kinds of phishing currently out there. These kinds of devices have been used in corporate VPN/dial-in scenarios for years now (predominantly, in the situations I&#8217;m aware of, with technology by RSA SecureID), but this is the first I&#8217;ve seen of it from Verisign.

And, sure, it&#8217;s only as secure as physical security or the endpoints themselves are, but it&#8217;s a massive step up from &#8220;what&#8217;s your cat&#8217;s name?&#8221; two-factor auth (though, unfortunately, I think PayPal/eBay offer that as a backup).

I&#8217;ve ordered mine and will probably be having a play with OpenID implementations of it (backed by [Verisign&#8217;s PIP service][4], but not overly tied to it because of OpenID&#8217;s identity-delegation ability) once it arrives (10 business days).

Can&#8217;t help but wonder what Verisign&#8217;s rates for these things are in a standalone sense. Normally on 5 year contracts, but in terms of cost-per-token. Seems like a great way to defeat the idiot users who insist on having passwords that are blatantly obvious (argue all you like about strength policies: it&#8217;s often not feasible when balanced against support load for resultant forgotten passwords).

Also, to those who argue PayPal = evil, if you&#8217;re in Australia then please&#8230; don&#8217;t. Unlike in the US, here they&#8217;ve basically got the same financial reporting obligations as any bank does, and customer service necessarily to match it. All the horror stories from the &#8216;States (not that I think them universally untrue!) pretty much couldn&#8217;t happen here or they&#8217;d be chucked out of the country. And, whilst they&#8217;re so heavily subsidising (or at least obtaining bulk discounts for) this kinda tech, that&#8217;s cool with me.

 [1]: /blog/wp-content/2008/02/verisign-otp.jpg "Verisign OTP from PayPal"
 [2]: https://www.paypal.com/au/cgi-bin/webscr?cmd=xpt/cps/general/PayPalSecurityKey
 [3]: https://idprotect.verisign.com/orderstart.v
 [4]: https://pip.verisignlabs.com/