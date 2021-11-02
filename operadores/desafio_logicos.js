// Duas expressões resultar em TRUE (Aritméticos/Relacionais/Lógicos)
let verdadeira1 = 30 * 2 > 10 || 40 * 3 > 10 && 20 >= 10 !== 20;
let verdadeira2 = 10 + 30 - 20 >= 20 && 20 - 10 + 20 < 80 !== 40;




console.log(verdadeira1);
console.log(verdadeira2);
//Duas expressões resultar em FALSE (Aritméticos/Relacionais/Lógicos)
let falso1 = 70 >= 80 || 20 + 10 < !40 && 50 / 5 > 30 !== 30;
let falso2 = 6 * 4 * 3 < 20 * 2 || !60 > 30 || 20 < !80 !== !20 && 40 > 10;

console.log(falso1);
console.log(falso2);