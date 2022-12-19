import "./style.css";
import { pets } from "./wowie";

const DOMSelectors = {
  domdiv: document.getElementById("one"),
  redbutton: document.getElementById("red"),
  orangebutton: document.getElementById("orange"),
  normalbutton: document.getElementById("normal"),
  brownbutton: document.getElementById("brown"),
  graybutton: document.getElementById("gray"),
  darkbutton: document.getElementById("dark"),
  randombutton: document.getElementById("random"),
  lightbutton: document.getElementById("light"),
  bluebutton: document.getElementById("blue"),
  greenbutton: document.getElementById("green"),
};
function wowie() {
  let temp = pets
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  DOMSelectors.domdiv.innerHTML = "";
  temp.forEach((element) =>
    DOMSelectors.domdiv.insertAdjacentHTML(
      "beforeend",
      `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
    )
  );
}

wowie();

function redColor() {
  let temp = pets.filter((element) => element.color == "red");
  DOMSelectors.domdiv.innerHTML = "";
  temp.forEach((element) =>
    DOMSelectors.domdiv.insertAdjacentHTML(
      "beforeend",
      `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
    )
  );
}

function orangeColor() {
  let temp = pets.filter((element) => element.color == "orange");
  DOMSelectors.domdiv.innerHTML = "";
  temp.forEach((element) =>
    DOMSelectors.domdiv.insertAdjacentHTML(
      "beforeend",
      `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
    )
  );
}

function brownColor() {
  let temp = pets.filter((element) => element.color == "brown");
  DOMSelectors.domdiv.innerHTML = "";
  temp.forEach((element) =>
    DOMSelectors.domdiv.insertAdjacentHTML(
      "beforeend",
      `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
    )
  );
}

function grayColor() {
  let temp = pets.filter((element) => element.color == "gray");
  DOMSelectors.domdiv.innerHTML = "";
  temp.forEach((element) =>
    DOMSelectors.domdiv.insertAdjacentHTML(
      "beforeend",
      `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
    )
  );
}

function greenColor() {
  let temp = pets.filter((element) => element.color == "green");
  DOMSelectors.domdiv.innerHTML = "";
  temp.forEach((element) =>
    DOMSelectors.domdiv.insertAdjacentHTML(
      "beforeend",
      `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
    )
  );
}

DOMSelectors.darkbutton.addEventListener("click", function () {
  document.body.className = "dark";
});

DOMSelectors.lightbutton.addEventListener("click", function () {
  document.body.className = "light";
});

DOMSelectors.bluebutton.addEventListener("click", function () {
  document.body.className = "blue";
});

DOMSelectors.redbutton.addEventListener("click", redColor);
DOMSelectors.orangebutton.addEventListener("click", orangeColor);
DOMSelectors.normalbutton.addEventListener("click", wowie);
DOMSelectors.brownbutton.addEventListener("click", brownColor);
DOMSelectors.graybutton.addEventListener("click", grayColor);
DOMSelectors.greenbutton.addEventListener("click", greenColor);
