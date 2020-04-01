import { SET_ITEMS } from './Actions';

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
  }

  return items;
};
