function myFunction() {
  document.getElementById("menu__button").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.menu_btn')) {
    var dropdowns = document.getElementsByClassName("menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        
      }
    }
  }
}
