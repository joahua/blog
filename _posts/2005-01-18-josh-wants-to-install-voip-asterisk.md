---
title: 'A whole new world of TLAs I don&#8217;t understand (Or, Josh wants to install VoIP/Asterisk)'
author: Josh Street
layout: post
permalink: /2005/01/18/josh-wants-to-install-voip-asterisk/
categories:
  - Geek
  - Life
  - Open Source
tags:
  - ADSL
  - analogue equipment
  - analogue telephony equipment
  - australia
  - Beat FM
  - Cable TV
  - copper network
  - crappy desktop calling software
  - DSL
  - DSLAM
  - Foreign Exchange Office
  - 'FXS    Foreign Exchange Station'
  - hardware solution
  - Internet Protocol
  - 'Internet Telephony Provider   IAX'
  - IP telephony
  - Linux
  - mobile telephony
  - Orange
  - PBX
  - PBX system
  - PSTN
  - 'PSTN    PSTN    Public Switched Telephone Network    SIP    Session Initiation Protocol'
  - requisite hardware
  - Secure SHell
  - telephony
  - telephony devices
  - telephony networks
  - Telstra
  - United States
  - Vodafone
  - voice and data
  - VOIP
  - web interface
---
Over the past week or two, I&#8217;ve heard about <acronym title="Voice over I.P.">VoIP</acronym> a bit more than usual, first with Adrian of [Beat FM][1] doing his thing over VoIP from Lismore with [FireFly/Freshtel][2], and then a little later, when [Steve][3] asked if I could join a convo with a guy called Dave to provide some general Linux advice, as Dave had just installed the [Asterisk][4] <acronym title="Private Branch eXchange">PBX</acronym> software on a box (or, [if you&#8217;re Steve][5], &#8220;computer&#8221;) and needed to <abbrev title="Secure SHell">SSH</abbrev> into it.

So, awareness/interest catalysts are there. I&#8217;d looked/heard about the Asterisk software some time ago, but sort of wrote it off as not quite worth the effort. More recently, however, we&#8217;ve been trying to get general <acronym title="Information and Communciation Technology">ICT</acronym> stuff sorted for the new place of residence, in a way that&#8217;ll let us cut costs a little.<!--more-->

Context: We&#8217;re a household of six, and about that many functional computers (give or take two depending on whatever) at any one time. We&#8217;ve got three mobiles (the siblings don&#8217;t, yet), and had one landline (there are two lines where I&#8217;m staying, one listed, one not &#8212; but that&#8217;s only temporary so it doesn&#8217;t count), which was used for voice and data. We&#8217;d had HFC TV/data cable run into our house previously, but didn&#8217;t use it for either CATV or Internet.

So Dad&#8217;s wanting to figure out a way to get rid of the landline, or at least cut the costs of having it there, seeing we&#8217;re going to be using [Telstra Cable][6] (and therefore don&#8217;t need the copper). Unlike the other major telco here in Australia, [Optus][7], Telstra don&#8217;t run telephony over HFC even if it&#8217;s installed at the premises &#8212; most likely as a business decision (they&#8217;ve already made considerable outlay in installing and maintaining a copper network, which they&#8217;re going to try and make people think they continue to need for as long as humanly possible &#8212; they get line rental, LSS, DSLAM port fees and (from some customers) ADSL revenue all off the same single service!)

Dad&#8217;s idea: Use capped local call costs with mobile telephony provider, [Orange][8], to eliminate need for copper. The limitation? Maximum 10 minute calls before we need to redial/pay standard rates, and inability to use data/fax (well, okay, not complete inability&#8230; but sufficiently difficult). Yeah, there are caps with other providers like [Vodafone][9] and [3][10], but even $59 caps would be more/about the same than/as we&#8217;d otherwise spend.

Josh&#8217;s idea: True VoIP (not softphone) hardware solution, with (at least one) <acronym title="Direct In-Dial">DID</acronym> line, running over HFC Internet. Dad had suggested VoIP previously, but I think I&#8217;d kind of assumed he was talking about doing it on the cheap (so, crappy desktop calling software &#8212; something like FireFly, which is fine just for fun, but not if you&#8217;re actually using it to make calls regularly) &#8212; and basically said &#8220;no&#8221; outright. Essentially this solution would either involve [dedicated hardware][11] or an Asterisk server connected to an [Internet Telephony Provider][12] <acronym title="Inter-Asterisk eXchange">IAX</acronym>.

All this is fine. It&#8217;s all making sense. It&#8217;s just that there are waaaaaay too many new <acronym title="Three Letter Acronyms">TLAs</acronym> for my comfort &#8212; I&#8217;ve made an effort to use acronym markup on most new terms in this post, but it really needs a glossary at the end! If I can be bothered, I&#8217;ll do that when this post finishes&#8230;

Basically, everything is perfectly normal thus far. There&#8217;s no really difficult concepts to grasp &#8212; it&#8217;s just &#8220;plug in a Grandstream <acronym title="Analogue Telephone Adapter">ATA</acronym>, hit the web interface, sign up for an account with a provider and start making and receiving calls&#8221;. But you know, that&#8217;d be boring. That&#8217;d really suck. Why? Well, when you&#8217;ve got Cat5 coming out of your ears between rooms, you may as well use it.

Asterisk will manage calling, call routing, call waiting, voicemail, <acronym title="Do Not Disturb">DND</acronym>, hold music, diverts, <acronym title="Caller Identification">CID</acronym> and everything else under the sun. Even if there&#8217;s only one <acronym title="Direct In-Dial">DID</acronym> number, it&#8217;s still possible to have multiple incoming lines per number for a nominal fee (with [ATP][13] it&#8217;s $AU5.50 per month inc. GST), and there&#8217;s no limit (bandwidth aside) to the number of simultaneous outgoing calls that are possible (although, according to Dave, who is also on Telstra cable, things start to get painful above 4 calls). The easiest way to use phones with Asterisk is with VoIP <acronym title="Session Initiation Protocol">SIP</acronym> telephony devices, which plug into standard RJ45 network sockets and connect directly to the server using data. Why not do this? Well, for one, you lose all the functionality of any analogue telephony equipment you might have lying around.

So how do you get this kind of equipment to work? This is where the more confusing and difficult to remember acronyms (at least for me) set in. Asterisk can interface with standard <acronym title="Public Switched Telephone Network">PSTN</acronym> lines, functioning as a non-VoIP PBX system with the requisite hardware installed &#8212; namely, <acronym title="Foreign eXchange Station">FXS</acronym> and <acronym title="Foreign eXchange Office">FXO</acronym> modules. Standard analogue equipment (phones, fax machines, etc.) plugs into <acronym title="Foreign eXchange Station">FXS</acronym> ports on the PBX, whilst <acronym title="Public Switched Telephone Network">PSTN</acronym> lines connect into <acronym title="Foreign eXchange Office">FXO</acronym> ports. [Digium][14], principle sponsor of the Asterisk project, have a great [explanation of the relationship between the Asterisk PBX and FXS/FXO modules][15], complete with diagrams.

We&#8217;ve only really got one analogue phone worth keeping, which is a Uniden cordless thing with two handsets (base station and separate charger for the second handset), and that&#8217;s what I&#8217;d interface via an FXS to the PBX, as well as a second FXS for a fax machine. I&#8217;m a tad uncertain as to how well fax data will work over VoIP, but that&#8217;s a question for the [FaktorTel][16] support team when it comes to actually signing up for stuff.

There is only one other hesitation surrounding VoIP, and that&#8217;s the issue of emergency calling (&#8220;000&#8243; in Australia, &#8220;911&#8243; for US&#8230; I don&#8217;t know about the rest of the world, sorry). If there&#8217;s a power failure or the Internet goes out, how do we make calls to the outside world in the event of an emergency? Well, logic prevails &#8212; in a household with three mobiles on two different networks (three if you&#8217;re counting roaming), chances are that at least one of them will be working fine in the event of an emergency&#8230; and if they&#8217;re not, then the telephony networks in Australia are probably so stuffed that even if we were calling over a PSTN line, it&#8217;d probably not work either!

So there&#8217;s an essay about VoIP for you. And what I sort of want to do with it. I haven&#8217;t forgotten about the acronyms, by the way: here&#8217;s a list of terms for you&#8230;

**Glossary**

ADSL
:   Asymmetrical Digital Subscriber Line

ATA
:   Analogue Telephone Adapter

CATV
:   Cable TV

CID
:   Caller Identification

DID
:   Direct In-Dial

DND
:   Do-Not-Disturb, the ability to disable ringing on a certain phone/line

DSLAM
:   Digital Subscriber Line Access Multiplexer

FXO
:   Foreign Exchange Office, a port into which PSTN lines are connected.

FXS
:   Foreign Exchange Station, a port into which handsets and analogue equipment is connected

HFC
:   Hybrid Fibre (over) Coaxial

IAX
:   Inter-Asterisk Exchange

ICT
:   Information and Communication Technology

LSS
:   Line Spectrum Sharing, service required to run telephony and ADSL over the same copper

PABX
:   Private Automatic Branch eXchange

PBX
:   Private Branch eXchange, generally a contraction of &#8220;PABX&#8221;, as manually switched exchanges are related to dinosaurs.

POTS
:   Plain Old Telephone System, also PSTN

PSTN
:   Public Switched Telephone Network

SIP
:   Session Initiation Protocol, an IETF standard protocol for initiating connections for interactive platforms, including VoIP

SSH
:   Secure SHell

VoIP
:   Voice over I.P. (&#8220;Internet Protocol&#8221;)

 [1]: http://www.themusicnerd.com/radio/playing.php
 [2]: http://www.freshtel.net/firefly/
 [3]: http://www.swylie.com/
 [4]: http://www.asterisk.org/
 [5]: http://www.joahua.com/blog/2005/01/11/computer-box
 [6]: http://bigpond.com/internet-plans/broadband/cable/Unlimited/
 [7]: http://www.optus.net.au/
 [8]: http://www.orange.net.au/
 [9]: http://www.vodafone.com.au/
 [10]: http://www.three.com.au
 [11]: http://www.grandstream.com/y-286.htm "Grandstream Networks Handytone ATA"
 [12]: http://www.faktortel.com.au/iax.php
 [13]: http://www.austechpartnerships.com/
 [14]: http://www.digium.com/
 [15]: http://www.digium.com/index.php?menu=fxsvfxo
 [16]: http://www.faktortel.com.au/