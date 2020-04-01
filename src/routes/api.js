import {Router} from 'express';
import itemService from '../services/item';

// eslint-disable-next-line new-cap
const router = Router();

router.route('/items')
    .get((req, res, next) => {
      itemService.fetchAll()
          .then((items) => {
            res.send(items);
          });
    });

export default router;
