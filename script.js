// slideIndex is the number of the photo we are showing (start at photo 1)
var slideIndex = 1;
showSlides(slideIndex);

// Called by the next and previous buttons (1 = next, -1 = previous)
function plusSlides(n) {
  slideIndex = slideIndex + n;
  showSlides(slideIndex);
}

// Called by the dots (n is the photo number)
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

// Shows one photo and hides the rest
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (var i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
  for (var j = 0; j < dots.length; j++) { dots[j].className = "dot"; }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className = "dot active";
}