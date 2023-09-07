import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<div id="container">			
			<div id="next" alt="Next" title="Next">
				<div class="arrow-right"></div>
			</div>
			<div id="prev" alt="Prev" title="Prev">				
				<div class="arrow-left"></div>
			</div>			
			<div id="slider">
				<div class="slide">
					<div class="slide-copy">
						<h4><a href="/">XTalentoDigital ofrece un curso de programación para personas con autismo</a></h4>
					</div>
					<div class="img1"><a href="/" id="logo">
          <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693932019/Xtalentodigital/programadores-que-desarrollan-codigos-sus-computadoras_1_v7wmbd.jpg" alt="Inicio" /></a></div>
				</div>
				
				<div class="slide">
					<div class="slide-copy">
						<h4><a href="/">Los nuevos cursos de Por Talento Digital te ayudan a mejorar tu perfil laboral</a></h4>
					</div>
					<div class="img2"><a href="/" id="logo">
          <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693932020/Xtalentodigital/vista-cerca-hacker_y67yth.jpg" alt="Inicio" /></a></div>
				</div>
				
				<div class="slide">
					<div class="slide-copy">
						<h4><a href="/">Conviértete en un experto en desarrollo web</a></h4>
					</div>
					<div class="img3"><a href="/" id="logo">
          <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693932018/Xtalentodigital/encendido-computadora-portatil-gris_egxcjo.jpg" alt="Inicio" /></a></div>
				</div>
				
				<div class="slide">
					<div class="slide-copy">
						<h4><a href="/">Inscríbite en este curso de diseño gráfico nivel avanzado</a></h4>
					</div>
					<div class="img4"><a href="/" id="logo">
          <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693932017/Xtalentodigital/editar-concepto-graficos-diseno-plantillas-software_w5jx7q.jpg" alt="Inicio" /></a></div>
				</div>
				
				<div class="slide">
					<div class="slide-copy">
						<h4><a href="/">¿Quieres convertirte en influencer?</a></h4>
					</div>
					<div class="img5"><a href="/" id="logo">
          <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693932015/Xtalentodigital/whatsapp_image_2023-06-14_at_12.21.42_pm_idkdog.jpg" alt="Inicio" /></a></div>
				</div>
			</div>
		</div>`;

    document.addEventListener("DOMContentLoaded", function() {
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
        activeSlide.classList.add("oldActive");
        if (activeSlide.nextElementSibling == null) {
          slides[0].classList.add("active");
        } else {
          activeSlide.nextElementSibling.classList.add("active");
        }
        activeSlide.classList.remove("oldActive");
        activeSlide.style.display = "none";
        activeSlide.nextElementSibling.style.display = "block";
        activeSlide = document.querySelector(".active");
      }
    
      // Switch to prev slide
      function prevSlide() {
        activeSlide.classList.remove("active");
        activeSlide.classList.add("oldActive");
        if (activeSlide.previousElementSibling == null) {
          slides[slides.length - 1].classList.add("active");
        } else {
          activeSlide.previousElementSibling.classList.add("active");
        }
        activeSlide.classList.remove("oldActive");
        activeSlide.style.display = "none";
        activeSlide.previousElementSibling.style.display = "block";
        activeSlide = document.querySelector(".active");
      }
    });
};

