const d1 = {
    dia: 30,
    mes: 10,
    ano: 2021,
    exibirData: function (){ 
        return `${this.dia}/${this.mes}/${this.ano}` 
    },
}
const d2 = {
    dia: 22,
    mes: 11,
    ano: 2023,
    exibirData: function (){ 
        return `${this.dia}/${this.mes}/${this.ano}` 
    },
}
const d3 = {
    dia: 12,
    mes: 10,
    ano: 2022,
    exibirData: function (){ 
        return `${this.dia}/${this.mes}/${this.ano}` 
    },
}

console.log(d1.exibirData());
console.log(d2.exibirData());
console.log(d3.exibirData());