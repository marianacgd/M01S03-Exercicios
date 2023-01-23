console.log('EX04-S03-M1');
/*
function mesclaObjetos(objA, objB){
    return {...objA, ...objB};
};
*/

const mesclaObjetos = (objA, objB) => {   //Arrow function q mescla os objetos A e B
    return { ...objA, ...objB};
};

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const novoObjeto = mesclaObjetos(obj1, obj2);

console.log(novoObjeto);
//novo Objeto deve ser { a: 1,b: 2,c: 3,d: 4 }


