import itemRepository from '../repositories/item';
import mail from "../repositories/mail";

const service = {};

service.fetchAll = () => {
  return itemRepository.fetchAll();
};

service.save = items => {
  return new Promise((resolve, reject) => {
    itemRepository.save(items)
      .then(() => {
        // Send email
        mail.sendMail();
        resolve()
      });
  });
}

service.reset = () => {
  return new Promise((resolve, reject) => {
    itemRepository.reset()
      .then(() => {
        mail.sendMail();
        // Send email
        resolve()
      });
  });
}

export default service;
