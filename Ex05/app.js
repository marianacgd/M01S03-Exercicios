console.log('EX05-S03-M1');

function somaTudo(...numeros) {
    let total = 0;

    numeros.forEach(num => {
        total += num
    });
    return total;
}

const resultado = somaTudo(1, 2, 3, 4);

console.log(resultado);
//resultado deve ser 10
