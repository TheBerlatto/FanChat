import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartao from './componentes/Cartao';
import Chat from './componentes/Chat';
import Personalidades from './componentes/Personalidades';
import './css/App.css'
import './css/Chat.css';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'; // Importando axios


const imagensPersonagens = {
  'Toretto': require('./images/Toretto.jpg'),
  'Tony Stark': require('./images/TonyStark.jpg'),
  'Katniss Everdeen': require('./images/Katniss.jpg'),
  'Bob Esponja': require('./images/BobEsponja.jpg'),
}

const App = () => {
  const personagens = Object.keys(imagensPersonagens);
  const [mensagens, setMensagens] = useState([]); // Armazena as mensagens do chat
  const [personagemAtivo, setPersonagemAtivo] = useState(null); // Personagem ativo no chat
  const [userId, setUserId] = useState(null); // Armazena o userId do usuário

  // Função para criar um novo usuário no banco de dados
  const createUser = async () => {
    try {
      const response = await axios.post('http://localhost:4000/create-user', {}, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = response.data;
      if (data.userId) {
        // Apenas armazene e defina o userId se o valor existir
        localStorage.setItem('userId', data.userId);
        setUserId(data.userId);
        console.log(data.userId)
      } else {
        console.error("Resposta inválida ao criar usuário:", data);
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }
//---------------------------------------------------------------------------------------------------
  // Verifica ou cria o userId ao carregar o componente
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    console.log("criando usuario -----------")
    console.log(storedUserId)
    if (!storedUserId) {
      createUser();
      console.log("criado usuarioooooooooooo")
    } else {
      setUserId(storedUserId);
    }
  }, []);
//---------------------------------------------------------------------------------------------------
  // Função para selecionar personagem
  const iniciarConversa = (personagem) => {
    setPersonagemAtivo(personagem);
    setMensagens([]); // Limpa as mensagens ao selecionar um novo personagem
  };

  // Função para enviar mensagem
  const enviarMensagem = async (texto) => {

    if (!userId) {
      console.error("User ID não disponível");
      return;
    }

    const personagem = Personalidades[personagemAtivo];
    const prompt = ` Voce é ${personagemAtivo}, essas são suas características:
    Traços: ${personagem.traços.join(", ")}
    Estilo: ${personagem.estilo}
    Interesses: ${personagem.interesses.join(", ")}
    Citação Inspiradora: "${personagem.citação_inspiradora}"
    
    Responda resumindamente de acordo com sua personalidade: ${texto}
  `;

    try {
      const response = await axios.post('http://localhost:4000/pergunte-ao-gemini', {
        prompt,
        userId,             // ID do usuário
        characterName: personagemAtivo, // Nome do personagem ativo
        message: texto
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const data = response.data;
      setMensagens([...mensagens, { tipo: 'enviada', texto }, { tipo: 'recebida', texto: data.completion }]);

      // --- inserção do log
      // Em seguida, registra o log da conversa
    await axios.post('http://localhost:4000/inserir-log', {
      character_name: personagemAtivo,
      message: texto,
      response_chat: data.completion,
      usuario_chat_idusuario_chat: userId
    });

    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
    }
  };

  return (
    <div className='container-fluid mt-2'>
      <div className='row'>
        <h2
          className='mb-4'
          style={{ margin: '0', fontFamily: 'Afacad Flux', fontWeight: 700, color: 'white' }}>Personagens</h2>
      </div>
      <div className='row'>
        {/* Coluna de Personagens, define o tamanho da div perante a tela */}
        <div className='col-12 col-md-4'>
          <div className='colunm'>
            {personagens.map((personagem, index) => (
              <div key={index} className='col-12 col-xl-8 col-lg-10 mb-3'> {/*define o tamanho da div perante a div de cima */}
                <Cartao
                  imagem={imagensPersonagens[personagem]}
                  nome={personagem}
                  onSelect={() => iniciarConversa(personagem)} />
              </div>
            ))}
          </div>
        </div>

        {/* Coluna de Chat */}
        <div className='col-12 col-md-8 col-xl-8'>
          {personagemAtivo ? (
            <Chat
              personagem={personagemAtivo}
              mensagens={mensagens}
              enviarMensagem={enviarMensagem}
              personalidade={Personalidades[personagemAtivo]}
            />
          ) : (
            <div className='text-center'>
              <h3 style={{ margin: '0', fontFamily: 'Afacad Flux', fontWeight: 700, color: 'white' }}>Selecione um personagem para conversar</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
