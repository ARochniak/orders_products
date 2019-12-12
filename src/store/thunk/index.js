import { REMOVE_ORDER } from 'store/types';

const removeOrder = id => {
  return (dispatch, getState) => {
    const products = [...getState().productList];
    const orders = [...getState().ordersList];

    orders = orders.filter(order => order.id !== id);
    products = products.filter(product => product.order !== id);

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
