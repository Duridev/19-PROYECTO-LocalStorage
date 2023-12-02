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
}




