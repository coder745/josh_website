---
layout: defaults
title: About
description: About Josh Young and his job, hobbies, podcasts, and books. About this site.
permalink: /me
weight: 40
---

<section>
  <div class='inner-section'>
  <h2>About Me</h2>

  <article>
    <p>My name is Josh Young. I am a web developer living and working in Huntsville, Alabama. I enjoy all things tech related. I am not a huge blogger, but I enjoy writing small posts about what I am currently working with or technologies that I am using. Maybe something I say here will help someone in their journey; or at the very least provide a central place for me to document what I have learned when working through new projects.</p>
  </article>

  <article>
    <h3>My Job</h3>
    <p>For my day job, I maintain web applications, websites, other apps for my employer, 
    <a href='https://www.hsvutil.org'>Huntsville Utilities</a>. Most of the work I do is internal to the company and not hosted publicly. In a typical day I work primarily with PHP, HTML, CSS, JavaScript and their accompanying technologies such as build tools, testing frameworks, and the like.</p>
    <p>As opportunities are provided, I am always open to using additional languages and technologies. Over my time at Huntsville Utilities, I have had the opportunity to work with other technologies such as Objective-C, C#, ASP.NET and Python. On the <a href='/resume'>Resume</a> portion of this site, I have listed some of my job duties in more detail.</p>
  </article>

  <article>
    <a name='hobbies'></a>
    <h3>Hobbies</h3>
    <p>Many of my hobbies relate to technology and development. I enjoy coding and designing web applications and web sites. When it comes to web development, I enjoy the whole stack from front end to back end. Therefore, I spend a significant amount of my free time keeping up with and learning the latest languages and frameworks. When possible, I try to implement this additional knowledge into the software stack that I use.</p>
    <p>I also spend a lot of time maintaining my home network, firewall, fileserver, git server, among other open-source applications. I enjoy Linux and FreeBSD so I spend time configuring these systems in my free time as well. As evident by some of my certifications and training, I also dabble in computer security. I find the subject interesting. A good working knowledge of computer security and specifically web application security is very helpful as a web developer. If I am not working on servers or code, I spend my time playing my harmonica, biking, reading, or researching nutrition.</p>
  </article>

  <article>
    <a name='podcasts'></a>
    <h3 id='recommended_podcasts'>Recommended Podcasts</h3>
    <p id='recommended_podcasts_description'>Below I have listed the tech podcasts that I listen to on a weekly basis. They are a great way to keep up with the latest changes in development. Hopefully this list will introduce a good podcast to someone who enjoys learning and keeping up with the latest changes in tech.</p>
    <p>Yes, I listen to a lot of podcasts. Actually, I listen to some other non-technological podcasts that I did not list here. If you use a podcast app such as <a href='https://overcast.fm'>Overcast</a> and listen on a faster speed, you will be surprised by how much information you can take in quickly!</p>

    <ul aria-labelledby='recommended_podcasts' aria-describedby='recommended_podcasts_description' class='smaller'>
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
    <h3 id='books_ive_read'>Books I've Read</h3>
    <p id='books_ive_read_description'>Frequently, I try to delve deeper into specific aspects of tech that I want to learn more about. I find that buying a book about a particular technology can be a beneficial deep-dive experience. Below I have listed some of the books I have read over the years that have contributed to where I am today (listed in alphabetical order).</p>

    <ul aria-labelledby='books_ive_read' aria-describedby='books_ive_read_description' class='smaller books'>
    {% assign sorted_books = site.data.books | sort: 'title' %}
    {% for book in sorted_books %}
      {% if book.display != false %}
      <li>

      {% if book.short_title %}
        {{ book.short_title }} 
      {% else %}
        {{ book.title }} 
      {% endif %}

      {% if book.truncated_authors %}
         by {{ book.truncated_authors }} 
      {% elsif book.author != '' %}
        by <span>{{ book.author }}</span>
      {% else %}
      {% endif %}

      </li>
      {% endif %}
    {% endfor %}
    </ul>

  </article>

  <article>
    <h3>About Site</h3>
    <p>
    Icons made by <a href='http://www.flaticon.com/authors/icomoon' title='Icomoon'>Icomoon</a>,
    <a href="http://www.freepik.com" title="Freepik">Freepik</a>,
    <a href="http://www.flaticon.com/authors/agata-kuczminska" title="Agata Kuczminska">Agata Kuczminska</a>,
    and
    <a href='http://www.flaticon.com/authors/simpleicon' title='SimpleIcon'>SimpleIcon</a>.
    <br />
    Website designed by <a href='/me'>me</a>. Running <a href='https://jekyllrb.com'>Jekyll</a>.
    </p>
  </article>
  </div><!-- inner-section -->
</section>