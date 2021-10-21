import { renderCartPage } from "./render.js";

let savedProduct = JSON.parse(localStorage.getItem("product"));
renderCartPage(savedProduct);

console.log(savedProduct);
