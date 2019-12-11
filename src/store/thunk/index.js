import { REMOVE_ORDER } from 'store/types';

const removeOrder = id => {
  return (dispatch, getState) => {
    const products = [];
    const orders = [];
    getState().ordersList.forEach(order => {
      if (order.id !== id) orders.push(order);
    });

    getState().productList.forEach(product => {
      if (product.order !== id) products.push(product);
    });
    dispatch({
      type: REMOVE_ORDER,
      state: {
        productList: products,
        activeOrder: null,
        ordersList: orders
      }
    });
  };
};

export default removeOrder;
