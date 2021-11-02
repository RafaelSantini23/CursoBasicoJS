const numeros = [10, 20, 30, 40];

function praCadaElemento(elemento, indice, array){
    console.log(elemento, indice, array);
}
numeros.forEach(praCadaElemento);

numeros.forEach(function (el) {
    console.log(el);
});

numeros.forEach(function (_, i) {
    console.log(i);
});



/*for (const element of numeros) {
    console.log(element);
}



for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
}*/