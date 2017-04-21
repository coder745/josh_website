---
layout: portfolio_entry
title: Web Development Resources
description: Web Development online resources I find useful.
date: 2017-04-21
excerpt_separator: <!--more-->
tags: HTML CSS Documentation JavaScript Accessibility Programming Validation News
---

<p>On this post, I will be listing helpful resources, documentation, and tools that I use in my daily web development 
workflow. I will continually update this post as I discover more tools that are beneficial. I have include a list 
grouped into categories below.</p>

<!--more-->

<p>{% for resources in site.data.web_development_resources %}
    <h3>{{ resources.title }}</h3>
    <ul class='tech_list'>
        {% for tech in resources.data %}
            {% if tech.display %}
                <li><a href='{{ tech.url }}'>{{ tech.title }}</a></li>
            {% endif %}
        {% endfor %}
    </ul>
{% endfor %}</p>