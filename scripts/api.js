export default class Api {
  constructor(git_hub_repos) {
    this.git_hub_repos = document.getElementById("github_repos");
    this.git_hub_tags = document.getElementById("github_tags");
  }

  getData(url) {
    let token = window.localStorage.getItem('token');
    return fetch(url
      ,{ headers: { 'Authorization': 'token ' + token }, }
    )
      .then((response) => {
        return response.json();
      });
  }

  test() {
    return "test";
  }

  addTag(tag, url) {
    tag.forEach((val) => {
      if (val.name == 'feature-complete') {
        this.git_hub_tags.innerHTML += "<li>" + url + "</li>";
        return;
      }
    });
  }

  async tags(data) {
    for (var i = 0; i < data.length; i++) {
      let results = await this.getData(data[i].tag);
      this.addTag(results, data[i].url)
    }
  }

  mostRecent(data) {
    var repos = [];
    for (var i = 0; i < data.length; i++) {
      var repo = data[i];
      repos.push({
        'url': "<a href='" + repo.html_url + "'>" + repo.name + "</a>",
        'name': repo.name,
        'raw_url': repo.url,
        'tag': repo.url + "/tags",
        'updated': repo.updated_at,
        'language': repo.language,
        'created_at': repo.created_at.split("T")[0]
      });
    }

    repos.sort(function(a, b) {
      return new Date(b.updated) - new Date(a.updated)
    });

    var formatted_data = "";
    for (var i = 0; i < 3; i++) {
      var repo = repos[i];
      formatted_data += "<li>" + repo.url + "</li>";
    }
    document.getElementById('github_repos').innerHTML = formatted_data;
    this.tags(repos)
  };

  repoActivity() {
    var data;
    if (typeof(this.git_hub_repos) != 'undefined' && this.git_hub_repos != null) {
      data = this.getData('https://api.github.com/users/joshayoung/repos', this.parseIt)
    }

    data.then((dta) => {
      this.mostRecent(dta)
    });
  }
};