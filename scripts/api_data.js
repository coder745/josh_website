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
          'updated': repo.updated_at
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