import cors from "cors";
import chalk from "chalk";
import express from "express";
import conectaApi from "./config/dbConnect.js";
import routes from "./routes/index.js";
import trataErros from "./middleware/trataErros.js";

const conexao = await conectaApi();

conexao.on("error", (err) => {
  console.log(chalk.bgRed("Erro ao conectar no banco: ", err));
});

conexao.once("open", ()=> {
  console.log(chalk.green.italic("Conectado com sucesso!"));
});

const app = express();
app.use(cors());
routes(app);
app.use(trataErros);
export default app;