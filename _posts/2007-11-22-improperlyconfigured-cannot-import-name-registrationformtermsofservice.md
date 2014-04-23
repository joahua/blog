---
title: 'ImproperlyConfigured: cannot import name RegistrationFormTermsOfService'
author: Josh Street
layout: post
permalink: /2007/11/22/improperlyconfigured-cannot-import-name-registrationformtermsofservice/
syntaxhighlighter_encoded:
  - 1
categories:
  - Python
tags:
  - django
  - django-registration
  - RegistrationFormTermsOfService
---
Django&#8217;s [django-registration version 3][1] introduces a new class, `RegistrationFormTermsOfService`, that replaces the `tos` field in `RegistrationForm`.

Our app had done that but django-registration&#8217;s version change slipped past me (so I had django-registration, just the wrong version), easily fixed with a `svn -co http://django-registration.googlecode.com/svn/trunk/registration/` into site-packages.

 [1]: http://www.b-list.org/weblog/2007/sep/19/django-registration/