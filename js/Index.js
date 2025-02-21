function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


function toggleHeading() {
const heading = document.getElementById("responsive-heading");
if (window.innerWidth <= 1000 && window.innerWidth >= 400) {
heading.style.display = "block";
heading.style.textAlign = "center";
heading.style.fontSize = "32px";
heading.style.color = "#5B2245";
heading.style.fontWeight = "bold";
heading.style.marginTop = "20px";
heading.style.padding = "10px";
heading.style.width = "80%";
heading.style.margin = "20px auto";
} else {
heading.style.display = "none";
}
}

window.addEventListener("resize", toggleHeading);
toggleHeading(); // Run on page load

