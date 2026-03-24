import ErroRequisicao from "./ErroRequisicao.js";

class ErroValidacao extends ErroRequisicao{
  constructor(erro){
    const msgErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");

    super(msgErro, 400);
  }
}

export default ErroValidacao;