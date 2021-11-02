const carros = ['mercedes', 'bmw', 'ferrari', 'uno', 'fusca'];

let valores = '';

for(let carro of carros) {
    valores += carro + ' ';
}
console.log(valores);

let indices = '';

for(let carro in carros) {
    indices += carro + '      ';
}

console.log(indices);