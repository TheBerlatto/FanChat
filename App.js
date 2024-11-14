// habilitando o CORS para que possa haver a comunicação entre back e frontend,
// seguindo a regra de negócio da aplicação
const cors = require('cors');

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
// importamos o express
const express = require('express');
// construímos o objeto que viabiliza a especificação de endpoints
const app = express();
// colocamos o servidor em execução na porta 4000
const PORT = 4000;
// aplicamos o middleware de transformação JSON
app.use(express.json());
app.use(cors());
// Adicione essa linha no início do arquivo
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const db = require('./db_log/connection/connectionbd.js');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
// função que limpa a saída da resposta do personagem antes de ir para o banco
function removeEmojis(text) {
  // Expressão regular para encontrar emojis e removê-los
  return text.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '');
}

// especificamos o endpoint de interesse
app.post('/pergunte-ao-gemini', async (req, res) => {
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash'
  });
  /* // desestruturamos o corpo da requisição, pegando apenas o prompt
  const { prompt } = req.body
  console.log(prompt)
  const result = await model.generateContent(prompt)
  res.json({completion: result.response.text()})
*/
  // Desestrutura o prompt, userId e characterName do corpo da requisição
  const { prompt, userId, characterName, message } = req.body;
  console.log(`Prompt recebido para ${characterName}: ${prompt}`);

  try {
    // Obtém a resposta da API generativa
    const result = await model.generateContent(prompt);
    const respostaAPI = result.response.text();
    const respostasememojis = removeEmojis(respostaAPI);

   /* // Dados para inserção no banco de dados
    const logData = {
      character_name: characterName,
      message: message,
      response_chat: respostasememojis,
      usuario_chat_idusuario_chat: userId
    };

    // Chama o endpoint `/inserir-log` do roteador de logs
    const inserirLogResponse = await axios.post('http://localhost:4000/api/inserir-log', logData, {
      headers: { 'Content-Type': 'application/json' }
    });
    const logResult = inserirLogResponse.data;
    */
    // Retorna a resposta da API junto com o logId
    res.json({
      completion: respostasememojis,
      //logId: logResult.logId
    });

  } catch (error) {
    console.error("Erro ao consultar a API:", error);
    console.log(error.response?.data); 
    res.status(500).json({ error: "Erro ao consultar a API" });
  }
});

// endpoint que insere login 

app.post('/inserir-log', async (req, res) => {
  const { character_name, message, response_chat, usuario_chat_idusuario_chat } = req.body;
  
  try {
    const logResult = await axios.post('http://localhost:4000/api/inserir-log', {
      character_name,
      message,
      response_chat,
      usuario_chat_idusuario_chat
    });

    res.json({ logId: logResult.data.logId });
  } catch (error) {
    console.error("Erro ao registrar log:", error);
    res.status(500).json({ error: "Erro ao registrar log" });
  }
});



/*app.post('/create-user', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:4000/api/create-user');
    const data = response.data;
    res.json(data);
    // Verifique se o usuário foi realmente inserido
    console.log("Usuário criado com sucesso:", result);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});*/

app.post('/create-user', async (req, res) => {
  try {
    // Fazendo uma chamada para o próprio servidor na rota '/api/create-user' para criar o usuário
    const response = await axios.post('http://localhost:4000/api/create-user');
    
    // Recebe o userId retornado pela rota /api/create-user
    const { userId } = response.data;

    console.log("Usuário criado com sucesso:", userId);

    // Retorna o userId para o frontend
    res.json({ userId });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});


app.listen(PORT, () => console.log(`Em execução na porta ${PORT}`));

// recebe as rotas previamente criadas no logs
const { router: logsRouter } = require('./db_log/connection/routes/logs');

app.get('/hello-world', (req, res) => {
  res.send('Hello World, eu estou aqui!');
});

// ao utilizar a rota /api será chamado as rotas que estão no arquivo logs que contem a rota que faz a requisição ao banco
app.use('/api', logsRouter);
