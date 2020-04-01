import db from '../interfaces/db';

const repository = {};

repository.fetchAll = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM items ORDER BY regularity ASC, title ASC')
      .then((results) => {
        resolve(results);
      })
  });
};

repository.save = (items) => {
  return new Promise((resolve, reject) => {
    // Save
    resolve();
  });
};

repository.reset = () => {
  return new Promise((resolve, reject) => {
    // Reset
    resolve();
  });
};

export default repository;
