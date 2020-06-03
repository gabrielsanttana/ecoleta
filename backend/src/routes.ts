import express from 'express';

import PointController from './controllers/PointController';
import ItemController from './controllers/ItemController';

const pointController = new PointController();
const itemController = new ItemController();

const routes = express.Router();

routes.get('/items', itemController.index);

routes.post('/points', pointController.create);

export default routes;