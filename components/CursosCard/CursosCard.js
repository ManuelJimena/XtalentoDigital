import "./CursosCard.css";
export const CursosCard = (card) => `
<div class="tarjeta-container">
        <div class="tarjeta">
            <div class="columna-vertical">
                <p>Inscripción hasta el <span class="fecha">${project.fecha}</span></p>
            </div>
            <div class="columna-horizontal">
                <h3 class="nombrecurso">${card.titulo}</h3>
                <button>Inscríbete</button>
            </div>
            <div class="columna-horizontal">
                <p><span class="fecha">Lugar:</span>${card.lugar}</p>
                <p><span class="fecha">Plazas:</span>${card.plazas}</p>
                <p><span class="fecha">Modalidad:</span>${card.modalidad}</p>
            </div>
            <div class="columna-horizontal">
                <p><span class="fecha">Duración:</span>${card.duración}</p>
                <p><span class="fecha">Requisitos:</span></p>
                <p>${card.requisitos}</p>
            </div>
            <div class="columna-horizontal">
                <p><span class="fecha">Descripción:</span></p>
                <p>${card.descripción}</p>
            </div>
        </div>
`;