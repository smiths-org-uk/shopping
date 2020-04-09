// Action Types
export const SET_ITEMS = "SET_ITEMS";
export const SET_ITEM = "SET_ITEM";
export const SET_DELIVERY_DATE = "SET_DELIVERY_DATE";

// Action Creators
export default class Actions {
  static setItems(items) {
    return {
      type: SET_ITEMS,
      items: items,
    };
  }

  static setItem(index, item) {
    return {
      type: SET_ITEM,
      index: index,
      item: item
    }
  }

  static setDeliveryDate(deliveryDate) {
    return {
      type: SET_DELIVERY_DATE,
      deliveryDate: deliveryDate
    }
  }
}
