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

bienvenidaJugador();
repartirCartaDealer();
repartirCartasJugador();
document.getElementById("btnPedir").addEventListener("click", pedirCarta);
document.getElementById("btnPlantarse").addEventListener("click", plantarse);

function bienvenidaJugador() {
    let nombreUsuario = prompt("¿Cuál es tu nombre?");
    alert(`¡Bienvenido ${nombreUsuario}!`);
    document.getElementById("Jugador").innerHTML =`<h3>${nombreUsuario}</h3>`;
}
function repartirCartaDealer() {   
    cartasDLR.push(cartas[Math.floor(Math.random() * 13) + 1]);
    puntosDLR += cartasDLR[cartasDLR.length - 1].valor;
    mostrarCartasDLR();
    document.getElementById("puntosDLR").innerHTML = `<h3>Puntos Dealer: </h3> ${puntosDLR}`;
}
function repartirCartasJugador() {   
    cartasJDR.push(cartas[Math.floor(Math.random() * 13) + 1]);
    puntosJDR += cartasJDR[cartasJDR.length - 1].valor;
    mostrarCartasJDR();
    document.getElementById("puntosJDR").innerHTML = `<h3>Puntos Jugador: </h3> ${puntosJDR}`;
}
function mostrarCartasDLR() {   
    document.getElementById("cartasDLR").innerHTML = "";
    for (let i = 0; i < cartasDLR.length; i++) {
        document.getElementById("cartasDLR").innerHTML += ` ${cartasDLR[i].carta} `;
    }
}
function mostrarCartasJDR() {  
    document.getElementById("cartasJDR").innerHTML = "";
    for (let i = 0; i < cartasJDR.length; i++) {
        document.getElementById("cartasJDR").innerHTML += ` ${cartasJDR[i].carta} `;
    } 
}
function pedirCarta() {   
    cartasJDR.push(cartas[Math.floor(Math.random() * 13) + 1]);
    puntosJDR += cartasJDR[cartasJDR.length - 1].valor;
    document.getElementById("puntosJDR").innerHTML = `<h3>Puntos Jugador: </h3> ${puntosJDR}`;
    mostrarCartasJDR();
        if (puntosJDR > 21) {
        resultado();
    }
}
function plantarse() {  
    while (puntosDLR < 17) {
        repartirCartaDealer();
    } 
    resultado();
}
function resultado() {   
    if (puntosJDR > 21) {
        alert("¡Te has pasado de 21! ¡Gana el Dealer!");
    } else if (puntosDLR > 21) {
        alert("¡El Dealer se ha pasado de 21! ¡Ganas tú!");
    } else if (puntosJDR > puntosDLR) {
        alert("¡Ganas tú!");
    } else if (puntosJDR < puntosDLR) {
        alert("¡Gana el Dealer!");
    } else {
        alert("¡Empate!");
    }
}