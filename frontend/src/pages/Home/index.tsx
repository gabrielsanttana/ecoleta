import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import './styles.css';

const Home: React.FC = () => {
  return (
    <div id="home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta Logo" />
        </header>
        
        <main>
          <h1>Seu marketplace de coleta de resíduos</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>

          <a href="/create/point">
            <span><FiLogIn color="#fff" /></span>
            <strong>Cadastre um ponto de coleta</strong>
          </a>
        </main>
      </div>
    </div>
  );
}

export default Home;