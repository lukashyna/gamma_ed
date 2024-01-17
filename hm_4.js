const body = document.querySelector("body");
const input = document.querySelector("#your-color");
const btn = document.querySelector(".btn");

function changeColor(background) {
  body.style.backgroundColor = background;
}

btn.addEventListener("click", () => changeColor(input.value));
