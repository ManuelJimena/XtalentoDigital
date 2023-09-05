import "./Projects.css";
import { cleanPage } from "../../utils/cleanPage";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
export const Projects = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="portfolio" id="portfolio">
<h2 class="heading">Latest <span>Project</span></h2>
<div class="portfolio-container"></div>
</section>`;
const container = document.querySelector(".portfolio-container");
for (const project of projects) {
const figure = document.createElement("figure");
figure.innerHTML = ProjectCard(project);
container.appendChild(figure);
}
};