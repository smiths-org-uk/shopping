import items from '../data/items.json';

const repository = {};

repository.fetchAll = () => {
  return new Promise((resolve, reject) => {
    resolve(items);
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
