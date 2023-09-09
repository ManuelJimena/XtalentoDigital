import "./Cursos.css";
import { cleanPage } from "../../utils/cleanPage";
export const Cursos = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<div class="cursos">
<h2>Cursos de formación</h2>
</div>


  <div class="tarjeta-container">
        <div class="tarjeta">
            <div class="columna-vertical">
                <p>Inscripción hasta el 31 Dic 2023</p>
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
};