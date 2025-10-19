const input = document.getElementById("input");
const add = document.getElementById("add");
const list = document.getElementById("list");

add.addEventListener("click", () => {
    const item = input.value;
    
    if (item.length > 0){
        const newItem = document.createElement("li");
        newItem.textContent = item;

        list.appendChild(newItem);
        input.value = " ";
    } else {
        alert("please enter an item");
    }    
})