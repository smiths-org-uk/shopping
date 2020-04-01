import itemRepository from '../repositories/item';

const service = {};

service.fetchAll = () => {
  return itemRepository.fetchAll();
};

service.save = items => {
  return itemRepository.save(items);
}

service.reset = () => {
  return itemRepository.reset();
}

export default service;
