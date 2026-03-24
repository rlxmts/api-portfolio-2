import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import ErroRequisicao from "../erros/ErroRequisicao.js";
import ErroValidacao from "../erros/ErroValidacao.js";

// eslint-disable-next-line no-unused-vars
function trataErros (erro, req, res, next){
  if(erro instanceof mongoose.Error.CastError){
    new ErroRequisicao().enviaResposta(res);

  }else if(erro instanceof mongoose.Error.ValidationError){
    new ErroValidacao(erro).enviaResposta(res);

  }else{
    new ErroBase().enviaResposta(res);
  }
}

export default trataErros;