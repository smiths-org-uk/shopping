import db from '../interfaces/db';

const repository = {};

repository.fetchAll = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM items ORDER BY regularity ASC, category ASC, title ASC')
      .then((results) => {
        resolve(results);
      })
  });
};

repository.save = items => {
  return new Promise((resolve, reject) => {
    const promises = [];

    items.forEach(item => {
      promises.push(db.query(`UPDATE items SET quantity = '${item.quantity}', notes = '${item.notes}' WHERE title = '${item.title}'`))
    });

    Promise.all(promises)
      .then(() => {
        resolve();
      })
  });
};

repository.reset = () => {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE items SET quantity = '', notes = ''`)
      .then(() => {
        resolve();
      })
  });
};

export default repository;
