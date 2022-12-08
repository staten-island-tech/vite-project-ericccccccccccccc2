import "./style.css";
import { pets } from "./wowie";

let domdiv = document.getElementById("one");

pets.forEach((element) =>
  domdiv.insertAdjacentHTML(
    "afterend",
    `<p class = "subtitles">${element.name}, ${element.price} dollars</p> <img class = "image" src="${element.url}" alt="">`
  )
);
