let tipoCarta = ["♦", "♥", "♠", "♣"];
let numeroCarta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// generador de numero
function genNum() {
    var numeroCartaIndex = Math.floor(Math.random() * (numeroCarta.length));
    document.getElementById('numeroCarta').innerHTML = numeroCarta[numeroCartaIndex];
}
// generador de tipo de carta
function genCardType() {
    var tipoCartaIndex = Math.floor(Math.random() * (tipoCarta.length));
    document.getElementById('parteArribaCarta').innerHTML = tipoCarta[tipoCartaIndex];
    document.getElementById('parteAbajoCarta').innerHTML = tipoCarta[tipoCartaIndex];
    if (tipoCartaIndex == 0 || tipoCartaIndex == 1) {
        document.querySelector('.card').classList.add("red");
    } else {
        document.querySelector('.card').classList.remove("red");
        document.querySelector('.card').classList.add("black");
    }
}

//funcion que llama a las que cambian
function randomCard() {
    genNum();
    genCardType();
}
//esto genera la carta cuando carga la pagina
randomCard();

//intervalo para generar una nueva carta
setInterval(randomCard, 2000);

//boton que genera carta nueva
var boton = document.getElementById('botoncito');
boton.addEventListener('click', randomCard);

//agregar width y height del user
