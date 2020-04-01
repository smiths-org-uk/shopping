import items from '../data/items.json';

const repository = {};

repository.fetchAll = () => {
  return new Promise((resolve, reject) => {
    resolve(items);
  });
};

export default repository;
