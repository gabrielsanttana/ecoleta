import express from 'express';

import knex from './database/connection';
import PointController from './controllers/PointController';

const pointController = new PointController();

const routes = express.Router();

routes.get('/items', async (request, response) => {
  const items = await knex('items').select('*');

  const serializedItems = items.map(item => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    }
  });

  return response.json(serializedItems);
});

routes.post('/points', pointController.create);

export default routes;