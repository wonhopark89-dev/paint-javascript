// console.log(console);

function hello(name, age) {
  console.log("hello! ", name, " you have ", age, " years of age");
  console.log(`hello! ${name} you have ${age} years of age`);
}

hello("winn", "18");

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

console.log(calculator.plus(5, 6));

const title = document.getElementById("title");
console.log(title);
title.innerHTML = "hi from js";
console.log(title);
