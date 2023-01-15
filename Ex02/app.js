console.log('EX02-S03-M1');

const nome = document.getElementById('nome');
const enviar = document.getElementById('acao');
const pMensagem = document.getElementById('mensagem');

console.log(nome, enviar, pMensagem);

//Arrow function completa
//const mensagemOla = (nome) => {
//    return `Olá, ${nome}!`;
//};

//Resumido: podemos omitir as chaves e o return statement quando ocorre apenas uma ação no comando
const mensagemOla = (nome) => `Olá, ${nome}!`;

const resultado = mensagemOla("Mariana");

console.log(resultado);
//"Olá, Mariana!"

enviar.addEventListener('click', () => {
    const name = nome.value;
    const msg = mensagemOla(name);
    pMensagem.innerHTML = msg;
});
// resumido: pMensagem.innerHTML = mensagemOla(nome.value);


