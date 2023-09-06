import "./Colaboradores.css";
import { cleanPage } from "../../utils/cleanPage";
export const Colaboradores = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="colaboradores" id="colaboradores">
    </section>`;
};