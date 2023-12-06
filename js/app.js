//          ********  VARIABLES       **********

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];



//           ********  EVENT LISTENER  **********

eventListeners();

function eventListeners() {
    //Cuando el susuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        crearHTML();
    })
}



//           ********  FUNCIONES       **********

function agregarTweet(e) {
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;

    if(tweet === '') {
        mostrarError('Un mensaje no puede ir vacío');
        return; // previene que se sigan ejecutando más líneas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet: tweet
    }
    

    //Añadiendo al arreglo de tweets
    tweets = [...tweets, tweetObj];
    console.log(tweets);

    // Una vez agregado vasmoa a crear el HTML
    crearHTML();

    //Reiniciar el formulario
    formulario.reset();
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

// ------

//Muestra un listado de los tweets
function crearHTML() {

    limpiarHtml();

    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            //Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            //Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //Crear el HTML
            const li = document.createElement('li');

            //Añadir texto
            li.textContent = tweet.tweet;

            //Asignar el boton
            li.appendChild(btnEliminar)

            //Insertar en el HTML
            listaTweets.appendChild(li);
        });
    };

    sincronizarStorage();
};

//Agrega los tweets actuales al LocalStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
};

//Eliminar un tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id)

    crearHTML();ar 
}


// Limpiar HTML
function limpiarHtml() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);

    };
};

