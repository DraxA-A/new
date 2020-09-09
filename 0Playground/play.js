var btn = document.querySelector('.mouse-cursor-gradient-tracking')
btn.onmousemove = function(e) {
  var x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft
  var y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop
  btn.style.setProperty('--x', x + 'px')
  btn.style.setProperty('--y', y + 'px')
}

var music = new Audio('Dlay_-_04_-_far_away_place.mp3');
music.play();