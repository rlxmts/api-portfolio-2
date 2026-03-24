import ErroBase from "./ErroBase.js";

class ErroRequisicao extends ErroBase{
  constructor(mensagem = "Um ou mais dados enviados não são válidos."){
    super(mensagem, 400);
  }
}

export default ErroRequisicao;