button_topo = document.getElementById("topo");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button_topo.style.display = "block";
  } else {
    button_topo.style.display = "none";
  }
}

function subir() {
  document.body.scrollTop = 0; //safari
  document.documentElement.scrollTop = 0; //  Chrome, Firefox, IE and Opera
}
