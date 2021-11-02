const data = {
    dia: 30,
    mes: 10,
    ano: 2021,
    exibirData: function (){ 
        return `${this.dia}/${this.mes}/${this.ano}` 
    },
}

data.dia = 21



console.log(data.exibirData());