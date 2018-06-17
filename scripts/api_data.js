/* TODO: this needs to be cleaned up / add caching. */
if (typeof fetch === 'function') {
  fetch('https://api.github.com/users/joshayoung/repos')
  .then(function(response) {
    return response.json();
  })
  .then(function(the_results) {
    parseIt(the_results)
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
    for (var i = 0; i < 5; i++) {
      repo = repos[i];
      formatted_data += "<li>" + repo.url + "</li>";
    }

    document.getElementById('github_repos').innerHTML = formatted_data;
  }
}