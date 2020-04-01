import itemRepository from '../repositories/item';

const service = {};

service.fetchAll = () => {
  return new Promise((resolve, reject) => {
    itemRepository.fetchAll()
        .then((items) => {
          resolve(items);
        });
  });
};

export default service;
