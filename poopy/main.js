import "./style.css";
import { pets } from "./wowie";

const div = document.getElementById("one");

pets.forEach((element) =>
  div.insertAdjacentHTML(
    "afterend",
    `<p>${element.name}</p> <img src="${element.url}" alt="">`
  )
);
