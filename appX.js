const aboutButton = document.getElementById('show-about');
const aboutContainer = document.getElementById('about-panel');
aboutButton.addEventListener('mouseenter',showAB);
aboutButton.addEventListener('mouseout',hideAB);
function showAB() {
  aboutContainer.style.visibility = "visible";
}
function hideAB() {
  aboutContainer.style.visibility = "hidden";
}


