import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<div id="slider-container">
<div id="slider">
			<div id="next" alt="Next" title="Next">
				<div class="arrow-right"></div>
			</div>
			<div id="prev" alt="Prev" title="Prev">				
				<div class="arrow-left"></div>
			</div>			

				<div class="slide">
					<div class="slide-copy">
						<h2><a href="/">XTalentoDigital ofrece un curso de programación para personas con autismo</a></h2>
					</div>
					<div class="img1"><a href="/">
          <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694195097/programadores-que-desarrollan-codigos-sus-computadoras_1_v7wmbd_lyjpdd.webp" alt="profesor ayudando al alumno" /></a></div>
				</div>
				
				<div class="slide">
					<div class="slide-copy">
						<h2><a href="/">Los nuevos cursos de Por Talento Digital te ayudan a mejorar tu perfil laboral</a></h2>
					</div>
					<div class="img2"><a href="/">
          <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694195097/vista-cerca-hacker_y67yth_kg7m6w.webp" alt="alumno escribiendo con el teclado" /></a></div>
				</div>
				
				<div class="slide">
					<div class="slide-copy">
						<h2><a href="/">Conviértete en un experto en desarrollo web</a></h2>
					</div>
					<div class="img3"><a href="/">
          <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694195097/encendido-computadora-portatil-gris_egxcjo_wkuf0c.webp" alt="pantalla con código de programación" /></a></div>
				</div>
				
				<div class="slide">
					<div class="slide-copy">
						<h2><a href="/">Inscríbite en este curso de diseño gráfico nivel avanzado</a></h2>
					</div>
					<div class="img4"><a href="/">
          <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694195097/editar-concepto-graficos-diseno-plantillas-software_w5jx7q_ccib8w.webp" alt="ordenador para trabajar" /></a></div>
				</div>
				
				<div class="slide">
					<div class="slide-copy">
						<h2><a href="/">¿Quieres convertirte en influencer?</a></h2>
					</div>
					<div class="img5"><a href="/">
          <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693932015/Xtalentodigital/whatsapp_image_2023-06-14_at_12.21.42_pm_idkdog.jpg" alt="decorado para grabar" /></a></div>
				</div>

      </div></div>
















  <div class="panelcontent">
  <div class="panelcontent-left">
  <h3>¿Qué es el Programa Por Talento Digital?</h3>
  <p><strong>Por Talento Digital es un programa de formación permanente en competencias digitales y profesiones tecnológicas de la <a href="https://www.fundaciononce.es" target="_blank" title="Abre en ventana nueva web Fundación ONCE">Fundación ONCE</a> </strong> orientado a la adquisición de conocimientos y cualificación tecnológica y digital de las personas con discapacidad para favorecer así su inclusión laboral en profesiones con alta demanda en el mercado de trabajo, multiplicando de esta forma sus perspectivas profesionales.</p>
  </div>
  <div class="panelcontent-right"><img alt="imagen de un pc" src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693931907/Xtalentodigital/banner_home_cujp1e.png" /><div class="convocatoria"><h3>II Convocatoria de becas</h3><p>¡Ya se ha abierto la II Convocatoria de becas de formación individual.
  <a href="/becas"> No pierdas la oportunidad!</a></p></div>
  </div>
  </div>
  





  <div class="cursos">
<h2>Cursos de formación</h2>
</div>


  <div class="tarjeta-container">
        <div class="tarjeta">
            <div class="columna-vertical">
                <p>Inscripción hasta el <span class="sptj">31 Dic 2023</span></p>
            </div>
            <div class="columna-horizontal">
                <h3>Prepárate para el mundo digital</h3>
                <button>Inscríbete</button>
            </div>
            <div class="columna-horizontal">
                <p>Lugar: Zona Embajadores (Madrid)</p>
                <p>Plazas:</p>
                <p>Modalidad: Presencial</p>
            </div>
            <div class="columna-horizontal">
                <p>Duración:</p>
                <p>Requisitos:</p>
                <p>Lorem ipsum</p>
            </div>
            <div class="columna-horizontal">
                <p>Descripción:</p>
                <p>Lorem ipsum</p>
            </div>
        </div>
  
        <div class="tarjeta">
        <div class="columna-vertical">
            <p>Inscripción hasta el XX de XX</p>
        </div>
        <div class="columna-horizontal">
            <h3>Curso de desarrollo web 1</h3>
            <button>Inscríbete</button>
        </div>
        <div class="columna-horizontal">
            <p>Lugar: Ciudad A</p>
            <p>Plazas: 20</p>
            <p>Modalidad: Presencial</p>
        </div>
        <div class="columna-horizontal">
            <p>Duración: 40 horas</p>
            <p>Requisitos: Ninguno</p>
            <p>Texto: Lorem ipsum</p>
        </div>
        <div class="columna-horizontal">
            <p>Descripción: Curso introductorio</p>
            <p>Requisitos: Básicos de programación</p>
        </div>
    </div>
  
    <div class="tarjeta">
    <div class="columna-vertical">
        <p>Inscripción hasta el XX de XX</p>
    </div>
    <div class="columna-horizontal">
        <h3>Curso de desarrollo web 1</h3>
        <button>Inscríbete</button>
    </div>
    <div class="columna-horizontal">
        <p>Lugar: Ciudad A</p>
        <p>Plazas: 20</p>
        <p>Modalidad: Presencial</p>
    </div>
    <div class="columna-horizontal">
        <p>Duración: 40 horas</p>
        <p>Requisitos: Ninguno</p>
        <p>Texto: Lorem ipsum</p>
    </div>
    <div class="columna-horizontal">
        <p>Descripción: Curso introductorio</p>
        <p>Requisitos: Básicos de programación</p>
    </div>
</div>
</div>
















      `;

      document.addEventListener("DOMContentLoaded", function () {
        // Options
        const speed = 500; // Transition speed - fade
        const autoswitch = true; // Auto slider options
        const autoswitch_speed = 5000; // Auto slider speed
      
        // Add first initial active class
        const slides = document.querySelectorAll(".slide");
        slides[0].classList.add("active");
      
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
      
        // Show only active class slide
        let activeSlide = document.querySelector(".active");
        activeSlide.style.display = "block";
      
        // Next Event Handler
        document.getElementById("next").addEventListener("click", nextSlide);
      
        // Prev Event Handler
        document.getElementById("prev").addEventListener("click", prevSlide);
      
        // Auto Slider Handler
        if (autoswitch == true) {
          setInterval(nextSlide, autoswitch_speed);
        }
      
        // Switch to next slide
        function nextSlide() {
          activeSlide.classList.remove("active");
          activeSlide.style.display = "none";
      
          if (activeSlide.nextElementSibling == null) {
            // Si es el último slide, vuelve al primer slide
            activeSlide = slides[0];
          } else {
            activeSlide = activeSlide.nextElementSibling;
          }
      
          activeSlide.classList.add("active");
          activeSlide.style.display = "block";
        }
      
        // Switch to prev slide
        function prevSlide() {
          activeSlide.classList.remove("active");
          activeSlide.style.display = "none";
      
          if (activeSlide.previousElementSibling == null) {
            // Si es el primer slide, ve al último slide
            activeSlide = slides[slides.length - 1];
          } else {
            activeSlide = activeSlide.previousElementSibling;
          }
      
          activeSlide.classList.add("active");
          activeSlide.style.display = "block";
        }
      });
      
};

