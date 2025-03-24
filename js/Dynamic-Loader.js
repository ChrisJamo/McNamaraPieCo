async function loadSection(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
        const content = await response.text();
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = content;
        } else {
            console.error(`Element with ID '${id}' not found`);
        }
        return true; // Return success indication
    } catch (error) {
        console.error(error.message);
        return false;
    }
}

function addPieSelectionListeners() {
    const addPieBtn = document.getElementById("add-pie");
    if (addPieBtn) {
        addPieBtn.addEventListener("click", function () {
            const container = document.getElementById("pie-selection-container");
            if (!container) {
                console.error("Pie selection container not found");
                return;
            }

            const newSelection = document.createElement("div");
            newSelection.classList.add("select-fields");

            newSelection.innerHTML = `
                <select required aria-label="Pie selection">
                    <option value="">Pick your pie</option>
                    <option value="apple">Apple Pie</option>
                    <option value="blueberry">Blueberry Pie</option>
                    <option value="cherry">Cherry Pie</option>
                    <option value="pecan">Pecan Pie</option>
                </select>
                <input type="number" min="1" value="1" required aria-label="Quantity" />
                <button type="button" class="remove-pie">Remove</button>
            `;

            container.appendChild(newSelection);
        });
    } else {
        console.error("Add pie button not found");
    }

    // Remove Pie Option - using event delegation
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-pie")) {
            event.target.parentElement.remove();
        }
    });
}

function addAnimation() {
    const scrollers = document.querySelectorAll('.scroller');
    scrollers.forEach((scroller) => {
        if (scroller.getAttribute("data-animated")) return; // Skip if already animated

        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (scrollerInner) {
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        }
    });
}

window.addEventListener('DOMContentLoaded', async () => {
    // Load all sections
    await Promise.all([
        loadSection('home', '../public/Layout/hero.html'),
        loadSection('products', '../public/Layout/product.html'),
        loadSection('about', '../public/Layout/aboutMe.html'),
        loadSection('features', '../public/Layout/features.html'),
        loadSection('order', '../public/Layout/orderForm.html'),
        loadSection('testimonials', '../public/Layout/testimonials.html')
    ]);

    // After all sections are loaded, add specific listeners and animations
    addPieSelectionListeners();

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }
});