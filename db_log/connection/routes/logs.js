const express = require('express');
//importa o arquivo que conecta com o banco de dados la no aiven
const db = require('../connectionbd');
//importa o router para utilizar rotas
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Endpoint para criar um novo usuário com UUID
router.post('/create-user', (req, res) => {
  const userId = uuidv4();  // Gera um UUID para o usuário

  db.query('INSERT INTO usuario_chat (idusuario_chat) VALUES (?)', [userId], (err) => {
    if (err) {
      console.error("Erro ao criar usuário:", err);
      return res.status(500).json({ error: "Erro ao criar usuário" });
    }
    console.log("Usuário criado com ID:")
    res.json({ userId });  // Retorna o UUID do usuário criado
    
  });
});


// Função para inserir um log no banco de dados
router.post('/inserir-log', (req, res) => {
  const { character_name, message, response_chat, usuario_chat_idusuario_chat } = req.body;

  // Dados para o log
  const logData = {
    idlogs_usuario_chat: uuidv4(),
    character_name,
    message,
    response_chat,
    usuario_chat_idusuario_chat
  };

  db.query('INSERT INTO logs_usuarios_chat SET ?', logData, (err, result) => {
    if (err) {
      console.error("Erro ao registrar log:", err);
      return res.status(500).json({ error: "Erro ao registrar log no banco de dados" });
    }
    res.json({
      logId: result.insertId,
      message: "Log inserido com sucesso"
    });
  });
});



//rota /consultar que retorna um usuario da tabela usuario e então cria um log no banco
router.get('/consultar', async (req, res) => {
  try {
    //recebe o id do usuario requisitado na url 
    const userId = req.query.userId || 1;
    //seleciona o usuario com uma query ao banco de dados
    db.query(
      'SELECT * FROM usuario_chat WHERE idusuario_chat = ?',
      [userId],
      (err, results) => {
        if (err) {
          console.error("Erro ao consultar usuário:", err);
          return res.status(500).send("Erro ao consultar usuário");
        }
        // cria -se um objeto json que vai ser introduzido na tabela de logs_usuario
        const logData = {
          character_name: 'Consulta',
          message: 'Consulta realizada',
          response_chat: JSON.stringify(results),
          usuario_chat_idusuario_chat: userId
        };
        // segunda query aonde o objeto json é efetivamente posto na tabela log
        db.query(
          'INSERT INTO logs_usuarios_chat SET ?',
          logData,
          (err, logResult) => {
            if (err) {
              console.error("Erro ao registrar log:", err);
              return res.status(500).send("Erro ao registrar log");
            }
            //retorna mensagem na pagina web com o usuario selecionado 
            res.json({
              message: "Consulta realizada com sucesso",
              data: results,
              logId: logResult.insertId
            });
          }
        );
      }
    );
  } catch (error) {
    console.error("Erro no endpoint /consultar:", error);
    res.status(500).send("Erro interno no servidor");
  }
});

// modulo é exportado para ser utilizado como import 
module.exports = { router};
