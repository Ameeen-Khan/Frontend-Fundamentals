// 1. Change text on button click
const messageDiv = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
    messageDiv.textContent = "Text Changed!";
});

// --------------------------------------------------

// 2. Add a new list item dynamically
const list = document.getElementById("list");
const addItemBtn = document.getElementById("addItem");

let itemCount = 1;

addItemBtn.addEventListener("click", () => {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
});

// --------------------------------------------------

// 3. Remove an element from the DOM
const removeBtn = document.getElementById("removeBtn");
const removePara = document.getElementById("removeMe");

removeBtn.addEventListener("click", () => {
    removePara.remove();
});

// --------------------------------------------------

// 4. Display input value while typing
const inputBox = document.getElementById("inputBox");
const output = document.getElementById("output");

inputBox.addEventListener("input", (event) => {
    output.textContent = event.target.value;
});
