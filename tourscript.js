let dropdown = document.getElementById ("dropdown-content")
let drop = document.getElementById ("dropbutton")
drop.addEventListener("mouseout",(e)=>{ console.log(dropdown)
    dropdown.style.display = "none"
})
drop.addEventListener("mouseover",(e)=>{ console.log(dropdown)
    dropdown.style.display = "block"
})

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("carousel");
  var dots = document.getElementsByClassName("dot");
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
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}