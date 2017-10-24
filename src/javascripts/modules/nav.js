var hamburger = document.getElementById('hamburger');
var closebutton = document.getElementById('closebutton');
var nav = document.getElementsByClassName('nav__hidden');


function openclose() {
  var i = 0;
  for (i = 0; i < nav.length; i++) {
    var openDropdown = nav[i];
    if (openDropdown.classList.contains('nav__show')) {
      openDropdown.classList.remove('nav__show');
    } else {
      openDropdown.classList.toggle("nav__show");
    }
  }
}

hamburger.addEventListener("click", openclose);
closebutton.addEventListener("click", openclose);
