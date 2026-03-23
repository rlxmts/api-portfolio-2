import projeto from "../models/Projetos.js";

class projetoController {
  static async buscaProjetos (req, res){
    try{
      const listaProjetos = await projeto.find({});
      res.status(200).json(listaProjetos);
    }catch(err){
      res.status(500).json({ message: `Erro ao buscar projetos: ${err}` });
    }
  }

  static async cadastrarProjetos (req, res) {
    try{
      const novoProjeto = await projeto.create(req.body);
      res.status(200).json({ message: "Projeto incluido com sucesso!", projeto: novoProjeto });
    }catch(err){
      res.status(500).json({ message: `Erro ao cadastrar projetos: ${err}` });
    }
  }

  static async editarProjeto (req, res) {
    try{
      const id = req.params.id;
      await projeto.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Atalização concluida" });
    }catch(err){
      res.status(500).json({ message: `Erro ao editar projeto: ${err}` });
    }
  }

  static async excluiProjeto (req, res){
    try{
      const id = req.params.id;
      await projeto.findByIdAndDelete(id);
      res.status(200).json({ message: "Projeto removido!" });
    }catch(err){
      res.status(500).json({ message: `Erro ao excluir: ${err} `});
    }
  }
}

export default projetoController;