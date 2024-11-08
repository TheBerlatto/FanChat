require('dotenv').config()
const { GoogleGenerativeAI } = require('@google/generative-ai')
//importamos o express
const express = require('express');
//construímos o objeto que viabiliza a especificação de endpoints
const app = express();
//colocamos o servidor em execução na porta 3000
const PORT = 3000;
//aplicamos o middleware de transformação JSON
app.use(express.json())

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)

//especificamos o endpoint de interesse
//POST /pergunte-ao-chatgpt
app.post('/pergunte-ao-gemini', (req, res) => {
  //desestruturamos o corpo da requisição, pegando apenas o prompt
const { prompt } = req.body
console.log(prompt)
//apenas devolvemos o prompt ao cliente, realizando um teste breve
res.json({seuPrompt: prompt})
})


app.listen(PORT, () => console.log(`Em execução na porta ${PORT}`))



//recebe as rotas previamente criadas no logs 
const logsRouter = require('./db_log/connection/routes/logs.js');

app.get('/hello-world', (req, res) => {
    res.send('Hello World, eu estou aqui!');
  });

//ao utilizar a rota /api será chamado as rotas que estão no arquivo logs que contem a rota que faz a requisição ao banco
app.use('/api', logsRouter);
