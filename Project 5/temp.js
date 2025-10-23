//get input elements
const celsiusInput = document.getElementById("celsius");
const kelvinInput = document.getElementById("kelvin");

//get convert button
const convertButton = document.getElementById("convert");
const resetButton = document.getElementById("reset");
const swapButton = document.getElementById("swap");

//convert celsius to kelvin
convertButton.addEventListener("click", (e) => {
    e.preventDefault();

    //store input values
    const celsiusValue = parseFloat(celsiusInput.value);
    const kelvinValue = celsiusValue + 273.15;

    //display output values
    kelvinInput.value = kelvinValue;
}); 

//reset button
resetButton.addEventListener("click", (e) => {
    e.preventDefault();

    //clear input values
    celsiusInput.value = "";
    kelvinInput.value = "";
});
