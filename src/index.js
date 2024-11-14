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

  // Função para selecionar personagem
  const iniciarConversa = (personagem) => {
    setPersonagemAtivo(personagem);
    setMensagens([]); // Limpa as mensagens ao selecionar um novo personagem
  };

  // Função para enviar mensagem
  const enviarMensagem = async (texto) => {
    // Exibe a mensagem do usuário imediatamente
    setMensagens((mensagensAnteriores) => [
      ...mensagensAnteriores,
      { tipo: 'enviada', texto }
    ]);
  
    // Define o prompt com as características do personagem se for a primeira interação
    const personagem = Personalidades[personagemAtivo];
    const prompt = `Você é o personagem ${personagemAtivo}, com as seguintes características:
      Traços: ${personagem.traços.join(", ")}
      Estilo: ${personagem.estilo}
      Interesses: ${personagem.interesses.join(", ")}
      Citação Inspiradora: "${personagem.citação_inspiradora}"
  
      Responda resumidamente de acordo com sua personalidade: ${texto}
    `;
  
    try {
      // Envia o prompt para o Gemini e aguarda a resposta
      const response = await fetch('http://localhost:4000/pergunte-ao-gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      
      const data = await response.json();
      
      // Exibe a resposta do Gemini quando estiver disponível
      setMensagens((mensagensAnteriores) => [
        ...mensagensAnteriores,
        { tipo: 'recebida', texto: data.completion }
      ]);
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
