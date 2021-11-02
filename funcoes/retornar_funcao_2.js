function retornarUmaFuncao() {
    return function() {
        return () => {
            return "Boa Tarde!";
        }
    }
}

console.log(retornarUmaFuncao);
console.log(retornarUmaFuncao());
console.log(retornarUmaFuncao()());
console.log(retornarUmaFuncao()()());

const umaFuncao = retornarUmaFuncao();

console.log(umaFuncao()());