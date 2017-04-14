---
layout: defaults
title: About
permalink: /me
weight: 40
---

<section>
<div class='inner-section'>
<h2>About Me</h2>
    <article>
        <h3>My Job</h3>
        <p>My name is Josh Young. I am a web developer living and working in Huntsville Alabama. For my day job,
        I maintain web applications, websites, apps, and web servers for my employer. I use PHP, HTML, CSS, JavaScript, C#, Objective-C, Linux, and Windows. If you want more details on my current job responsibilities check out my resume link on this site.</p>
    </article>

    <article>
        <a name='hobbies'></a>
        <h3>Hobbies</h3>
        <p>My hobbies usually end up relating in large part to my job. I spend a lot of time maintaining my home network, firewall, fileserver, git server, among other open-source applications. I enjoy Linux and freeBSD so I spend time configuring these systems in my free time as well. As evident by some of my certifications and training, I also dabble in computer security. I find the subject interesting and a good working knowleged of computer security and specifically web application security is very helpful for web developers. If I am not working on servers or code, I spend my time playing my harmonicas, reading, or researching health related subjects.</p>
    </article>

    <article>
        <a name='podcasts'></a>
        <h3>Recommended Podcasts</h3>
        <p>Below I have listed the tech blogs that I listen to on a weekly basis. These are a great way to keep up with the latest changes in development. Yes, I listen to a lot of podcasts. :) Actually, I listen to some other non-technological postcasts that I did not list here. If you use a podcast app such as <a href='https://overcast.fm'>Overcast</a> and listen on a faster speed, you will be surprised by how much information you can take in quickly.</p>

        <ul class='smaller'>
            {% assign sorted_podcasts = site.data.podcasts | sort: 'title' %}
            {% for podcast in sorted_podcasts %}
                {% if podcast.display != false %}
                    <li><a href='{{ podcast.url }}'>{{ podcast.title }}</a></li>
                {% endif %}
            {% endfor %}
        </ul>

    </article>

    <article>
        <a name='books'></a>
        <h3>Books</h3>
        <p>In my spare time, I try to keep up with the latest in technology. Below I have listed some of the books I have read over the years that have contributed to where I am today.</p>

        <ul class='smaller'>
            {% assign sorted_books = site.data.books | sort: 'title' %}
            {% for book in sorted_books | sort book.title %}
                {% if book.display != false %}
                    <li>{{ book.title }} by {{ book.author }}</li>
                {% endif %}
            {% endfor %}
        </ul>

    </article>

    <article>
        <h3>About Site</h3>
        <p>
        Icons made by <a href='http://www.flaticon.com/authors/icomoon' title='Icomoon'>Icomoon</a> 
        and by
        <a href='http://www.flaticon.com/authors/simpleicon' title='SimpleIcon'>SimpleIcon</a>.
        <br />
        Designed by <a href='joshyoung.me/about'>me</a>. Running <a href='https://jekyllrb.com'>Jekyll</a>.
        </p>
    </article>
</div><!-- inner-section -->
</section>