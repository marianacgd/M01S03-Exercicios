console.log('EX06-S03-M1');

/*
function verificaPalindromo(texto) {

    const meio = texto.length / 2;
    const fim = texto.length - 1;

    for (let i = 0; i < texto.length / 2; i++){
        console.log(i, texto[i], texto[fim - i]);
        if(texto[i] !== texto[fim - i]){
            return false;
        }
    }

    return true;
    console.log('---');
}*/

const verificaPalindromo = (str) => {
    //1.Coloca a string em letra min e usa RegExp(expressoes regulares) para remover carcateres indesejados dela
    let re = /[\W_]/g; //'\W' remove todos caract nao alfanumericos. '_' para passar nesse teste específico. 'g'flag para pesquisa global.
    let lowRegStr = str.toLowerCase().replace(re, '');
    //2.Usa os métodos de encadeamento com funções integradas. 
    let reverseStr = lowRegStr.split('').reverse().join('');
    //3.Verifica se reverseStr é estritamente igual a lowRegStr e retorna booleano.   
    return reverseStr === lowRegStr;
}

//reduzindo para arrow function com spread, reverse e join
//const verificaPalindromo = t => [...t].reverse().join('') === t;

const teste1 = verificaPalindromo("ana");
console.log(teste1);
//true
const teste2 = verificaPalindromo("julia");
console.log(teste2);
// false