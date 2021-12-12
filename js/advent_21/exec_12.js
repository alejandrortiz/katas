/**

En el taller de Santa 🎅 se están preparando los trineos de motor 
eléctrico para poder hacer la ruta perfecta para dejar los regalos.

La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.

El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar.
El problema es que nos ha dado la lista de posiciones de los obstáculos 
desordenada... 😅 aunque al menos nunca la posición 0 puede tener un obstáculo.

    Encima, el trineo sólo se puede configurar para saltar un número fijo de 
posiciones... 😱

Necesitamos una función que nos diga la longitud mínima del salto del 
trineo para ir evitando todos los obstáculos en la ruta.

*/

function getMinJump(obstacles) {
    let found = false;
    let counter = 1;

    obstacles.sort((curr, next) => curr == next ? 0 : (curr > next ? 1 : -1));
    const jumps_length = obstacles[obstacles.length - 1] + 2;

    while (!found) {
        let has_obstacle = true;

        for (let position = counter; position <= jumps_length; position = position + counter) {
            if (obstacles.includes(position)) {
                has_obstacle = true;
                break;
            }

            has_obstacle = false;
        }

        if (!has_obstacle) {
            found = true;
        } else {
            counter++;
        }
    }

    return counter;
}

console.log(getMinJump([5, 3, 6, 8, 7])) // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S------
*/

console.log(getMinJump([2, 4, 6, 8, 10])) // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

avoidObstacles([1, 2, 3, 5]) // -> 4
avoidObstacles([3, 7, 5]) // -> 3
avoidObstacles([9, 5, 1]) // -> 2
*/


console.log(getMinJump([14, 10, 8, 2, 3, 6])) // -> 9