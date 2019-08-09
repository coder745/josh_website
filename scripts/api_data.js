/* TODO: this needs to be cleaned up / add caching. */
(function() {
  if (typeof fetch === 'function') {
    fetch('https://api.github.com/users/joshayoung/repos')
    .then(function(response) {
      return response.json();
    })
    .then(function(the_results) {
      parseIt(the_results);
    });

    var parseIt = function(data) {
      var repos = [];
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

      var languages = {};

      for(var repo of repos) {
        var keys = Object.keys(languages);
        if (keys.includes(repo.language)) {
          languages[repo.language]++;
        } else {
          languages[repo.language] = 0;
        }
      }

      //Find WIPS:
      for(var repo of repos) {
        var url = repo.raw_url;
        var created_at = repo.created_at;
        var commits = url + "/commits?until=" + created_at.split("T")[0];
        debugger;
        fetch(commits)
        .then(function(resp) {
          return resp.json();
        })
        .then(function(results) {
          the_wips(results);
        });
      }

      var wips = [];
      function the_wips(results) {
        for (var i = 0; i < results.length; i++) {
          var repo = repos[i];
          var commit = results[i];
          if (commit.message.includes("WIP")) {
            wips.push({
              "message": commit.message
            })
          }
        }
      }

      var wip_commits = "";
      for (var i = 0; i < wips.length; i++) {
        wip_commits += "<li>" + wips[i].message + "</li>";
      }

      var formatted_data = "";
      for (var i = 0; i < 3; i++) {
        var repo = repos[i];
        formatted_data += "<li>" + repo.url + "</li>";
      }

      document.getElementById('wip_commits').innerHTML = wip_commits;
      document.getElementById('github_repos').innerHTML = formatted_data;
    };

    fetch('http://cpv2api.com/pens/public/joshayoung')
    .then(function(resp) {
      return resp.json();
    })
    .then(function(results) {
      parseIt2(results);
    });

    var parseIt2 = function(data) {
      var pens = [];
      var all_pens = data.data;
      for (var i = 0; i < all_pens.length; i++) {
        var pen = all_pens[i];
        pens.push({ 'url': "<a href='" + pen.link + "'>" + pen.title + "</a>" });
      }

      var formatted_dta = "";
      for (var i = 0; i < 3; i++) {
        var pen = pens[i];
        formatted_dta += "<li>" + pen.url + "</li>";
      }
      document.getElementById('codepen_pens').innerHTML = formatted_dta;
    };
  }
})();