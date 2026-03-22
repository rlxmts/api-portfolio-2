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
}

export default projetoController;