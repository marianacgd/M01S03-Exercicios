console.log('EX03-S03-M1');
/*
function concatena(arrayA, arrayB){
    const novoArray = [...arrayA,...arrayB];
    return novoArray;
};
*/

const concatena = (arrayA, arrayB) => {   //Arrow function q concatena as duas array A e B
    return [...arrayA,...arrayB];
};

const novoArray = concatena([1,2,3],[4,5,6]);
console.log(novoArray);
//novo array deve ser [1,2,3,4,5,6]


