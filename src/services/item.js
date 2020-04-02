import itemRepository from '../repositories/item';

const service = {};

service.fetchAll = () => {
  return itemRepository.fetchAll();
};

service.save = items => {
  return new Promise((resolve, reject) => {
    itemRepository.save(items)
      .then(() => {
        // Send email
        resolve()
      });
  });
}

service.reset = () => {
  return new Promise((resolve, reject) => {
    itemRepository.reset()
      .then(() => {
        // Send email
        resolve()
      });
  });
}

export default service;
