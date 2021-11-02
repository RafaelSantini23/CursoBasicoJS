const t1 = false;
const t2 = false;


let comprarTV50 = t1 && t2;
console.log('Vamos comprar a TV de 50"?', comprarTV50); // AND


let comprarTV32 = t1 !== t2;
console.log('Vamos comprar a TV de 32"?', comprarTV32); // XOR


let tomarSorvete = t1 || t2; //OR
console.log('Vamos tomar sorvete?', tomarSorvete); 

let ficarEmCasa = !tomarSorvete;
console.log('Vamos ficar em casa?', ficarEmCasa); // NOT

