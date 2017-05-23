var scroll_site_top = function() {
  scrollUpSlowly();
};

function scrollUpSlowly() {
  if (window.scrollY !== 0) {
    setTimeout(function() {
      window.scrollTo(0, (window.scrollY - 30));
      scrollUpSlowly();
    }, 30)
  }
}

var open_search = document.getElementById('open_search'),
  close_search = document.getElementById('close_search'),
  search_cont = document.getElementById('search_cont'),
  go_to_top = document.getElementById('go_to_top');

go_to_top.href = '#0';

open_search.onclick = function() {
  search_cont.className = 'search_area open';
  document.getElementById('search_box').getElementsByTagName('input')[0].focus();
}

close_search.onclick = function() {
  search_cont.className = 'search_area close';
}

go_to_top.onclick = function(e) {
  this.href = '';
  e.preventDefault();
  scroll_site_top();
}

//Adopted from: http://kushagragour.in/blog/2015/06/search-in-jekyll-blog/

var xmlhttp=new XMLHttpRequest();
xmlhttp.open('GET', '/feed.xml');
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState != 4) return;
  if (xmlhttp.status != 200 && xmlhttp.status != 304) { return; }

  // Create a DOM out of the XML string.
  var node = (new DOMParser).parseFromString(xmlhttp.responseText, 'text/xml');
    node = node.childNodes[0];
    posts = xmlToJson(node).channel.item;
}
xmlhttp.send();


function xmlToJson(xml) {
  // Create the return object
  var obj = {};
  if (xml.nodeType == 3) { // text
    obj = xml.nodeValue;
  }

  // do children
  // If just one text node inside
  if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
    obj = xml.childNodes[0].nodeValue;
  }
  else if (xml.hasChildNodes()) {
    for(var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof(obj[nodeName]) == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof(obj[nodeName].push) == "undefined") {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
}

document.querySelector('#search_box').addEventListener('input', onInputChange);

function onInputChange(e) {
  var currentInputValue = e.target.value,
    date;

  // We ignore input of less than 3 characters in length.
  if (!currentInputValue || currentInputValue.length < 3) {
    return;
  }

  // Filter out all posts that have entered string in their
  // title or description.
  var matchingPosts = posts.filter(function (post) {
    if (post.title.indexOf(currentInputValue) !== -1 || post.description.indexOf(currentInputValue) !== -1) {
      return true;
    }
  });

  var search_input = document.querySelector('#search_results');
  search_input.className = 'show';

  if (matchingPosts.length > 0) {
    search_input.innerHTML = matchingPosts.map(function (post) {
      date = new Date(post.pubDate);
      return '<a href="' + post.url + '">' + post.title + ' - ' + date.toUTCString().replace(/.*(\d{2})\s+(\w{3})\s+(\d{4}).*/,'$2 $1, $3') + '</a>';
    }).join('');
  } else {
    search_input.innerHTML = "<a href=''>No Results Found</a>";
  }
}