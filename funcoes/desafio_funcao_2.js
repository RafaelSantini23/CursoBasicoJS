// Parâmetro (Nota) -> Retorno (conceito)


function calcularNota(nota) {
    switch(Math.ceil(nota)) {
        case 10:
            return 'A+';
        case 9:
            return 'A';
        case 8:
            return 'B+';
        case 7: 
            return 'B';
        case 6:
            return 'C+';
        case 5:
            return 'C';
        case 4:
            return 'D+';
        case 3:
            return 'D';
        case 2:
            return 'E+';
        case 1:
            return 'E';
        case 0:
            return 'F';
        default:
            return null;
    }
}

let resultado = calcularNota(1)

console.log(resultado);

console.log(`O conceito do aluno é: ${calcularNota(11)}`);

function MediaAritmética(nota) {
    if(nota === 10) {
        return 'A+'
    }else if (nota === 9) {
        return 'A';
    }else if(nota === 8) {
        return 'B+';
    }else if(nota === 7) {
        return 'B';
    }else if(nota === 6) {
        return 'C+';
    }else if(nota === 5) {
        return 'C';
    }else if(nota === 4) {
        return 'D+';
    }else if(nota === 3) {
        return 'D';
    }else if(nota === 2) {
        return 'E+';
    }else if(nota === 1) {
        return 'E';
    }else if(nota === 0) {
        return 'F';
    } else  {
        return null;
    }

}

let resultado2 = MediaAritmética(10)

console.log(resultado2);

console.log(`O conceito do aluno é: ${resultado2}`);

