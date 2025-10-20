const negative = document.getElementById("negative");//get the negative button
const positive = document.getElementById("positive");//get positive button
const input = document.getElementById("input");//get the input field

let i = 0;//initiate counter for the input field
input.value = i;


negative.addEventListener("click", e => {
    e.preventDefault();//prevent default actions
    i--;
    input.value = i;
})

positive.addEventListener("click", e => {
    e.preventDefault();
    i++;
    input.value = i
    
})

