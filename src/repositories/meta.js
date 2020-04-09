import db from '../interfaces/db';

const repository = {};

repository.fetchDeliveryDate = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT value FROM meta WHERE id = 'DELIVERY_DATE'")
      .then((results) => {
        resolve(results[0]);
      })
  });
};

repository.saveDeliveryDate = deliveryDate => {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE meta SET value = '${deliveryDate}' WHERE id = 'DELIVERY_DATE'`)
      .then(() => {
        resolve();
      })
  });
};

repository.reset = () => {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE meta SET value = ''`)
      .then(() => {
        resolve();
      })
  });
};

export default repository;
