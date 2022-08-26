"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMITTED!");
    const newTodoText = input.value;
    const newLI = document.createElement("LI");
    newLI.append(newTodoText);
    list === null || list === void 0 ? void 0 : list.append(newLI);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
