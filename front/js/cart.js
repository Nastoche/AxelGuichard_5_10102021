import { renderCartPage } from "./render.js";

let savedProduct = JSON.parse(localStorage.getItem("product"));
let savedProductStr = JSON.stringify(savedProduct);

renderCartPage(savedProduct);

// console.log(savedProduct);
// console.log(savedProductStr);
