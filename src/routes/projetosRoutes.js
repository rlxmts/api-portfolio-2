import express from "express";
import projetoController from "../controllers/projetosController.js";
import verificaReq from "../middleware/authApi.js";

const routes = express.Router();

routes.get('/projetos', projetoController.buscaProjetos);
routes.post('/projetos', verificaReq , projetoController.cadastrarProjetos);
routes.put('/projetos/:id', verificaReq, projetoController.editarProjeto);
routes.delete('/projetos/:id', verificaReq, projetoController.excluiProjeto);

export default routes;