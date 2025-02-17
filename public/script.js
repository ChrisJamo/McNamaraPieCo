document.addEventListener("DOMContentLoaded", function () {
	const navLinks = document.querySelectorAll(".nav-link");
	const navBar = document.querySelector(".navbar-nav");

	function updateUnderline() {
		const activeLink = document.querySelector(".nav-link.active");
		if (activeLink) {
			const rect = activeLink.getBoundingClientRect();
			const navbarRect = navBar.getBoundingClientRect();
			const offset = rect.left - navbarRect.left + rect.width / 2 - 25; // Adjust underline position

			navBar.style.setProperty("--underline-position", `${offset}px`);
		}
	}

	// Listen for scrolling to change active link
	window.addEventListener("scroll", () => {
		let currentSection = "";

		document.querySelectorAll("section").forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;

			if (pageYOffset >= sectionTop - sectionHeight / 3) {
				currentSection = section.getAttribute("id");
			}
		});

		navLinks.forEach((link) => {
			link.classList.remove("active");
			if (link.getAttribute("href").includes(currentSection)) {
				link.classList.add("active");
			}
		});

		updateUnderline();
	});

	// Update underline on page load
	updateUnderline();
});
