const a = 10;
const b = 28;
const operacao = 'aaaaa';

let resultado;

if(operacao === '*') {
    resultado = a * b;
} else if(operacao === '+') {
    resultado = a + b;
} else if(operacao === '-') {
    resultado = a - b;
} else if (operacao === '/') {
    resultado = a / b;
} else if(operacao === '%'){
    resultado = a % b;
} else  {
    resultado = "Operação inválida";
}

console.log(resultado);