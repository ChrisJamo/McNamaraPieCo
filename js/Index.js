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
let prevScroll = window.scrollY;

// Mouse hover detection to bring back the header when hovering near the top of the screen
document.addEventListener("mousemove", function (event) {
	if (event.clientY < 50) {
		// If mouse is within 50px from the top
		header.classList.remove("scroll"); // Remove scroll class to show header
	}
});

//For NavBar effect
document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll("section[id]");
	const navLinks = document.querySelectorAll("nav ul li a");

	// Update active link based on scroll position
	window.addEventListener("scroll", () => {
		let current = "";

		sections.forEach((section) => {
			const sectionTop = section.offsetTop - 100; // offset for header
			if (scrollY >= sectionTop) {
				current = section.getAttribute("id");
			}
		});

		navLinks.forEach((a) => {
			a.classList.remove("active");
			if (a.getAttribute("href").substring(1) === current) {
				a.classList.add("active");
			}
		});
	});

	// Add active class on click
	navLinks.forEach((link) => {
		link.addEventListener("click", function () {
			navLinks.forEach((nav) => nav.classList.remove("active"));
			this.classList.add("active");
		});
	});
});
