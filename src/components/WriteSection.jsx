import React, { useState, useEffect } from 'react';

export default function WriteSection() {
  const [conteudo, setConteudo] = useState('');
  const [status, setStatus] = useState('Salvando...');

  useEffect(() => {
    const notaSalva = localStorage.getItem('minhaNota');
    if (notaSalva) {
      setConteudo(notaSalva);
    }
  }, []);

  useEffect(() => {
    const salvarNota = () => {
      localStorage.setItem('minhaNota', conteudo);
      setStatus('Salvo automaticamente.');
    };

    const intervalo = setInterval(salvarNota, 5000);
    return () => clearInterval(intervalo);
  }, [conteudo]);

  const handleChange = (e) => {
    setConteudo(e.target.value);
    setStatus('Salvando...');
  };

  return (
    <div id="note-container">
      <p id="status">{status}</p>
      <textarea
        id="anotacao"
        value={conteudo}
        onChange={handleChange}
        placeholder="Digite sua nota aqui..."
      />
    </div>
  );
}
