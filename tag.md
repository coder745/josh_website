---
layout: defaults
title: Tags
permalink: /tags
weight: 100
---

<!-- 
This tag search solution is somewhat hacky. There are other ways to do this including setting up some additional Ruby code within the Jekyll version that you are running. Eventually, I may switch this to using a different search method.
-->

<section>
    <div class='inner-section'>
        {% for post in site.posts %}
        <article class='hide single_post'>
            <h2 class='single_title'><a href='{{ post.url }}'>{{ post.title }}</a></h2>
            <div class='hide single_tags'>{% for tag in post.tags %}{{ tag }}-{% endfor %}</div>
            <div class='date'>{{ post.date | date: '%B %d, %Y' }}</div>
            <div class='single_content'>{{ post.content | split:'<!--more-->' | first }}</div>
            {% if post.content contains '<!--more-->' %}
                <a href='{{ post.url }}'>... read more</a>
            {% endif %}
        </article>
        {% endfor %}

        <article class='hide' id='nothing_found'>
            <h2>No Post</h2>
            <p>
            Unfortunately, we did not find any posts that match the tag that you specified. 
            Please try a different tag. Thanks for visiting the site.
            </p>
        </article>
    </div><!-- inner-section -->
</section>

<script>
var display_tags = function() {
    var added = false,
        all_posts = document.getElementsByClassName('single_post'),
        slug = document.location.href.split('/')[4];
        i = 0,
        len = all_posts.length;

    for (; i < len; i++) {
        var cur = all_posts[i];
        title = cur.getElementsByClassName('single_title')[0],
        tags = (cur.getElementsByClassName('single_tags')[0]).innerHTML.split('-'),
        content = cur.getElementsByClassName('single_content')[0],
        tag_len = (tags.length - 1),
        j = 0;
        for (var j = 0; j < tag_len; j++) {
            var cur_tag = tags[j];
            if (cur_tag === slug) {
                all_posts[i].className = 'single_post';
                added = true;
            }
        }
    }
    if (!added) { document.getElementById('nothing_found').className = ''; }
}
window.onload = function() {
    display_tags();
}
</script>