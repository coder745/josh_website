# josh_website
This repository houses the code for my website: joshyoung.me. This site is built with Jekyll and hosted on GitHub pages.

# Setup:
- This steps are listed here as notes for me when I setup a new computer.
- Install [Ruby](https://www.ruby-lang.org/en/documentation/installation).
- Then install [Jekyll](https://jekyllrb.com/docs/installation).
- Install Jekyll Sitemap with this comand: `gem install jekyll-sitemap`.
- Run `jekyll serve` to load a local version of the site.

# Setup pushing for GitHub Pages:
- In order to allow a `git push` to send the updated code to both the master branch and the gh-pages branch, add the following entries to your `~/.git/config` file below the `fetch` entry in the `[remote origin]` section.
    - push = +refs/heads/master:refs/heads/gh-pages
    - push = +refs/heads/master:refs/heads/master