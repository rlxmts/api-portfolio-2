import cors from 'cors';
import chalk from 'chalk';
import express from 'express';
import conectaApi from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaApi();

conexao.on('error', (err) => {
    console.log(chalk.bgRed("Erro ao conectar no banco: ", err));
});

conexao.once('open', ()=> {
    console.log(chalk.green.italic('Conectado com sucesso!'));
})

const app = express();
app.use(cors());
routes(app);
export default app;