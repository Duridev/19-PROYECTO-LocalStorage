// ********  VARIABLES       **********
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const tweets = [];



// ********  EVENT LISTENER  **********
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}



// ********  FUNCIONES       **********
function agregarTweet(e) {
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;

    if(tweet === '') {
        mostrarError('Un mensaje no puede ir vacío');
        return; // previene que se sigan ejecutando más líneas de codigo
    }
    console.log('Agregando tweet');
}

//-------

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 2300);
}


