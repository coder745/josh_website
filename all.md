---
layout: defaults
title: All Thoughts
description: Josh Young's individual blog posts about web development and programming
permalink: /all
weight: 10
---

<section class='thoughts'>
    <div class='inner-section'>
        <h2 class='thought'>All Thoughts</h2>
        {% for post in site.posts %}
            <article>
                <h2><a href='{{ post.url }}'>{{ post.title }}</a></h2>
                <div class='date'>{{ post.date | date: '%B %d, %Y' }}</div>
                    {{ post.content | split:'<!--more-->' | first }}
                    {% if post.content contains '<!--more-->' %}
                    <a href='{{ post.url }}'>... read more</a>
                    {% endif %}
            </article>
        {% endfor %}
    </div><!-- inner-section -->
</section>