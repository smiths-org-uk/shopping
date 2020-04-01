import { 
  SET_ITEMS, 
  SET_ITEM } from './Actions';

export const rootReducer = (state, action) => {
  return {
    items: itemReducer(state.items, action)
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
