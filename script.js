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

// This function shows one photo and hides the rest
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // If we go past the last photo, go back to the first photo
  if (n > slides.length) {
    slideIndex = 1;
  }

  // If we go before the first photo, go to the last photo
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all the photos
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Turn off all the dots
  for (var j = 0; j < dots.length; j++) {
    dots[j].className = "dot";
  }

  // Show the photo we want and turn on its dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className = "dot active";
}