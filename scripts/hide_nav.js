(function() {
  document.getElementById('js_hide_main_nav').onclick = function() {
    document.getElementById('js_main_nav_wrap').className += ' slide-left';
    document.getElementById('main_content').getElementsByTagName('section')[0].style.paddingLeft = 0;
  };
}());