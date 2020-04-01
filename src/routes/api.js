import {Router} from 'express';
import itemService from '../services/item';

// eslint-disable-next-line new-cap
const router = Router();

router.route('/items')
    .get((req, res, next) => {
      itemService.fetchAll()
          .then(items => {
            res.send(items);
          });
    });

router.route('/save')
    .put((req, res, next) => {
      itemService.save(req.body)
          .then(() => {
            res.send();
          })
    });

router.route('/reset')
    .put((req, res, next) => {
      itemService.reset()
          .then(() => {
            res.send();
          })
    });

export default router;
