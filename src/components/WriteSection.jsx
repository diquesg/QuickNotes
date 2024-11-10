/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function WriteSection() {
  const [conteudo, setConteudo] = useState('');
  const [titulo, setTitulo] = useState('Titulo');
  const [status, setStatus] = useState('Salvando...');
  const [editandoTitulo, setEditandoTitulo] = useState(false);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      ['link'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['clean']
    ],
  };

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

  const salvarNota = () => {
    console.log("Salvando nota...");
    localStorage.setItem('minhaNota', conteudo);
    localStorage.setItem('meuTitulo', titulo);
    setStatus('Salvo automaticamente.');
  };

  useEffect(() => {
    const intervalo = setInterval(salvarNota, 5000);
    return () => clearInterval(intervalo);
  }, [conteudo, titulo]);

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
    setStatus('Salvando...');
  };

  const handleConteudoChange = (value) => {
    setConteudo(value);
    setStatus('Salvando...');
  };

  const toggleEditandoTitulo = () => {
    setEditandoTitulo(!editandoTitulo);
  };

  const handleKeyDown = (e) => {
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
          <div className='titulo-botao'>
            <h1>{titulo}</h1>
            <button onClick={toggleEditandoTitulo} className="botao-editar">
              <img src="src/img/pen.png" alt="Editar" />
            </button>
          </div>
        )}
        <p id="status">{status}</p>
      </div>
      <ReactQuill
        value={conteudo}
        onChange={handleConteudoChange}
        theme="snow"
        className='textarea'
        modules={modules}
      />
    </div>
  );
}