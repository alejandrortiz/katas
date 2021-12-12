/**

Este mes de diciembre hay películas super interesantes en el 
cine... y tengo que optimizar cómo gasto el dinero.

Mi cine favorito tiene dos posibilidades:

• Entrada de un sólo uso: Cuesta 12$ por cada película.

• Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas
pagas sólo el 75% del precio del ticket. ¡Lo mejor es que se 
acumula! Y cada vez que vas, se paga el 75% del precio del 
ticket que pagaste la última vez.

Ejemplo de cada una al comprar 3 entradas y el precio que 
pagaría en total:

// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

Necesito una función que, al pasarle las veces que voy a ir al 
cine, me diga si vale la pena comprar la tarjeta fidelidad o no.

shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad

La dificultad del reto está en encontrar una fórmula sencilla 
que nos diga el precio con descuento acumulado para la tarjeta
fidelidad. 😜

 */

function shouldBuyFidelity(times) {
    const fidelity_cost = 250;
    const fidelity_cost_reduction = 0.75;
    const ticket_cost = 12;

    const without_fidelity_cost = ticket_cost * times;
    let with_fidelity_cost = fidelity_cost;

    for (let i = 0; i < times; i++) {
        let cost = ticket_cost * fidelity_cost_reduction;

        for (let x = 0; x < i; x++) {
            cost *= fidelity_cost_reduction;
        }

        with_fidelity_cost += cost;
    }

    return without_fidelity_cost > with_fidelity_cost;
}

console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad