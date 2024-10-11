import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartao from './componentes/Cartao';
import Personagem from './componentes/Personagem';
import './componentes/Chat.css';
import Chat from './componentes/Chat';

const imagensPersonagens = {
  'Toretto': require('./images/Toretto.jpg'),
  'Tony Stark': require('./images/TonyStark.jpg'),
  'Katniss Everdeen': require('./images/Katniss.jpeg'),
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
  const enviarMensagem = (texto) => {
    setMensagens([...mensagens, { tipo: 'enviada', texto }]);
  };

  return (
    <div className='container mt-2'>
      <div className='row'>
        {/* Coluna de Personagens */}
        <div className='col-12 col-md-4'>
          <h2>Personagens</h2>
          <div className='colunm'>
            {personagens.map((personagem, index) => (
              <div key={index} className='col-12 col-xl-6 col-lg-12 mb-3'>
                <Cartao imagem={imagensPersonagens[personagem]}>
                  <Personagem nome={personagem} onSelect={() => iniciarConversa(personagem)} />
                </Cartao>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna de Chat */}
        <div className='col-12 col-md-8'>
          {personagemAtivo ? (
            <Chat
              personagem={personagemAtivo}
              mensagens={mensagens}
              enviarMensagem={enviarMensagem}
            />
          ) : (
            <div className='text-center'>
              <h3>Selecione um personagem para conversar</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
