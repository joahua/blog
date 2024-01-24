---
title: Talking to Customers in Government and Necessary Sustainment
author: Josh Street
layout: post
permalink: /2024/01/15/zazar-overspends-backlogs/
categories:
  - Government
tags:
  - work
  - technology
  - research
  - agile
  - product management
---

Go and enjoy Zarar Siddiqi’s excellent new-year piece, [The size of your backlog is inversely proportional to how often you talk to customers](https://bitbytebit.substack.com/p/the-size-of-your-backlog-is-inversely).

His thesis holds true in more contexts than government folks like to admit. He also has orthodox (read: scathing) views on hifi design upfront, voiced but not heard by most government programs.

In a recent large gov program, fairly indicative of lots of them, I regularly saw backlogs triple handled. It used a nameless enterprise agile methodology, which made backlog management a serpentine but not impossible. The process shook out a few things, sure, but ended defined well enough into the future, very difficult to deliver against. Nevertheless, about half the program did a decent job speaking with customers. Translating those conversations into working software remained a challenge!

Upfront funding remains to blame, but as more than one public servant has expressed over the years – they either need this or they don’t. Overspends suck, and it is not super legal to commit funds that are not there, but it is such an accepted fact of life it falls into the realm of ‘effectively engaging with risk’. Much of the trouble arises when we look at spending categories.

Federal government can crank out the same things it has always done to an ‘unlimited’ (say, 2x budget) spend limit, in a specific category. It does this by translating the wants and desires of public servants – generally sustainment-funded, overburdened managers – into over-realised product visions, generally minimally validated. They only get one shot at this before the program leaves the station and moves on to the next well-meaning exec. Managers are impressive enough, usually experienced, though their relationship with their immediate senior exec will determine their ability to express things clearly enough to yield an initial estimation and a shot at change. Their engagement with software folks is generally characterised by mistrust; perhaps fairly, as IT have been hard to engage, they have potentially waited years for someone to even give them the time of day, and – this part is most tragic – many have history with systems built by people sitting next to them, since wrested away by IT under efficiency and centralisation initiatives that doubtless closed datacenters and saved millions, but also took with it any hope for systems agility or a genuinely digital workforce.

Returning to Siddiqi, who prescribes – as any good agilist – defering design almost entirely:

    A product’s capacity to implement UI customer feedback is more important than a product’s initial UI

How true. Why is it so hard?

Technology is part of it, to be sure. Tech debt and brittle, bespoke, or overly clever architectural choices, certainly. Competency comes in too – the design-adjacency of frontend development often seems to exclude it from dev teams entirely. It’s hard to make UI changes when your org has scant UI skills; and more UX focused folks (which undoubtedly skew ‘BA’ in government land) will typically gravitate to the other side of the org chart. The best changes are snuck – The quantum of ‘it felt good to me at the time’ developer-written content, absent any awareness of ‘business areas’ is far greater than anyone admits. Sustainment funding is mythically bad: all good business cases are predicated on rainbows, unicorns and FTE reduction.

Process is another. The unduly IT centric nature of transformation initiatives skews the workforce to recognisable roles. In defence of big IT, they historically know how to get the money in a way that new policy proposals (in a genuine policy-oriented sense) only dream of. IT teams still often include design, as a quantified afterthought because the Digital Service Standard told them they should and there was a chance of a spend review that asks, ‘where are your designers?’. But the design function is still, often, viewed as an input to estimation. Designers often produce optional, undervalued backlog items that merely enable the ‘real work’ to be estimated (and perhaps delivered, if runway permits).

There is one more reason it is hard. Good design on government services is hard, and typically in ways that are beyond quarterly planning horizons. It is a rare federal government service that does not involve multiple parties. Don’t let me undersell the value of simple single identity – The renewed MyGov policy call is a good thing! – But plenty of duplication remains beyond this identity demarcation. Think multi-user, org management, audit trails, and, increasingly, API use without the past horrors of Auskey and friends. Yet in delivering ‘deep portals’ – web services that let you do more than a flat form in an authenticated context – you’re going to fight battles that don’t matter because the funding is attached to the wrong thing. You’re going to agitate around the wording on forms, because that is your inflection point. You’ll end up producing guidance materials in PDFs, because WalkMe would take you two quarters to business case, security assess, and you’d probably lose anyway and end up estimating three quarters to build a bad alternative. And you’ll probably have aspirations about ‘deep portal’ functionality that is so hard to prioritise because it is not sufficiently domain specific. These common, identity-adjacent needs, are the tip of the 80/20 iceberg, and to my knowledge and awareness there is no vendor coming to the rescue. The recently-axed Modernising Business Registers program included the closest federal government had come, at least introducing multi-user business authentication of a kind. Yet a review found the program was characterised by ‘[significant underestimation](https://www.themandarin.com.au/229068-scrapped-business-registry-modernisation-scheme-halted-after-projected-2-3-billion-blowout/)’. Vale.

The best thing we can do is keep the ability to make changes high. This requires more sustainment than anyone would like to admit. Consensus on sustainment is really hard when significant program goals are (usually) nothing to do with the customer. It is common to have cost- and efficiency-based priorities behind programs, and give lip service to user experience to get them over the line. It’s easy to blame ‘big IT’ – but they are not an interesting target of wrath, being a fixed point of most IT transformations. Defer as much design as you can, while keeping people doing design close to the service, talking to users, and pushing legislative reform to genuinely simplify services.