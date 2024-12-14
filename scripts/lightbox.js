// Open the Modal
function openModal() {
	document.getElementById("modal").style.display = "flex";
}

// Close the Modal
function closeModal() {
	document.getElementById("modal").style.display = "none";
	var video = document.getElementsByTagName("video");

	for (var i = 0; i < video.length; i++) {
		(function (vid) {
			vid.currentTime = 0;
			vid.pause();
		})(video[i]);
	}
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
	
	var video = document.getElementsByTagName("video");

	for (var i = 0; i < video.length; i++) {
		(function (vid) {
			vid.currentTime = 0;
			vid.pause();
		})(video[i]);
	}
}