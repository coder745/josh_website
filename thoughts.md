---
layout: defaults
title: Thoughts
description: Josh Young's individual blog posts about web development and programming
permalink: /thoughts
weight: 10
---

<section class='thoughts'>
  <div class='inner-section'>
    <h2 class='thought'>Thoughts</h2>
    <article class='thought'>
      <p>Here I document concise posts about web development or programming that I am learning or have recently discovered. Many times these entries are very short, as I am not a prolific blogger. However, hopefully something I list here will be helpful to others.</p>
    </article>
    {% for post in site.posts limit:5 %}
      <article>
        <h2><a href='{{ post.url }}'>{{ post.title }}</a></h2>
        <div class='date'>{{ post.date | date: '%B %d, %Y' }}</div>
          {{ post.content | split:'<!--more-->' | first }}
          {% if post.content contains '<!--more-->' %}
          <a href='{{ post.url }}'>... read more</a>
          {% endif %}
      </article>
    {% endfor %}

      <article class='thought last'>
        -- <a href='/all'>See All Thoughts</a>
      </article>

  </div><!-- inner-section -->
</section>