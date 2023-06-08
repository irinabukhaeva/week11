let price1 = document.querySelector(".price1").textContent;
let price2 = document.querySelector(".price2").textContent;
let price3 = document.querySelector(".price3").textContent;
let price4 = document.querySelector(".price4").textContent;
let sum = document.querySelector(".sum");
let sumDiscount = document.querySelector(".sumDiscount");
const button = document.querySelector(".button");

sum.innerHTML = +price1 + +price2 + +price3 + +price4;

button.addEventListener("click", function () {
  sumDiscount.innerHTML = +sum.textContent * 0.8;
});
