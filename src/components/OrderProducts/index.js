import React from 'react';

const OrderProducts = props => {
  const { ordersList, activeOrder, close } = props;

  return (
    <div className="orderProducts">
      <h2>{ordersList[activeOrder].title}</h2>
      <ul>
        {ordersList[activeOrder].products.map((product, i) => (
          <li key={i}>{product.title}</li>
        ))}
      </ul>
      <div className="order_close" onClick={close}>
        +
      </div>
    </div>
  );
};

export default OrderProducts;
