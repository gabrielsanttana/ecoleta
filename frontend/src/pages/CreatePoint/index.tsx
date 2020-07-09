import React, {useEffect, useState, ChangeEvent, FormEvent} from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import axios from 'axios';
import api from '../../services/api';
import logo from '../../assets/logo.svg';

import './styles.css';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const CreatePoint: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    latitude: 0,
    longitude: 0,
  });

  const [selectedCity, setSelectedCity] = useState<string>('0');
  const [selectedUf, setSelectedUf] = useState<string>('0');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude, longitude} = position.coords;

      setFormData({
        ...formData,
        latitude,
        longitude,
      });
    });
  }, []);

  useEffect(() => {
    api.get('/items').then((response) => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);

        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  function selectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function selectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function selectItem(item: number) {
    const alreadySelected = selectedItems.findIndex(
      (selectedItem) => selectedItem === item,
    );

    if (alreadySelected >= 0) {
      const itemsWithoutClickedItem = selectedItems.filter(
        (selectedItem) => selectedItem !== item,
      );

      setSelectedItems(itemsWithoutClickedItem);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }

  async function registerItem(event: FormEvent) {
    event.preventDefault();

    const {name, email, whatsapp, latitude, longitude} = formData;
    const items = selectedItems;

    const uf = selectedUf;
    const city = selectedCity;

    const data = {
      name,
      email,
      whatsapp,
      uf,
      latitude,
      longitude,
      city,
      items,
    };

    await api.post('/points', data);

    alert('Ponto de coleta cadastrado com sucesso!');
  }

  return (
    <div id="create-point">
      <header>
        <img src={logo} alt="Ecoleta Logo" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form>
        <h1>
          Cadastro do ponto
          <br /> de coleta
        </h1>

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
              autoFocus
              onChange={(event) => handleInputChange(event)}
              value={formData.name}
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
                onChange={(event) => handleInputChange(event)}
                value={formData.email}
              />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
                placeholder="Digite o whatsapp"
                onChange={(event) => handleInputChange(event)}
                value={formData.whatsapp}
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                placeholder="Ex.: -22.7821461"
                onChange={(event) => handleInputChange(event)}
                value={formData.latitude}
              />
            </div>

            <div className="field">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                placeholder="Ex.: -47.3413013"
                onChange={(event) => handleInputChange(event)}
                value={formData.longitude}
              />
            </div>
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="state">Estado</label>
              <select
                value={selectedUf}
                onChange={(event) => selectUf(event)}
                name="state"
                id="state"
              >
                <option value="0">Selecione um UF</option>
                {ufs?.map((uf) => {
                  return (
                    <option key={uf} value={uf}>
                      {uf}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select
                value={selectedCity}
                onChange={(event) => selectCity(event)}
                name="city"
                id="city"
              >
                <option value="0">Selecione uma cidade</option>
                {cities.map((city) => {
                  return (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>

            <span>Selecione um ou mais ítens abaixo</span>
          </legend>

          <ul className="items-grid">
            {items.map((item) => {
              return (
                <li
                  className={selectedItems.includes(item.id) ? 'selected' : ''}
                  key={item.id}
                  onClick={() => selectItem(item.id)}
                >
                  <img src={item.image_url} alt={item.title} />
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </fieldset>

        <button onClick={registerItem}>Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
