import "./style.css";
import { pets } from "./wowie";

pets.forEach(
  (element) =>
    (document.querySelector("#one").insertAdjacentHTML = `<p>${element.name}</p>
    <img src="${element.url}" alt="">`)
);
