// JavaScript source code
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {

	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = x.length }
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" w3-red", "");
	}
	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " w3-red";
}