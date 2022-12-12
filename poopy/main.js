import "./style.css";
import { pets } from "./wowie";

let domdiv = document.getElementById("one");
let redbutton = document.getElementById("red");
let orangebutton = document.getElementById("orange");
let normalbutton = document.getElementById("normal");
let brownbutton = document.getElementById("brown");
let graybutton = document.getElementById("gray");
let whitebutton = document.getElementById("white");
let nonanimal = document.getElementById("animalOrNah");

function wowie() {
  domdiv.innerHTML = "";
  pets.forEach((element) =>
    domdiv.insertAdjacentHTML(
      "beforeend",
      `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
    )
  );
}

wowie();

function redColor() {
  let temp = pets.filter((element) => element.color == "red");
  domdiv.innerHTML = "";
  temp.forEach((element) =>
    domdiv.insertAdjacentHTML(
      "beforeend",
      `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
    )
  );
}

function orangeColor() {
  let temp = pets.filter((element) => element.color == "orange");
  domdiv.innerHTML = "";
  temp.forEach((element) =>
    domdiv.insertAdjacentHTML(
      "beforeend",
      `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
    )
  );
}

function brownColor() {
  let temp = pets.filter((element) => element.color == "brown");
  domdiv.innerHTML = "";
  temp.forEach((element) =>
    domdiv.insertAdjacentHTML(
      "beforeend",
      `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
    )
  );
}

function grayColor() {
  let temp = pets.filter((element) => element.color == "gray");
  domdiv.innerHTML = "";
  temp.forEach((element) =>
    domdiv.insertAdjacentHTML(
      "beforeend",
      `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
    )
  );
}

redbutton.addEventListener("click", redColor);
orangebutton.addEventListener("click", orangeColor);
normalbutton.addEventListener("click", wowie);
brownbutton.addEventListener("click", brownColor);
graybutton.addEventListener("click", grayColor);
