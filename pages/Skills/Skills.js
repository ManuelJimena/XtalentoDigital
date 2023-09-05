import "./Skills.css";
import { cleanPage } from "../../utils/cleanPage";
export const Skills = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="skills" id="skills">
        <h2 class="heading"><span>My </span>Skills</h2>
        <div class="serv-content">
            <div class="card">
                <div class="box"> <i class='bx bx-code-alt'></i>
                    <div class="text">Web Development</div>
                    <p class="par-card">HTML5 | CSS3 | JavaScript | React</p>
                </div>
            </div>
            <div class="card">
                <div class="box"> <i class='bx bxs-data'></i>
                    <div class="text">Database</div>
                    <p class="par-card">Node.js | Express.js | Mongo DB</p>
                </div>
            </div>
            <div class="card">
                <div class="box"> <i class='bx bxs-wrench'></i>
                    <div class="text">Tools</div>
                    <p class="par-card"> Vite | Tailwind | Adobe Photoshop | Sony Vegas | GitHub</p>
                </div>
            </div>
        </div>
        </div>
        <div class="skills-icons">
        <div class="icons">
        <ul>
        <li><a href="https://es.wikipedia.org/wiki/HTML5" target="_blank"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459750/Portfolio/html5-logo-240_ozkbzy.png" alt="Html5 icon"></a></li>
        <li><a href="https://es.wikipedia.org/wiki/CSS" target="_blank"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459750/Portfolio/css3-logo-240_ytkblc.png" alt="Css3 icon"></a></li>
        <li><a href="https://es.wikipedia.org/wiki/JavaScript" target="_blank"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459750/Portfolio/javascript-logo-240._zvqvq1.png" alt="Javascript icon"></a></li>
        <li><a href="https://react.dev/" target="_blank"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459751/Portfolio/react-logo-240_c3dkda.png" alt="React icon"></a></li>
        <li><a href="https://nodejs.org/en" target="_blank"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459750/Portfolio/nodejs-logo-240_vkc0jd.png" alt="Nodejs icon"></a></li>
        <li><a href="https://expressjs.com/" target="_blank"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459750/Portfolio/Expressjs-logo-240_x1ioei.png" alt="Expressjs icon"></a></li>
        <li><a href="https://www.mongodb.com/es" target="_blank"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459751/Portfolio/mongodb-logo-240_hjrlyu.png" alt="Mongo db icon"></a></li>
        <li><a href="https://vitejs.dev/" target="_blank"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459751/Portfolio/vite-logo-240_y72ctj.png" alt="Vite icon"></a></li>
        <li><a href="https://tailwindcss.com/" target="_blank"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459751/Portfolio/tailwind-logo-240_tgxugk.png" alt="Tailwind icon"></a></li>
        <li><a href="https://www.adobe.com/en/products/photoshop/" target="_blank"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459750/Portfolio/photoshop-logo-240_daqlau.png" alt="Photoshop icon"></a></li>
        <li><a href="https://www.vegascreativesoftware.com/" target="_blank"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459751/Portfolio/vegas-logo-240_ueu8h0.png" alt="Sony vegas icon"></a></li>
        <li><a href="https://github.com/ManuelJimena" target="_blank"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459751/Portfolio/github-logo-240_kvziui.png" alt="Github icon"></a></li>
        </ul>
        </div>
        </div>
    </section>`;
};