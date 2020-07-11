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
      itemsIds,
    } = request.body;

    const point = {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      itemsIds,
    };

    const trx = await knex.transaction();

    const pointIds = await trx('points').insert({
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    });

    const pointItems = itemsIds.map((itemId: number) => {
      return {
        point_id: pointIds[0],
        item_id: itemId,
      };
    });

    await trx('points_items').insert(pointItems);

    await trx.commit();

    return response.json({
      point_id: pointIds[0],
      ...point,
    });
  }

  async index(request: Request, response: Response) {
    const {city, uf, items} = request.query;

    const parsedItems = String(items)
      .split(',')
      .map((item) => Number(item.trim()));

    const points = await knex('points')
      .join('points_items', 'points.id', '=', 'points_items.point_id')
      .whereIn('points_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*');

    return response.json(points);
  }

  async show(request: Request, response: Response) {
    const {id} = request.params;

    const point = await knex('points').where('id', id).first();

    if (!point) {
      return response.status(400).json({error: 'Point not found'});
    }

    const collectedItems = await knex('items')
      .join('points_items', 'items.id', '=', 'points_items.item_id')
      .where('points_items.point_id', id);

    return response.json({
      point,
      collectedItems,
    });
  }
}

export default PointController;
