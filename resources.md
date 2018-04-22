---
layout: defaults
title: Web Development Resources
description: Web Development online resources I find useful.
permalink: /resources
main_menu: false
weight: 40
---

<section>
  <div class='inner-section'>
    <h2>Web Development Resources</h2>

    <article>
      {% assign sorted_resources = site.data.web_dev | sort: 'title' %}
      <ul class='anchor_list'>{% for resources in sorted_resources %}
        <li><a href='#{{ resources.class }}'>{{ resources.title }}</a></li>
      {% endfor %}</ul>
    </article>

    <article>
      <p>Here, I will be listing helpful resources, documentation, and tools that I use in my daily web development
      workflow. I will continually update this page as I discover more tools that are beneficial. I have include a list grouped into categories below.</p>
    </article>

    <article>
      {% assign sorted_resources = site.data.web_dev | sort: 'title' %}
      <p>{% for resources in sorted_resources %}
        <a name='{{ resources.class }}'></a>
        <h3>{{ resources.title }}</h3>
        <ul class='tech_list'>
          {% assign sorted_tech = resources.data | sort: 'title' %}
          {% for tech in sorted_tech %}
            {% if tech.display %}
              <li><a target='_blank' href='{{ tech.url }}'>{{ tech.title }}</a></li>
            {% endif %}
          {% endfor %}
        </ul>
      {% endfor %}</p>
    </article>
  </div><!-- inner-section -->
</section>