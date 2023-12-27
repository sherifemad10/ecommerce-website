let wome = document.querySelector(".wome");
let womens = document.querySelector(".womens");
wome.onmouseover = function () {
    womens.classList.add("active");
}
womens.onmousemove = function () {
    womens.classList.add("active");
}
womens.onmouseout = function () {
    womens.classList.remove("active");
}
//////////////////////////////////////////

// menu
let menu = document.getElementById("menu");
let close1 = document.getElementById("close1");
let nav1 = document.querySelector(".nav1")

menu.onclick = function () {
    nav1.classList.add("appear");
   menu.style.display="none";
   close1.style.display="flex";
}


close1.onclick = function () {
    nav1.classList.remove("appear");
    close1.style.display="none";
    menu.style.display="flex";

}
///////////////////////////////////////////
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
