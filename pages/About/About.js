import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
export const About = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="about" id="about">
        <div class="about-img">
            <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690112543/Portfolio/about_ls0yhi.png" alt="Profile picture">
        </div>

        <div class="about-content">
            <h2 class="heading">About <span>Me</span></h2>
            <h3>Hi, let me share a glimpse of myself here!</h3>
            <p>I am a web development student with a strong passion for technology, video games, music, and cinema. My journey in the world of development has allowed me to explore my creativity and problem-solving skills.
            One of the things I truly enjoy is collaborating with others as part of a team, exchanging ideas, and collectively finding innovative solutions. Equally, I am comfortable working independently, as it gives me the space to concentrate and bring my best ideas to life.
            I have a curious mindset, and I find joy in constantly learning and pushing my boundaries to grow both personally and professionally. Every day is an opportunity for me to acquire new skills and knowledge.</p>
            <details class="btn"><summary>Read More</summary>
            <p>In addition to my technical abilities, I am known for being approachable and friendly. I believe in fostering a positive and harmonious work environment, where everyone feels comfortable sharing their thoughts and opinions.
            I am enthusiastic about the ever-evolving world of web development and look forward to contributing my skills and passion to create exciting digital experiences.</p>
            </details>
        </div>
    </section>`;
};
