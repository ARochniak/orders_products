import * as types from '../types';

export default (state, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_ORDER: {
      return {
        ...state,
        activeOrder: action.order
      };
    }
    case types.CLOSE_ACTIVE_ORDER: {
      return {
        ...state,
        activeOrder: null
      };
    }
    case types.REMOVE_ORDER: {
      const products = [];
      const orders = [];
      state.ordersList.forEach(order => {
        if (order.id !== action.order) orders.push(order);
      });

      state.productList.forEach(product => {
        if (product.order !== action.order) products.push(product);
      });
      return {
        productList: products,
        activeOrder: null,
        ordersList: orders
      };
    }

    default:
      return state;
  }
};
