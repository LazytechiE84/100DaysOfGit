//definition of variables
class Info{
    constructor(weightInput, heightInput, bmiInput, getBmiButton, reset, para){
        this.weightInput = document.getElementById("weight");
        this.heightInput = document.getElementById("height");
        this.bmiInput = document.getElementById("bmi");
        this.getBmiButton = document.getElementById("getbmi");
        this.resetButton = document.getElementById("reset");
        this.para = document.createElement("p");
    }

    calculateBmi(weight, height){
        this.bmiInput.value = (weight / (height ** 2)).toFixed(2);
    }
    reset(){
        this.weightInput.value = "";
        this.heightInput.value = "";
        this.bmiInput.value = "";
    }
}


//create object
const info = new Info();
const {weightInput, heightInput, bmiInput, getBmiButton} = info;

// //click event for calculating BMI
getBmiButton.addEventListener("click", e => {
    e.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    
    // const bmi = weight / (height ** 2);
    info.calculateBmi(weight, height);
    
    if (weight > 0 && height > 0) {
        bmiInput.value = bmi.toFixed(4);
    }
})

reset.addEventListener("click", e => {
    e.preventDefault();

    info.reset();
})

