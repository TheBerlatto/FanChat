import React, { useState } from 'react';
  // Para estilos customizados

const Chat = ({ personagem, mensagens, enviarMensagem, personalidade }) => {
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    if (mensagem.trim()) {
      enviarMensagem(mensagem);  // Envia a mensagem
      setMensagem('');  // Limpa o campo de input
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleEnviar(); // Chama a função de enviar mensagem
    }
  };

  return (
    <div className="chat-window rounded p-3" style={{ height: '550px' }}>
      <h4 className='mb-2' style={{margin: '0', fontFamily: 'Afacad Flux', fontWeight: 700}}>Conversando com {personagem}</h4>
      <div className="chat-mensagens p-3 mb-3" style={{ height: '450px', overflowY: 'auto' }}>
        {mensagens.map((msg, index) => (
          <div key={index} className={`chat-msg ${msg.tipo}`}>
            <p><strong>{msg.tipo === 'enviada' ? 'Você: ' : `${personagem}: `}</strong>{msg.texto}</p>
          </div>
        ))}
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Digite uma mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="btn btn-success" onClick={handleEnviar}>
          Enviar
        </button>
      </div>
    </div>
  );
  
};

export default Chat;
