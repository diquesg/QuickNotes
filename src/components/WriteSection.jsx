import React, { useState, useEffect } from 'react';
import EditBar from "./EditBar"

export default function WriteSection() {
  const [conteudo, setConteudo] = useState('');
  const [titulo, setTitulo] = useState('Titulo');
  const [status, setStatus] = useState('Salvando...');
  const [editandoTitulo, setEditandoTitulo] = useState(false);

  useEffect(() => {
    const notaSalva = localStorage.getItem('minhaNota');
    if (notaSalva) {
      setConteudo(notaSalva);
    }
    const tituloSalvo = localStorage.getItem('meuTitulo');
    if (tituloSalvo) {
      setTitulo(tituloSalvo);
    }
  }, []);

  useEffect(() => {
    const salvarNota = () => {
      localStorage.setItem('minhaNota', conteudo);
      localStorage.setItem('meuTitulo', titulo);
      setStatus('Salvo automaticamente.');
    };

    const intervalo = setInterval(salvarNota, 5000);
    return () => clearInterval(intervalo);
  }, [conteudo, titulo]);

  const handleChange = (e) => {
    setConteudo(e.target.value);
    setStatus('Salvando...');
  };

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
    setStatus('Salvando...');
  };

  const toggleEditandoTitulo = () => {
    setEditandoTitulo(!editandoTitulo);
  };

  const handleKeyDown = (e) =>{
    if (e.key === 'Enter') {
      toggleEditandoTitulo();
    }
  };

  return (
    <div id="note-container">
      <div className="title-status">
        {editandoTitulo ? (
          <input
            type="text"
            value={titulo}
            onChange={handleTituloChange}
            onBlur={toggleEditandoTitulo}
            autoFocus
            className="titulo-edit"
            maxLength={60}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <>
            <div className='titulo-botao'>
              <h1>{titulo}</h1>
              <button onClick={toggleEditandoTitulo} className="botao-editar"><img src="src\img\pen.png"/></button>
            </div>
          </>
        )}
        <p id="status">{status}</p>
      </div>
      <EditBar/>
      <textarea
        id="anotacao"
        value={conteudo}
        onChange={handleChange}
        placeholder="Digite sua nota aqui..."
      />
    </div>
  );
}