import projeto from "../models/Projetos.js";

class projetoController {
  static async buscaProjetos (req, res, next){
    try{
      const listaProjetos = await projeto.find({});
      res.status(200).json(listaProjetos);
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