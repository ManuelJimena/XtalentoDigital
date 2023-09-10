import "./Cursos.css";
import { cleanPage } from "../../utils/cleanPage";
import { cards } from "../../data/cards";
import { CursosCard } from "../../components/CursosCard/CursosCard";
export const Cursos = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<div class="cursos">
<h2>Cursos de formación</h2>
</div>
  <div class="tarjeta-container">

</div>

`;
const container = document.querySelector(".tarjeta-container");
for (const card of cards) {
const figure = document.createElement("figure");
figure.innerHTML = CursosCard(card);
container.appendChild(figure);
}
};