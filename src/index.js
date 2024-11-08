import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartao from './componentes/Cartao';
import Chat from './componentes/Chat';
import Personalidades from './componentes/Personalidades';
import './css/App.css'
import './css/Chat.css';

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

  // Função para selecionar personagem
  const iniciarConversa = (personagem) => {
    setPersonagemAtivo(personagem);
    setMensagens([]); // Limpa as mensagens ao selecionar um novo personagem
  };

  // Função para enviar mensagem
  const enviarMensagem = async (texto) => {
    setMensagens([...mensagens, { tipo: 'enviada', texto }]);

    try {
      // Define o contexto da mensagem com a personalidade do personagem ativo
      const prompt = `${Personalidades[personagemAtivo]}\n\nUsuário: ${texto}`;

      // Faz a requisição ao backend
      const response = await fetch('http://localhost:4000/pergunte-ao-gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }), // Envia o prompt com a personalidade e a mensagem do usuário
      });

      const data = await response.json();

      if (data.completion) {
        // Adiciona a resposta do personagem ao chat
        setMensagens((prevMensagens) => [
          ...prevMensagens,
          { tipo: 'recebida', texto: data.completion },
        ]);
      }
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
