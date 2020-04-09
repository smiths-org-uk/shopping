import {Router} from 'express';
import shoppingService from '../services/shopping';

// eslint-disable-next-line new-cap
const router = Router();

router.route('/items')
    .get((req, res, next) => {
      shoppingService.fetchItems()
          .then(items => {
            res.send(items);
          });
    });

router.route('/deliveryDate')
    .get((req, res, next) => {
      shoppingService.fetchDeliveryDate()
          .then(deliveryDateObject => {
            res.send(deliveryDateObject);
          });
    });

router.route('/save')
    .put((req, res, next) => {
      shoppingService.save(req.body.deliveryDate, req.body.items)
          .then(() => {
            res.send();
          })
    });

router.route('/reset')
    .put((req, res, next) => {
      shoppingService.reset()
          .then(() => {
            res.send();
          })
    });

export default router;
