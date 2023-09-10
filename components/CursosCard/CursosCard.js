import "./CursosCard.css";
export const CursosCard = (cards) => `
        <div class="tarjeta">
            <div class="columna-vertical">
                <p>Inscripción hasta el <span class="fecha">${cards.fecha}</span></p>
            </div>
            <div class="columna-horizontal">
                <h3 class="nombrecurso">${cards.titulo}</h3>
                <button>Inscríbete</button>
            </div>
            <div class="columna-horizontal">
                <p><span class="datocard">Lugar:</span>${cards.lugar}</p>
                <p><span class="datocard">Plazas:</span>${cards.plazas}</p>
                <p><span class="datocard">Modalidad:</span>${cards.modalidad}</p>
            </div>
            <div class="columna-horizontal">
                <p><span class="datocard">Duración:</span>${cards.duración}</p>
                <p><span class="datocard">Requisitos:</span></p>
                <p>${cards.requisitos}</p>
            </div>
            <div class="columna-horizontal">
                <p><span class="datocard">Descripción:</span></p>
                <p>${cards.descripción}</p>
            </div>
        </div>
`;