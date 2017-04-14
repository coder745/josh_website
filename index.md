---
layout: defaults
title: Home
weight: 0
---
<section>
    <div class='inner-section'>
    <article>
        <h2>My name is <span><a href='/me'>Josh</a></span>. I am a Web Developer. Here I write about web development and projects I am currently working on.
          Check out my <a href='/thoughts'>Blog</a> to see what I am currently writing.</h2>
    </article>

    {% if page.title == 'Home' %}
        <article class='alt glance'>
            <h3>At a Glance</h3>
            <ul>
                <li><a href='/about#books'>Books I've Read</a></li>
                <li><a href='/about#podcasts'>Podcasts I Enjoy</a></li>
                <li><a href='/about#hobbies'>My Hobbies</a></li>
                <li><a href='https://www.linkedin.com/in/joshuayoung1'>LinkedIn Profile</a></li>
                <li><a href='https://github.com/coder745'>GitHub Profile</a></li>
                <li><a href=''>CodePen</a></li>
            </ul>
            <div style='clear:both;'></div>
        </article>
        <article class='alt'>
            <h3>Tags</h3>
            <ul class='tags'>
            {% for tag in site.tags %}
                <li><a href='/tags/{{ tag[0] }}' class='tag'>{{ tag[0] }}</a></li>
            {% endfor %}
            </ul>
            <div style='clear:both;'></div>
        </article>
    {% endif %}

    </div><!-- inner-section -->
</section>