import express from "express";
import projetoController from "../controllers/projetosController.js";

const routes = express.Router();

routes.get('/projetos', projetoController.buscaProjetos);

export default routes;