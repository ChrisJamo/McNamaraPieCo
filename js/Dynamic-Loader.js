async function loadSection(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
        const content = await response.text();
        document.getElementById(id).innerHTML = content;
    } catch (error) {
        console.error(error.message);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadSection('home', '../public/Layout/hero.html');
    loadSection('products', '../public/Layout/product.html');
    loadSection('about', '../public/Layout/aboutMe.html');
    loadSection('features', '../public/Layout/features.html');
    loadSection('order', '../public/Layout/orderForm.html');
    loadSection('testimonials', '../public/Layout/testimonials.html').then(() => {
        // Now apply the animation after loading testimonials
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation(); // Reapply animation after loading testimonials
        }
    });
});

function addAnimation() {
    // Select all elements with the class 'scroller'
    const scrollers = document.querySelectorAll('.scroller');

    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // Duplicate content to create an infinite loop effect
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}
