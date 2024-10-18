const countDisplay = document.getElementById('countDisplay');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

// Initialize the count variable
let count = 0;

// Function to update the displayed count
function updateDisplay() {
    countDisplay.textContent = count;
}

// Increase the count when "Increase" button is clicked
increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

// Decrease the count when "Decrease" button is clicked
decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

// Reset the count to 0 when "Reset" button is clicked
resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});
