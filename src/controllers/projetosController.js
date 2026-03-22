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
            const novoProjeto = projeto.create(req.body);
            res.status(200).json({ message: "Projeto incluido com sucesso!", projeto: novoProjeto });
        }catch(err){
            res.status(500).json({ message: `Erro ao cadastrar projetos: ${err}` });
        }
    }
}

export default projetoController;