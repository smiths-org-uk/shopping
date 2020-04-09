import itemRepository from '../repositories/item';
import metaRepository from '../repositories/meta';
import mail from "../repositories/mail";

const service = {};

service.fetchItems = () => {
  return itemRepository.fetchAll();
};

service.fetchDeliveryDate = () => {
  return metaRepository.fetchDeliveryDate();
};

service.save = (deliveryDate, items) => {
  return new Promise((resolve, reject) => {
    const promises = [];

    promises.push(metaRepository.saveDeliveryDate(deliveryDate));
    promises.push(itemRepository.save(items));

    Promise.all(promises)
      .then(() => {
        mail.sendMail();
        resolve();
      });
  });
}

service.reset = () => {
  return new Promise((resolve, reject) => {
    const promises = [];

    promises.push(metaRepository.reset());
    promises.push(itemRepository.reset());

    Promise.all(promises)
      .then(() => {
        mail.sendMail();
        resolve();
      });
  });
}

export default service;
