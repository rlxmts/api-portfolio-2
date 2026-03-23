import express from "express";
import projetos from "./projetosRoutes.js";

const routes = (app)=> {
  app.route("/", (req, res) => {
    res.status(200).send("Api de projetos para portfolio.");
  });
  app.use(express.json(), projetos);
};

export default routes;