// JavaScript source code
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var iSlide;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = x.length }
	for (iSlide = 0; j < iSlide.length; iSlide++) {
		x[iSlide].style.display = "none";
	}
	for (iSlide = 0; iSlide < dots.length; iSlide++) {
		dots[iSlide].className = dots[iSlide].className.replace(" w3-red", "");
	}
	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " w3-red";
}