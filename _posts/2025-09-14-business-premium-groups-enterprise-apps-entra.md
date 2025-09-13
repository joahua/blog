---
title: "Why Entra Lets Me Assign Groups when Azure Portal Doesn’t"
author: Josh Street
permalink: /2025/09/14/business-premium-groups-enterprise-apps-entra
date: 2025-09-14
categories: 
- Microsoft 365
- Entra
- Azure AD
- Identity
tags:
- entra
- azure-ad
- microsoft-365
- saml
---

If you use Microsoft 365 Business Premium, you’ve probably discovered that it quietly bundles most of the features of Azure AD Premium P1. It is fantastic value compared to E3/E5 so hang on to it as long as you can (up to 300 users…)! Notably, it includes group-based assignment of Enterprise Applications — a really handy feature if you’re provisioning SAML/OIDC apps via Entra and want clean onboarding/offboarding.

Despite group assignment theoretically being supported, the Azure portal sometimes lies…

## "Groups not available for assignment"
When accessing Entra via the Azure Portal (portal.azure.com) and try to add a group to an Enterprise App, you’ll see this message:

> *“Groups are not available for assignment due to your Active Directory plan level. You can assign individual users to the application.”*

The URL will be something like `https://portal.azure.com/#view/Microsoft_AAD_IAM/AddAssignmentBlade/objectId/{the app}`

You may think your tenant isn’t licensed for group assignment at all.

## Entra has the answer

But if you flip across to the *Entra* Portal (entra.microsoft.com) and navigate to the same Enterprise App, group assignment works just fine.

The URL will be nearly identical `https://entra.microsoft.com/#view/Microsoft_AAD_IAM/AddAssignmentBlade/objectId/{the app}`. It’s tempting to think that this means the app is the same, just bundled in another experience… but adding Groups here works just fine.
