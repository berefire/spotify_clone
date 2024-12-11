const topBar = document.querySelector('.topbar');

// Cambiar opacidad al realizar Scroll en vertical.
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        topBar.classList.add('transparent');
    } else {
        topBar.classList.remove('transparent');
    }
});

// Nueva variable para almacenar altura del TopBar.
let topbarHeight = topBar.offsetHeight;

// Añadir un paddingTop basado en la altura al main-content o el contenido principal.
const mainContent = document.querySelector('.main-content');
mainContent.style.paddingTop = `${topbarHeight + 20}px`;


/* ********************************** */
/*             BOTON PLAY             */
/* ********************************** */

const containerConcentracion = document.querySelectorAll('.card-concentration');
const containerSpotifyPlaylists = document.querySelectorAll('.card-spotify-playlists');

// Función crear botón de play.
const createButton = card => {
    // Crear el botón.
    const button = document.createElement('button');
    button.innerHTML = '<i class="fa-solid fa-play"></i>';

    // Agregar el botón al elemento hijo.
    card.appendChild(button);

    // Ocultar el botón inicialmente.
    button.style.display = 'none';
    button.classList.add('btn-play');

    // Agregamos un evento de hover a este elemento.
    // Se necesita cuando el mouse entra y cuando sale.
    card.addEventListener('mouseover', () => {
        button.style.display = 'block';
    });

    card.addEventListener('mouseout', () => {
        button.style.display = 'none';
    });

}


// Usar la función en las dos filas de contenedores.
containerConcentracion.forEach(card => { createButton(card)});
containerSpotifyPlaylists.forEach( card => { createButton(card)});

