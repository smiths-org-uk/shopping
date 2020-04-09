import { 
  SET_ITEMS, 
  SET_ITEM, 
  SET_DELIVERY_DATE} from './Actions';

export const rootReducer = (state, action) => {
  return {
    items: itemReducer(state.items, action),
    deliveryDate: deliveryDateReducer(state.deliveryDate, action)
  };
};

export const itemReducer = (itemsState, action) => {
  let items = Object.assign([], itemsState);

  switch (action.type) {
    case SET_ITEMS:
      items = action.items;
      break;
    case SET_ITEM:
      items[action.index] = action.item;
      break;
  }

  return items;
};

export const deliveryDateReducer = (deliveryDateState, action) => {
  let deliveryDate = deliveryDateState;

  switch (action.type) {
    case SET_DELIVERY_DATE:
      deliveryDate = action.deliveryDate;
      break;
  }

  return deliveryDate;
};
