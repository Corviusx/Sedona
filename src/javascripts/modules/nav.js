module.exports = "It works from content.js.";

var nav = document.getElementById('navigation');
var hamburger = document.getElementById('hamburger');
var closebutton = document.getElementById('closebutton');
hamburger.addEventListener("click", openclose);


function openclose() {
  if (nav.style.display == 'none') {
    nav.style.display ='flex';
  } else {
    nav.style.display ='none';
  }
}
