const express = require('express');
const app = express();
const PORT = 3000;
//recebe as rotas previamente criadas no logs 
const logsRouter = require('./routes/logs.js');

app.use(express.json());

app.get('/hello-world', (req, res) => {
    res.send('Hello World, eu estou aqui!');
  });

//ao utilizar a rota /api será chamado as rotas que estão no arquivo logs que contem a rota que faz a requisição ao banco
app.use('/api', logsRouter);


  // Iniciando o servidor
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });