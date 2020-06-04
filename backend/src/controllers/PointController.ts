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
  
    const pointIds = await knex('points').insert({
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
  
    await knex('points_items').insert(pointItems);
  
    return response.json({
      point_id: pointIds[0],
      ...point
    });
  }

  async show(request: Request, response: Response) {
    const {id} = request.params;

    const point = await knex('points').where('id', id).first();

    if(!point) {
      return response.status(400).json({error: "Point not found"});
    } 

    const collectedItems = await knex('items')
      .join('points_items', 'items.id', '=', 'points_items.item_id')
      .where('points_items.point_id', id); 

    return response.json({
      point,
      collectedItems  
    });
  }
}

export default PointController;