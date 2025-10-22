// // Get elements
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");

// // Calculator state
let currentInput = "";
let previousInput = "";
let operation = null;

// // Add click event to number buttons
numbers.forEach(button => {
    button.addEventListener("click", () => {
        const number = button.textContent;
        currentInput += number;
        display.value = currentInput;
    });
});

// Add click event to operation buttons
operations.forEach(button => {
    button.addEventListener("click", () => {
        const op = button.textContent;
        
        if (op === "C") {
            // Clear everything
            currentInput = "";
            previousInput = "";
            operation = null;
            display.value = "";
        } else if (op === "=") {
            // Calculate result
            if (previousInput && currentInput && operation) {
                const result = calculate(previousInput, currentInput, operation);
                display.value = result;
                currentInput = result.toString();
                previousInput = "";
                operation = null;
            }
        } else {
            // Store operation
            if (currentInput) {
                if (previousInput && operation) {
                    // Chain calculations
                    const result = calculate(previousInput, currentInput, operation);
                    previousInput = result.toString();
                    display.value = result;
                } else {
                    previousInput = currentInput;
                }
                currentInput = "";
                operation = op;
            }
        }
    });
});

// Calculate function
function calculate(num1, num2, op) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    
    switch(op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "×":
            return a * b;
        case "÷":
            return b !== 0 ? a / b : "Error";
        default:
            return 0;
    }
}