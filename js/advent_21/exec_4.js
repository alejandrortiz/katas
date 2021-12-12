/**

¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del 
árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____

Creamos un triángulo de asteríscos * con la altura proporcionada 
y, a los lados, usamos el guión bajo _ para los espacios. Es muy
importante que nuestro árbol siempre tenga la misma longitud por 
cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un 
tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__

Ten en cuenta que el árbol es un string y necesitas los saltos de 
línea \n para cada línea para que se forme bien el árbol.

 */

function createXmasTree(height) {
    let tree = '';

    for (let floor = 0; floor < height; floor++) {
        for (let x = 0; x < (height * 2) - 1; x++) {
            if (x >= height - (floor + 1) && x < height + floor) {
                tree += '*';
            } else {
                tree += '_';
            }
        }

        tree += '\n';
    }

    for (let i = 0; i < 2; i++) {
        for (let x = 0; x < (height * 2) - 1; x++) {
            if (x >= height - 1 && x < height) {
                tree += '#';
            } else {
                tree += '_';
            }
        }

        if (i == 0)
            tree += '\n';
    }


    return tree;
}

console.log(createXmasTree(5));