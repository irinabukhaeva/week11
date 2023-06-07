let price1 = document.querySelector(".price1");
let price2 = document.querySelector(".price2");
let price3 = document.querySelector(".price3");
let price4 = document.querySelector(".price4");
let sum = document.querySelector(".sum");
let sumDiscount = document.querySelector(".sumDiscount");
const button = document.querySelector(".button");

sum.innerHTML =
  Number(price1) + Number(price2) + Number(price3) + Number(price4);

button.addEventListener("click", function () {
  sumDiscount.innerHTML = Number(sum) * Number(0.8);
});

console.log(price1);
console.log(price2);
console.log(price3);
console.log(price4);
console.log(sum);
console.log(sumDiscount);
