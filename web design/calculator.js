// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';  // Clear the display
}

function calculate() {
    try {
        // Evaluate the expression inside the display
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';  // If the expression is invalid
    }
}
