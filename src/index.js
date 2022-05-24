import React from 'react';
import ReactDOM from 'react-dom/client';
import Cabecalho from './Cabecalho';
import Menu from './Menu';
import Main from './Main';
import Section from './Section';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cabecalho />
    <Menu />
    <Main />
    <Section />
    <Footer />
  </React.StrictMode>
);