import "./ProjectCard.css";
export const ProjectCard = (project) => `
<div class="portfolio-box">
      <img src=${project.image} alt=${project.title}/>
    <div class="portfolio-layer">
      <h4>${project.title}</h4>
      <p>${project.description}</p>
        <div id="portfolio-links">
            <a href=${project.github} target="_blank" ><i class='bx bxl-github'></i></a>
            <a href=${project.link} target="_blank" ><i class='bx bx-link-external'></i></a>
        </div>
        <p id="tech">${project.tech.join(" - ")}</p>
    </div>
</div>
`;