import "./style.css";
import { pets } from "./wowie";

function objectMaker(element) {
  let name = pets.element.name;
  return `<p>${name}</p>`;
}

document.querySelector("#one").innerHTML = `
<p>amongus</p>
`;
