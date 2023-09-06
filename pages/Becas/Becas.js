import "./Becas.css";
import { cleanPage } from "../../utils/cleanPage";
export const Becas = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="portfolio" id="portfolio">
<h2 class="heading">Latest <span>Project</span></h2>
<div class="portfolio-container"></div>
</section>`;
};