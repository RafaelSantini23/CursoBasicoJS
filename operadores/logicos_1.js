//Primeira situação

let temDinheiro = false;
let estaEnsolarado = false;
let carroNaGaragem = false;

let resultadoE = '#1 (AND) - Vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado;

console.log(resultadoE);

//Segunda situação

let resultadoOU = '#2 (OR) - Vai pro shopping ?';
resultadoOU += estaEnsolarado || carroNaGaragem;
console.log(resultadoOU);


console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

console.log('Não verdadeiro: ' + !true);
console.log('Não falso: ' + !false);

