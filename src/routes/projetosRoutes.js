import express from "express";
import projetoController from "../controllers/projetosController.js";

const routes = express.Router();

routes.get('/projetos', projetoController.buscaProjetos);
routes.post('/projetos', projetoController.cadastrarProjetos);

export default routes;