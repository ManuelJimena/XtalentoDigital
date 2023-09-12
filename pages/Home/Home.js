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
  <p><strong>Por Talento Digital es un programa de formación permanente en competencias digitales y profesiones tecnológicas de la <a href="https://www.fundaciononce.es" target="_blank">Fundación ONCE</a> </strong> orientado a la adquisición de conocimientos y cualificación tecnológica y digital de las personas con discapacidad para favorecer así su inclusión laboral en profesiones con alta demanda en el mercado de trabajo, multiplicando de esta forma sus perspectivas profesionales.</p>
  </div>
  <div class="panelcontent-right"><img alt="imagen de un pc" src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693931907/Xtalentodigital/banner_home_cujp1e.png" /><div class="convocatoria"><h3>II Convocatoria de becas</h3><p>¡Ya se ha abierto la II Convocatoria de becas de formación individual.
  <a href="/becas"> No pierdas la oportunidad!</a></p></div>
  </div>
  </div>

  <div class="pagetitle">
<h2>Cursos de formación</h2>
</div>

  <div class="tarjeta-container">
  <div class="tarjeta">
  <div class="columna-vertical">
      <p>Inscripción hasta el <span class="fecha">31 Dic 2023</span></p>
  </div>
  <div class="columna-horizontal">
      <h3 class="nombrecurso">Prepárate para el mundo digital</h3>
      <button>Inscríbete</button>
  </div>
  <div class="columna-horizontal">
      <p><span class="datocard">Lugar: </span>Zona Embajadores (Madrid)</p>
      <p><span class="datocard">Plazas: </span></p>
      <p><span class="datocard">Modalidad: </span>Presencial</p>
  </div>
  <div class="columna-horizontal">
      <p><span class="datocard">Duración: </span></p>
      <p><span class="datocard">Requisitos: </span></p>
      <p>Sujeto a configuración de grupo completo.</p>
  </div>
  <div class="columna-horizontal">
      <p><span class="datocard">Descripción: </span></p>
      <p>Itinerario formativo para el mundo digital.</p>
  </div>
</div>
  
<div class="tarjeta">
<div class="columna-vertical">
    <p>Inscripción hasta el <span class="fecha">15 Sep 2023</span></p>
</div>
<div class="columna-horizontal">
    <h3 class="nombrecurso">English for Digital Workers III Edición</h3>
    <button>Inscríbete</button>
</div>
<div class="columna-horizontal">
    <p><span class="datocard">Lugar: </span>Zona Embajadores (Madrid)</p>
    <p><span class="datocard">Plazas: </span></p>
    <p><span class="datocard">Modalidad: </span>Presencial</p>
</div>
<div class="columna-horizontal">
    <p><span class="datocard">Duración: </span>36h</p>
    <p><span class="datocard">Requisitos: </span></p>
    <p>Configuración de grupo tras prueba de nivel.</p>
</div>
<div class="columna-horizontal">
    <p><span class="datocard">Descripción:</span></p>
    <p>Intinerario formativo de Inglés.</p>
</div>
</div>
  
<div class="tarjeta">
<div class="columna-vertical">
    <p>Inscripción hasta el <span class="fecha">09 Jun 2023</span></p>
</div>
<div class="columna-horizontal">
    <h3 class="nombrecurso">Diseño gráfico (avanzado)</h3>
    <button>Inscríbete</button>
</div>
<div class="columna-horizontal">
    <p><span class="datocard">Lugar: </span>Zona Embajadores (Madrid)</p>
    <p><span class="datocard">Plazas: </span>15</p>
    <p><span class="datocard">Modalidad: </span>A distancia</p>
</div>
<div class="columna-horizontal">
    <p><span class="datocard">Duración: </span>500h</p>
    <p><span class="datocard">Requisitos: </span></p>
    <p>Sujeto a configuración de grupo completo.</p>
</div>
<div class="columna-horizontal">
    <p><span class="datocard">Descripción: </span></p>
    <p>Itinerario formativo de diseño gráfico.</p>
</div>
</div>

<div class="irarrow">
<h2><a href="/not" class="flecha-derecha">Ir a Cursos de formación</a><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693931804/Xtalentodigital/ico-flecha_l6bohv.png" alt="flecha derecha" /></h2>
</div>
</div>
<div class="pagetitle">
<h2>Consejo Consultivo</h2>
</div>

<section class="carousel">

        

        <div class="carrusel-list" id="carrusel-list">

            <button class="carrusel-arrow carrusel-prev" id="button-prev" data-button="button-prev"
                onclick="app.processingButton(event)">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
                    class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694368662/Xtalentodigital/left_r6yz6p.svg"
                    viewBox="0 0 320 512">
                    <path fill="currentColor"
                        d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z">
                    </path>
                </svg>
            </button>

            <div class="carrusel-track" id="track">

                <div class="carrusel">

                    <div>

                        <a href="https://www.accenture.com/es-es" target="_blank">
                            <h4>Accenture</h4>
                            <picture>
                                <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694375976/Xtalentodigital/accenture_jiqrid.webp" alt="logo accenture">
                            </picture>
                        </a>

                    </div>

                </div>

                <div class="carrusel">

                <div>

                    <a href="https://www.samsung.com/es" target="_blank">
                        <h4>Samsung</h4>
                        <picture>
                            <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694375976/Xtalentodigital/samsung_ms5y9t.webp" alt="logo samsung">
                        </picture>
                    </a>

                </div>

            </div>

            <div class="carrusel">

            <div>

                <a href="https://www.ilunion.com/es" target="_blank">
                    <h4>Ilunion</h4>
                    <picture>
                        <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694375976/Xtalentodigital/ilunion_bzceb6.webp" alt="logo ilunion">
                    </picture>
                </a>

            </div>

        </div>

        <div class="carrusel">

        <div>

            <a href="https://www.elcorteingles.es/" target="_blank">
                <h4>El Corte Inglés</h4>
                <picture>
                    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694375976/Xtalentodigital/elci_afv8tk.webp" alt="logo el corte inglés">
                </picture>
            </a>

        </div>

    </div>

    <div class="carrusel">

    <div>

        <a href="https://www2.deloitte.com/es/es.html" target="_blank">
            <h4>Deloitte</h4>
            <picture>
                <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694375976/Xtalentodigital/deloitte_mrsvie.webp" alt="logo deloitte">
            </picture>
        </a>

    </div>

</div>

<div class="carrusel">

<div>

    <a href="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694368753/Xtalentodigital/correos_sxtfv4.webp" target="_blank">
        <h4>Correos</h4>
        <picture>
            <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694375978/Xtalentodigital/correos_kysedb.webp" alt="logo correos">
        </picture>
    </a>

</div>

</div>

<div class="carrusel">

<div>

    <a href="https://www.carrefour.es/" target="_blank">
        <h4>Carrefour</h4>
        <picture>
            <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694375978/Xtalentodigital/carrefour_carhoq.webp" alt="logo carrefour">
        </picture>
    </a>

</div>

</div>

<div class="carrusel">

<div>

    <a href="https://www.bbva.es/personas.html" target="_blank">
        <h4>BBVA</h4>
        <picture>
            <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694375978/Xtalentodigital/bbva_qaad2c.webp" alt="logo bbva">
        </picture>
    </a>

</div>

</div>

<div class="carrusel">

<div>

    <a href="https://aws.amazon.com/es/" target="_blank">
        <h4>Amazon Web Services</h4>
        <picture>
            <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694375977/Xtalentodigital/aws_gzkl7r.webp" alt="logo aws">
        </picture>
    </a>

</div>

</div>

<div class="carrusel">

<div>

    <a href="https://ametic.es/" target="_blank">
        <h4>Ametic</h4>
        <picture>
            <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694375977/Xtalentodigital/ametic_ilklbs.webp" alt="logo ametic">
        </picture>
    </a>

</div>

</div>

                

            </div>

            <button class="carrusel-arrow carrusel-next" id="button-next" data-button="button-next"
                onclick="app.processingButton(event)">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"
                    class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694368662/Xtalentodigital/right_xkpeuo.svg"
                    viewBox="0 0 320 512">
                    <path fill="currentColor"
                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                    </path>
                </svg>
            </button>


        </div>

    </section>
    <div class="irarrow">
    <h2><a href="/not" class="flecha-derecha">Ir a Colaboradores</a><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693931804/Xtalentodigital/ico-flecha_l6bohv.png" alt="flecha derecha" /></h2>
    </div>


    <div class="pagetitle">
<h2>Becas</h2>
</div>

    <section class="becaportalento">
    <div class="beca-a">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694535153/Xtalentodigital/beca_diploma-blanco_0_durwhs.png" alt="diploma" /><a href="/not">Convocatoria de becas de formación individual Por Talento Digital ></a>
    </div>
    <div class="beca-b">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1694535153/Xtalentodigital/beca_diploma_negro_0_dvmx59.png" alt="diploma" /><a href="/not">Becas para la asistencia a la formación ></a>
    </div>
    </div>
    </section>



    <div class="irarrow">
    <h2><a href="/not" class="flecha-derecha">Ir a Becas</a><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693931804/Xtalentodigital/ico-flecha_l6bohv.png" alt="flecha derecha" /></h2>
    </div>



    <section class="pagetitle">
    <h2>Alumni</h2>
    </div>
    </section>



    <div class="irarrow">
    <h2><a href="/not" class="flecha-derecha">Ir a Alumni</a><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693931804/Xtalentodigital/ico-flecha_l6bohv.png" alt="flecha derecha" /></h2>
    </div>


    <section class="pagetitle">
    <h2>Últimos post</h2>
    </div>
    </section>



    <div class="irarrow">
    <h2><a href="/not" class="flecha-derecha">Ir a Blog</a><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1693931804/Xtalentodigital/ico-flecha_l6bohv.png" alt="flecha derecha" /></h2>
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

      function App() {
        // Constructor de App
      }
      
      App.prototype.processingButton = function(event) {
        const btn = event.currentTarget;
        const carruselList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const carrusel = track.querySelectorAll('.carrusel');
      
        const carruselWidth = carrusel[0].offsetWidth;
        let leftPosition; // Declarar leftPosition aquí
      
        const trackWidth = track.offsetWidth;
        const listWidth = carruselList.offsetWidth;
      
        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
        btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
      }
      
      let prevAction = (leftPosition, carruselWidth, track) => {
        if (leftPosition > 0) {
          track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
        }
      }
      
      let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
        if (leftPosition < (trackWidth - listWidth)) {
          track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
        }
      }
      
      // Instanciar App cuando se carga la página
      window.onload = function(event) {
        var app = new App();
        window.app = app;
      }
};

