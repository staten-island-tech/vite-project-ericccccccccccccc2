import "./style.css";
import { pets } from "./wowie";

let domdiv = document.getElementById("one");
let redbutton = document.getElementById("red");

pets.forEach((element) =>
  domdiv.insertAdjacentHTML(
    "beforeend",
    `<div class = "help"><img class = "image" src="${element.url}" alt=""> <p class = "subtitles">${element.name}, ${element.price} dollars</p> </div>`
  )
);

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

redbutton.addEventListener("click", redColor);
