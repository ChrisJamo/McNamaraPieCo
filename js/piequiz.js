document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("whipped-slider");
    const output = document.getElementById("whipped-value");

    function updateSliderBackground(value) {
        const min = parseInt(slider.min);
        const max = parseInt(slider.max);
        const percentage = ((value - min) / (max - min)) * 100;

        slider.style.background = `linear-gradient(to right, #a788ce 0%, #a788ce ${percentage}%, #e3d6f4 ${percentage}%, #e3d6f4 100%)`;
    }

    if (slider && output) {
        output.textContent = slider.value;
        updateSliderBackground(slider.value);

        slider.addEventListener("input", function () {
            output.textContent = this.value;
            updateSliderBackground(this.value);
        });
    }
});

function calculatePie() {
    let piePoints = {
        "Pumpkin Pie": 0,
        "Apple Crumble": 0,
        "Pecan Pie": 0,
        "Chocolate Cream Pie": 0,
        "Banana Cream Pie": 0,
        "Coconut Cream Pie": 0,
        "Strawberry Pie": 0,
        "Raspberry Pie": 0,
        "Mixed Berry Pie": 0,
        "Blueberry Pie": 0,
        "Cherry Pie": 0,
        "Salted Caramel Apple Pie": 0,
        "Lemon Meringue Pie": 0,
        "Key Lime Pie": 0
    };

    const form = document.forms["quiz-form"];
    const comfort = form["comfort"].value;
    const mood = form["mood"].value;
    const chocolate = form["chocolate"].value;
    const ingredient = form["ingredient"].value;
    const season = form["season"].value;
    const taste = form["taste"].value;
    const whipped = parseInt(document.getElementById("whipped-slider").value);

    // ✅ Validation: Ensure all fields are answered
    if (
        comfort === "" ||
        mood === "" ||
        chocolate === "" ||
        ingredient === "" ||
        season === "" ||
        taste === "" ||
        isNaN(whipped)
    ) {
        alert("⚠️ You must fill out the entire quiz before seeing your pie match.");
        return;
    }

    if (ingredient === "apples") {
        piePoints["Apple Crumble"] += 5;
        piePoints["Salted Caramel Apple Pie"] += 4;
    }

    if (season === "fall") {
        piePoints["Pumpkin Pie"] += 1;
        piePoints["Apple Crumble"] += 1;
        piePoints["Pecan Pie"] += 1;
    }

    if (comfort === "chocolate") {
        piePoints["Chocolate Cream Pie"] += 1;
    }

    if (comfort === "creamy") {
        piePoints["Banana Cream Pie"] += 1;
        piePoints["Coconut Cream Pie"] += 1;
        piePoints["Chocolate Cream Pie"] += 1;
    }

    if (ingredient === "berries") {
        piePoints["Strawberry Pie"] += 5;
        piePoints["Raspberry Pie"] += 5;
        piePoints["Mixed Berry Pie"] += 5;
        piePoints["Blueberry Pie"] += 5;
        piePoints["Cherry Pie"] += 3;
    }

    // BASSAM - ADD THIS.
    if (ingredient === "coconut") {
        piePoints["Coconut Cream Pie"] += 5;
    }

    if (taste === "salty") {
        piePoints["Salted Caramel Apple Pie"] += 1;
    }

    if (taste === "sweet" || taste === "both") {
        piePoints["Salted Caramel Apple Pie"] += 1;
    }

    if (taste === "sweet") {
        piePoints["Chocolate Cream Pie"] += 2;
        piePoints["Banana Cream Pie"] += 2;
        piePoints["Coconut Cream Pie"] += 2;
    }

    // BASSAM - ADD THIS.
    if (comfort === "sticky") {
        piePoints["Salted Caramel Apple Pie"] += 3;
        piePoints["Pecan Pie"] += 2;
    }

    // BASSAM - ADD THIS TOO.
    if (ingredient === "citrus") {
        piePoints["Lemon Meringue Pie"] += 5;
        piePoints["Key Lime Pie"] += 5;
    }

    if (whipped >= 8) {
        piePoints["Chocolate Cream Pie"] += 3;
        piePoints["Banana Cream Pie"] += 3;
        piePoints["Coconut Cream Pie"] += 3;
    } else if (whipped <= 4) {
        piePoints["Apple Crumble"] += 3;
        piePoints["Pecan Pie"] += 3;
    }

    if (chocolate === "no") {
        delete piePoints["Chocolate Cream Pie"];
    }

    let bestPie = "";
    let maxPoints = 0;

    for (let pie in piePoints) {
        if (piePoints[pie] > maxPoints) {
            maxPoints = piePoints[pie];
            bestPie = pie;
        }
    }

    const price = (bestPie === "Key Lime Pie" || bestPie === "Pecan Pie") ? 30 : 25;

    document.getElementById("pie-match").textContent = bestPie;
    document.getElementById("pie-price").textContent = price.toFixed(2);
    document.getElementById("result").classList.remove("hidden");
}

// BASSAM!!!!!!!!!!! I FIXED THIS.
function orderPie(event) {
    event.preventDefault(); // prevent form from submitting and reloading

    const pie = document.getElementById("pie-match").textContent;
    alert(`Taking you to the order form so you can order: ${pie}`);

    setTimeout(() => {
        window.location.href = "index.html#order";
    }, 100);
}

// ✅ Exit button functionality - BASSAM!!!!!!!! THIS EXIT BUTTON SHOULD BRING YOU BACK TO INDEX.HTML.
function exitQuiz() {
    window.location.href = "index.html";
}
