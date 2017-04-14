---
layout: defaults
title: Thoughts
permalink: /thoughts
weight: 10
---

<section class='thoughts'>
<div class='inner-section'>
  {% for post in site.posts %}
    <article>
      <h2><a href='{{ post.url }}'>{{ post.title }}</a></h2>
        <div class='date'>{{ post.date | date: '%B %d, %Y' }}</div>
        <p>{{ post.excerpt | remove: '<p>' | remove: '</p>' }}</p>
    </article>
  {% endfor %}
</div><!-- inner-section -->
</section>