import projeto from "../models/Projetos.js";
import ErroRequisicao from "../erros/ErroRequisicao.js";

class projetoController {
  static async buscaProjetos (req, res, next){
    try{

      let {limit = 5, page = 1, campoOrd = "_id", order = -1} = req.query;

      limit = parseInt(limit);
      page = parseInt(page);
      order = parseInt(order);

      if(limit > 0 || page > 0){
        const listaProjetos = await projeto.find({})
          .sort({ [campoOrd]: order })
          .skip((page - 1) * limit)
          .limit(limit);
  
        res.status(200).json(listaProjetos);
      }else{
        next(ErroRequisicao());
      }
    }catch(erro){
      next(erro);
    }
  }

  static async cadastrarProjetos (req, res, next) {
    try{
      const novoProjeto = await projeto.create(req.body);
      res.status(200).json({ message: "Projeto incluido com sucesso!", projeto: novoProjeto });
    }catch(erro){
      next(erro);
    }
  }

  static async editarProjeto (req, res, next) {
    try{
      const id = req.params.id;
      await projeto.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Atalização concluida" });
    }catch(erro){
      next(erro);
    }
  }

  static async excluiProjeto (req, res, next){
    try{
      const id = req.params.id;
      await projeto.findByIdAndDelete(id);
      res.status(200).json({ message: "Projeto removido!" });
    }catch(erro){
      next(erro);
    }
  }
}

export default projetoController;