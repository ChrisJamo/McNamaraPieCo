function toggleMobileMenu(menu) {
	menu.classList.toggle("open");
}

function toggleHeading() {
	const heading = document.getElementById("responsive-heading");
	if (window.innerWidth <= 1024 && window.innerWidth >= 400) {
		heading.style.display = "block";
		heading.style.textAlign = "center";
		heading.style.fontSize = "32px";
		heading.style.color = "#5B2245";
		heading.style.fontWeight = "bold";
		heading.style.marginRight = "20px";
		heading.style.padding = "10px";
		heading.style.width = "80%";
		heading.style.margin = "0 auto";
	} else {
		heading.style.display = "none";
	}
}

window.addEventListener("resize", toggleHeading);
toggleHeading(); // Run on page load

const scrollers = document.querySelectorAll(".scroller");


const header = document.querySelector("header"); // Corrected selector
let prevScroll = window.scrollY ;

window.addEventListener("scroll", function () {
	let currentScrollPosition = window.scrollY;

	if (prevScroll < currentScrollPosition) {
		// Scrolling down: Hide header
		header.classList.add("scroll");
	} else {
		// Scrolling up: Show header
		header.classList.remove("scroll");
	}

	prevScroll = currentScrollPosition;
});

