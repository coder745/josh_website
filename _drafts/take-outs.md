<article>
  <a name='books'></a>
  <h3 id='books_ive_read'>Books I've Read</h3>
  <p id='books_ive_read_description'>Frequently, I try to delve deeper into specific aspects of tech that I want to learn more about. I find that buying a book about a particular technology can be a beneficial deep-dive experience. Below I have listed some of the books I have read over the years which have contributed to where I am today (listed in alphabetical order).</p>
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

{% if page.title == 'Home' %}
  <div class='inner'>
    <h3>What I'm Saying</h3>
    <p>
      {% for post in site.posts limit:1 %}
        <a href='{{ post.url }}'>
          {{ post.excerpt | strip_html | truncatewords:10 }}
        </a>
      {% endfor %}
    </p>
  </div>
{% endif %}