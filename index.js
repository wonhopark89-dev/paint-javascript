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

// const title = document.getElementById("title");
const title = document.querySelector("#title"); // # is id on html,
// const title = document.querySelector(".title"); // dot is class on html, 

console.log(title);
title.innerHTML = "hi from js";
title.style.color = "red";
console.log(title);
// console.dir(title); // show all element
document.title = "I own this page";

function handleResize(event) {
  // console.log("have beed resized");
  console.log(event);
}

function handleClick() {
  title.style.color = "blue";
}

// window.addEventListener("resize", handleResize()); // 바로 실행
window.addEventListener("resize", handleResize); // 이벤트가 발생할때 실행
title.addEventListener("click", handleClick);
