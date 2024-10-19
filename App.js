const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/hello-world', (req, res) => {
    res.send('Hello World, eu estou aqui!');
  });

  // Iniciando o servidor
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });