const cartas = {
    1:{ carta : 'A' , valor : 1},
    2:{ carta : '2' , valor : 2},
    3:{ carta : '3' , valor : 3},
    4:{ carta : '4' , valor : 4},
    5:{ carta : '5' , valor : 5},
    6:{ carta : '6' , valor : 6},
    7:{ carta : '7' , valor : 7},
    8:{ carta : '8' , valor : 8},
    9:{ carta : '9' , valor : 9},
    10:{ carta : '10' , valor : 10},
    11:{ carta : 'J' , valor : 11},
    12:{ carta : 'Q' , valor : 11},
    13:{ carta : 'K' , valor : 11},
};
let cartasDLR = [];
let puntosDLR = 0;
let cartasJDR = [];
let puntosJDR = 0;

function bienvenidaJugador() {
    let nombreUsuario = prompt("¿Cuál es tu nombre?");
    alert(`¡Bienvenido ${nombreUsuario}!`);
    document.getElementById("Jugador").innerHTML =`<h3>${nombreUsuario}</h3>`;
}
function repartirCartaDealer() {   
    cartasDLR.push(cartas[Math.floor(Math.random() * 13) + 1]);
    puntosDLR += cartasDLR[cartasDLR.length - 1].valor;
    document.getElementById("cartasDLR").innerHTML = `<h2>Cartas Dealer: </h2> ${cartasDLR}`;
    document.getElementById("puntosDLR").innerHTML = `<h2>Puntos Dealer: </h2> ${puntosDLR}`;
}
function repartirCartaJugador() {   
}
function pedirCarta() {   
}
function plantarse() {   
}
function resultado() {   
}