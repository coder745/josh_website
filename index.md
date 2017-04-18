---
layout: defaults
title: Home
description: Josh Young's personal site - web developer and programmer.
weight: 0
---
<section class='home'>
    <div class='inner-section'>
        <article>
            <h2>
            My name is <span><a href='/me'>Josh</a></span>. I am a Web Developer. Here I write 
            about web development and my current tech projects. Check out my <a href='/thoughts'>Blog</a> 
            to see what I am writing or my <a href='/projects'>Projects</a> 
            to see what I am building.
            </h2>
        </article>

        {% if page.title == 'Home' %}
            <article class='glance'>
                <h3>At a Glance</h3>
                <ul>
                    <li><a href='/me#books'>Books I've Read</a></li>
                    <li><a href='/me#podcasts'>Podcasts I Enjoy</a></li>
                    <li><a href='/me#hobbies'>My Hobbies</a></li>
                    <li><a href='{{ linkedin_url }}'>LinkedIn Profile</a></li>
                    <li><a href='{{ github_url }}'>GitHub Profile</a></li>
                    <li><a href='{{ codepen_url }}'>CodePen Profile</a></li>
                </ul>
                <div style='clear:both;'></div>
            </article>
            <article>
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