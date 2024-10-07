import React, { useState } from 'react';
import './Chat.css';  // Para estilos customizados

const Chat = ({ personagem, mensagens, enviarMensagem }) => {
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    if (mensagem.trim()) {
      enviarMensagem(mensagem);  // Envia a mensagem
      setMensagem('');  // Limpa o campo de input
    }
  };

  return (
    <div className="chat-window border rounded p-3" style={{height:'400px'}}>
      <h4>Conversando com {personagem}</h4>
      <div className="chat-mensagens border p-3 mb-3" style={{ height: '300px', overflowY: 'auto' }}>
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
        />
        <button className="btn btn-success" onClick={handleEnviar}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
