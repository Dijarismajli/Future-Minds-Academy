// Get all tab buttons and content divs
const tabButtons = document.querySelector(".tab-btn");
const tabContents = document.querySelector(".content");

// Function to update active tab
function updateActiveTab(index) {
    // Loop through all tabs to remove active classes
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
        tabContents[i].classList.remove("active");
    }

    // Add the active class to the current tab and its content
    tabButtons[index].classList.add("active");
    tabContents[index].classList.add("active");
}

// Add click event listeners using a for loop
for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", () => {
        updateActiveTab(i);
    });
}
