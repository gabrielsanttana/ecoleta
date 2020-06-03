import {Request, Response} from 'express';
import knex from '../database/connection';

class PointController {
  async create(request: Request, response: Response) {
    const {
      name, 
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      itemsIds
    } = request.body;

    const point = {
      name, 
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      itemsIds
    }
  
    const trx = await knex.transaction();
  
    const pointIds = await trx('points').insert({
      image: 'default',
      name,
      email, 
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    });
  
    const pointItems = itemsIds.map((itemId: number) => {
      return {
        point_id: pointIds[0],
        item_id: itemId
      } 
    });
  
    await trx('points_items').insert(pointItems);
  
    return response.json({
      point_id: pointIds[0],
      ...point
    });
  }
}

export default PointController;