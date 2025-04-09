// Load external HTML content into a section by ID
async function loadSection(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok)
            throw new Error(`Failed to load ${file}: ${response.status}`);
        const content = await response.text();
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = content;
        } else {
            console.error(`Element with ID '${id}' not found`);
        }
        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    }
}

// Add pie selection and removal logic
function addPieSelectionListeners() {
    const addPieBtn = document.getElementById("add-pie");
    if (addPieBtn) {
        addPieBtn.addEventListener("click", () => {
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
                    <option value="Coconut Cream Pie">Coconut Cream Pie</option>
                    <option value="Chocolate Cream Pie">Chocolate Cream Pie</option>
                    <option value="Pecan Pie">Pecan Pie</option>
                    <option value="Key Lime Pie">Key Lime Pie</option>
                    <option value="Banana Cream Pie">Banana Cream Pie</option>
                    <option value="Lemon Meringue Pie">Lemon Meringue Pie</option>
                    <option value="Salted Caramel Apple">Salted Caramel Apple</option>
                    <option value="Mixed Berries">Mixed Berries</option>
                    <option value="Cherry Pie">Cherry Pie</option>
                    <option value="Strawberry Pie">Strawberry Pie</option>
                    <option value="Blueberry Pie">Blueberry Pie</option>
                    <option value="Pumpkin Pie">Pumpkin Pie</option>
                </select>
                <input type="number" min="1" value="1" required aria-label="Quantity" />
                <button type="button" class="remove-pie">Remove</button>
            `;

            container.appendChild(newSelection);
        });
    }

    // Event delegation for removing pie options
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-pie")) {
            event.target.parentElement.remove();
        }
    });
}

// Add scrolling animation to scroller elements TESTIMONIALS section
function addAnimation() {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
        if (scroller.getAttribute("data-animated")) return;

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

// Add scroll button functionality to feature section
function addFeatureScrollListeners() {
    const scrollContainer = document.querySelector(".pies-scroll-container");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    if (!scrollContainer || !leftBtn || !rightBtn) {
        console.warn("Feature scroll elements not found.");
        return;
    }

    leftBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
    });
}

// Load all layout sections and initialize interactions
window.addEventListener("DOMContentLoaded", async () => {
    const results = await Promise.all([
        loadSection("home", "../public/Layout/hero.html"),
        loadSection("products", "../public/Layout/product.html"),
        loadSection("about", "../public/Layout/aboutMe.html"),
        loadSection("features", "../public/Layout/features.html"),
        loadSection("order", "../public/Layout/orderForm.html"),
        loadSection("testimonials", "../public/Layout/testimonials.html"),
    ]);

    const [
        homeLoaded,
        productsLoaded,
        aboutLoaded,
        featuresLoaded,
        orderLoaded,
        testimonialsLoaded,
    ] = results;

    // Initialize features section interactions
    if (featuresLoaded) {
        addFeatureScrollListeners();
    }

    // Initialize order form interactions
    if (orderLoaded) {
        addPieSelectionListeners();
    }

    // Initialize animation if allowed
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }
});
