const a = 12;
const b = 12;
const operacao = '+'; // + - * /

const resultado = 
    operacao === '+' ? a + b 
    : operacao === '-' ? a - b 
        : operacao === '*' ? a * b 
            : operacao === '/' ? a / b : 'Digite um sinal';
console.log(resultado);

/*Do jeito que o professor fez

const a = 8;
const b = 4;
const operacao = '/'; // + - * /

const resultado = 
operacao === '+' ? a + b : operacao === '-' ? a - b : operacao === '*' ? a * b : a / b;
console.log(resultado)


*/