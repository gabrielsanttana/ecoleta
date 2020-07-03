import {Request, Response} from 'express';
import knex from '../database/connection';
import * as dotenv from 'dotenv';

dotenv.config();

class ItemController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://${process.env.API_IP_ADDRESS}:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default ItemController;
