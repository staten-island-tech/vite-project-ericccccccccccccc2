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
};

function wowie() {
  DOMSelectors.domdiv.innerHTML = "";
  pets.forEach((element) =>
    DOMSelectors.domdiv.insertAdjacentHTML(
      "beforeend",
      `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
    )
  );
  document.body.classList.remove("dark");
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

DOMSelectors.darkbutton.addEventListener("click", function () {
  document.body.classList.add("dark");
});

DOMSelectors.redbutton.addEventListener("click", redColor);
DOMSelectors.orangebutton.addEventListener("click", orangeColor);
DOMSelectors.normalbutton.addEventListener("click", wowie);
DOMSelectors.brownbutton.addEventListener("click", brownColor);
DOMSelectors.graybutton.addEventListener("click", grayColor);
DOMSelectors.randombutton.addEventListener("click", function () {
  let temp = pets
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  console.log(temp);
  DOMSelectors.domdiv.innerHTML = "";
  temp.forEach((element) =>
    DOMSelectors.domdiv.insertAdjacentHTML(
      "beforeend",
      `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
    )
  );
});
