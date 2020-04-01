// Action Types
export const SET_ITEMS = "SET_ITEMS";

// Action Creators
export default class Actions {
  static setItems(items) {
    return {
      type: SET_ITEMS,
      items: items,
    };
  }
}
