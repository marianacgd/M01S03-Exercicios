console.log('EX07-S03-M1');

const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
  };

/*
  function montaMsg(pessoa){
    const { nome, idade, profissao} = pessoa;
    return `Esta é ${nome}, tem ${idade} anos e é ${profissao}`;
  }*/

/*
  function montaMsg({ nome, idade, profissao}) {
    return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
  }*/

const montaMsg = ({ nome, idade, profissao}) => {
    return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
}

const mensagem = montaMsg(pessoa);
console.log(mensagem);