(function() {
  document.getElementById('js_hide_main_nav').onclick = function() {
    document.getElementById('js_main_nav_wrap').className += ' slide-left';
    document.getElementById('main_content').getElementsByTagName('section')[0].style.paddingLeft = 0;
  };

  window.onload = function() {
    var skillTable = document.querySelectorAll('.skill-spectrum');
    if (document.querySelectorAll('.skill-spectrum').length > 0) {
      skillTable[0].onclick = function(e) {
        if (e.target.tagName == "LI") {
          e.target.style.backgroundColor = "#000";
          e.target.style.color = "#fff";
        }
      };
    };
  };
}());