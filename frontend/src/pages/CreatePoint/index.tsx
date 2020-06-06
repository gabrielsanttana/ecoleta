import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import './styles.css';

const CreatePoint: React.FC = () => {
  return (
    <div id="create-point">
      <header>
        <img src={logo} alt="Ecoleta Logo"/>
        
        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form>
        <h1>Cadastro do ponto<br/> de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              placeholder="Digite o nome"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="Digite o e-mail"
              />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input 
                type="text" 
                name="whatsapp" 
                id="whatsapp"
                placeholder="Digite o whatsapp"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>

            <span>Selecione o endereço no mapa</span>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="number">Número</label>
              <input 
                type="text"  
                name="number" 
                id="number" 
                placeholder="Digite o número"
              />
            </div>
            
            <div className="field">
              <label htmlFor="state">Estado</label>
              <select name="state" id="state">
                <option value="0">Selecione um UF</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="city">Cidade</label>
            <select name="city" id="city">
              <option value="0">Selecione uma cidade</option>
            </select>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>

            <span>Selecione um ou mais ítens abaixo</span>
          </legend>

          <ul className="items-grid">
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt=""/>
              <span>Óleo de cozinha</span>
            </li>

            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt=""/>
              <span>Óleo de cozinha</span>
            </li>

            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt=""/>
              <span>Óleo de cozinha</span>
            </li>

            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt=""/>
              <span>Óleo de cozinha</span>
            </li>

            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt=""/>
              <span>Óleo de cozinha</span>
            </li>

            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt=""/>
              <span>Óleo de cozinha</span>
            </li>
          </ul>
        </fieldset>

        <button>Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
}

export default CreatePoint;