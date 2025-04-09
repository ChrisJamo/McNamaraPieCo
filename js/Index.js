function toggleMobileMenu(menu) {
	menu.classList.toggle("open");
}

function toggleHeading() {
	const heading = document.getElementById("responsive-heading");
	if (window.innerWidth <= 1024 && window.innerWidth >= 420) {
		heading.style.display = "block";
		heading.style.textAlign = "center";
		heading.style.fontSize = "26px";
		heading.style.color = "#5B2245";
	} else {
		heading.style.display = "none";
	}
}

window.addEventListener("resize", toggleHeading);
toggleHeading(); // Run on page load



// Mohammad feature treats
// Scroll buttons functionality for the pie section
document.addEventListener("DOMContentLoaded", function () {
	const scrollContainer = document.querySelector(".pies-scroll-container");
	const leftBtn = document.querySelector(".left-btn");
	const rightBtn = document.querySelector(".right-btn");

	leftBtn.addEventListener("click", () => {
		scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
	});

	rightBtn.addEventListener("click", () => {
		scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
	});
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

// for the Feature section
setTimeout(() => {
	const scrollContainer = document.querySelector(".pies-scroll-container");
	const leftBtn = document.querySelector(".left-btn");
	const rightBtn = document.querySelector(".right-btn");

	if (!scrollContainer || !leftBtn || !rightBtn) {
		console.warn("Scroll elements not found!");
		return;
	}

	leftBtn.addEventListener("click", () => {
		scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
	});

	rightBtn.addEventListener("click", () => {
		scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
	});
}, 300); // Delay a bit to let Dynamic-Loader finish
function selectPie(pieName) {
	const pieSelect = document.getElementById('pie-selection');
	pieSelect.value = pieName;
}