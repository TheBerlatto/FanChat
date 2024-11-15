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
  'Mario': require('./images/Mario.jpg'),
  'Link': require('./images/Link.jpg'),
  'Pikachu': require('./images/Pikachu.jpg'),
  'Sonic': require('./images/Sonic.jpg'),
  'Lara Croft': require('./images/LaraCroft.jpg'),
  'Kratos': require('./images/Kratos.jpg'),
  'Master Chief': require('./images/MasterChief.jpg'),
  'Geralt de Rívia': require('./images/Geralt.jpg'),
  'Ryu': require('./images/Ryu.jpg'),
  'Solid Snake': require('./images/Snake.jpg'),
  'Goku': require('./images/Goku.jpg'),
  'Naruto Uzumaki': require('./images/Naruto.jpg'),
  'Luffy': require('./images/Luffy.jpg'),
  'Sailor Moon': require('./images/SailorMoon.jpg'),
  'Light Yagami': require('./images/LightYagami.jpg'),
  'Eren Yeager': require('./images/Eren.jpg'),
  'Edward Elric': require('./images/Edward.jpg'),
  'Ichigo Kurosaki': require('./images/Ichigo.jpg'),
  'Saitama': require('./images/Saitama.jpg'),
  'Tanjiro Kamado': require('./images/Tanjiro.jpg'),
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
    
    Responda resumidamente de acordo com sua personalidade: ${texto}
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
    <div>
      <h2 className='titulos' style={{padding: '12px'}}>
        Personagens
      </h2>

      <div className='d-flex'>
        {/* Coluna de Personagens */}
        <div className='col-12 col-md-4 col-lg-3 lista-personagens'>
          {personagens.map((personagem, index) => (
            <div key={index} className='mb-3'>
              <Cartao
                imagem={imagensPersonagens[personagem]}
                nome={personagem}
                onSelect={() => iniciarConversa(personagem)}
              />
            </div>
          ))}
        </div>

        {/* Coluna de Chat */}
        <div className='col-12 col-md-8 col-lg-9 d-flex align-items-stretch'>
          {personagemAtivo ? (
            <Chat
              personagem={personagemAtivo}
              mensagens={mensagens}
              enviarMensagem={enviarMensagem}
              personalidade={Personalidades[personagemAtivo]}
            />
          ) : (
              <div className='text-center d-flex justify-content-center align-items-center titulos' style={{ width: '100%', height: '100%' }}>
              <h3>Selecione um personagem para conversar</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
