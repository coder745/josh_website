export default class Api {
  constructor() {

  }

  test() {
    return 'test';
  }

  getData(url, callback) {
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(results) {
      if(results) {
        callback(results);
      }
    });
  }

  repoActivity() {
    var repos = [];
    var github_repos = document.getElementById("github_repos");
    if (typeof(github_repos) != 'undefined' && github_repos != null) {
      var parseIt = function(data) {
        for (var i = 0; i < data.length; i++) {
          var repo = data[i];
          repos.push({
            'url': "<a href='" + repo.html_url + "'>" + repo.name + "</a>",
            'raw_url': repo.url,
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
      };
      this.getData('https://api.github.com/users/joshayoung/repos', parseIt)
    }
  }
}