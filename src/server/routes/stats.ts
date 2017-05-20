
import { Route } from './_base';
import { Stat } from '../entities/stat';
import { getEntityManager } from 'typeorm';
import { Logger } from '../logger';
import * as _ from 'lodash';

export class StatsRoute extends Route {
  createRoutes() {
    this.app.get('/stats', async (req, res) => {

      try {
        const stats = await getEntityManager().getRepository(Stat).find({
          alias: 'stat',
          orderBy: {
            id: 'ASC'
          }
        });

        res.json(stats);

      } catch(e) {
        res.status(500).json(e);
      }
    });

    this.app.post('/stats', async (req, res) => {

      try {
        const stat = await getEntityManager().getRepository(Stat).persist(req.body);
        Logger.debug(`Saved/updated stat`, stat);

        res.json(stat);

      } catch(e) {
        res.status(500).json(e);
      }
    });

    this.app.delete('/stats/:id', async (req, res) => {
      try {
        const stat = await getEntityManager().getRepository(Stat).findOneById(+req.params.id);
        await getEntityManager().getRepository(Stat).remove(stat);
        Logger.debug(`Removed stat`, stat);

        res.json(stat);

      } catch(e) {
        res.status(500).json(e);
      }
    });

  }
}
