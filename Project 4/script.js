// Get elements
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");

// Calculator state
let previousInput = ""
let currentInput = "";
let operation = "null";


// Add click event to number buttons
numbers.forEach(button => {
    button.addEventListener("click", () => {
        const number = button.textContent;
        button.textContent = currentInput;
        display.value = number;
    })
})

//Add click event for operations
operations.forEach(button => {
    button.addEventListener("click", () => {
        const operator = button.textContent;
        
        if (operator === "C") {
            previousInput = ""
            currentInput = "";
            operation = null;
            display.value = "";
        } 
        
    })
})

