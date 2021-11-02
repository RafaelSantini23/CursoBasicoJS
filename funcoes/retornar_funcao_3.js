function somar1(a, b) {
    return a + b;
}

console.log(somar1(10, 20));

function somar2(a) {
    return (b) => {
        return a + b;
    }
}



console.log(somar2(10)(20));

const somarMais10 = somar2(10);

console.log(somarMais10(5));
console.log(somarMais10(15));