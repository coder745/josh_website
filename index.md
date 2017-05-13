---
layout: defaults
title: Home
description: Josh Young's personal site - web developer and programmer.
weight: 0
---
<section class='home'>
    <div class='inner-section'>
        <article class='landing'>
            <h2>
            My name is <span><a href='/me'>Josh</a></span>. I am a Web Developer. Here I write 
            about web development and my current tech projects. Check out my <a href='/thoughts'>Blog</a> 
            to see what I am writing or my <a href='/projects'>Projects</a> 
            to see what I am building.
            </h2>
        </article>

        {% if page.title == 'Home' %}
            <article class='glance'>
                {% include glance.html %}
            </article>
            <article class='tags'>
                {% include tags.html %}
            </article>
        {% endif %}
    </div><!-- inner-section -->
</section>