---
layout: defaults
title: Programming Definitions
description: Programming definitions useful for reference.
permalink: /definitions
main_menu: false
weight: 100
---

<section>
  <div class='inner-section'>
    <h2>Programming Definitions</h2>
    <article>
      {% assign sorted_definitions = site.data.definitions | sort: 'word' %}
      <dl>
        {% for def in sorted_definitions %}
          <dt><strong>{{ def.word }}:</strong></dt>
          {% if def.link != '' %}
            <dd>
              "{{ def.definition }}"
              <a target='_blank' href='{{ def.link }}'>(reference)</a>.
            </dd>
          {% else %}
            <dd>{{ def.definition }}</dd>
          {% endif %}
        {% endfor %}
      </dl>
    </article>
  </div><!-- inner-section -->
</section>