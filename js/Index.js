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


//nav dessapeared on scrolling
let lastScrollTop = 0;
const navbar = document.querySelector("header");

window.addEventListener("scroll", function () {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	if (scrollTop > lastScrollTop) {
		// Scrolling down -> Hide navbar
		navbar.style.top = "-100px";
	} else {
		// Scrolling up -> Show navbar
		navbar.style.top = "0";
	}

	lastScrollTop = scrollTop;
});
