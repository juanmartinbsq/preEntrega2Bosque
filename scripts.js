// Función superior Math.
function aleatorio (min, max) {return Math.floor(Math.random() * (max - min + 1) + min)}
function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra 🪨"
    } else if (jugada == 2) {
        resultado = "Papel 📃"
    } else if (jugada == 3) {
        resultado = "Tijera ✂️"
    } else {
        resultado = "Incorrecto!"
    }
    return resultado
    }
    // 1 es piedra, 2 es papel, 3 es tijera
    let jugador = 0
    let pc = 0 
    let triunfos = 0
    let perdidas = 0
    let empates = 0

    while (triunfos < 3 && perdidas < 3) {

    pc = aleatorio (1, 3) 
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")

        // alert("Elegiste " + jugador)
    alert("Elegiste " + eleccion(jugador))
    alert("PC eligío " + eleccion(pc))

        // El juego en sí
        if(jugador == pc) {
            alert("EMPATE 😒") 
            empates++
        } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
            alert("GANASTE 🏆")
            triunfos++
        } else {
            alert("PERDISTE 😡")
            perdidas++
        }
    }       
    alert("Ganaste " + triunfos + " veces. Empataste " + empates + " Perdiste " + perdidas + " veces.")