import React from 'react';
import { connect } from 'react-redux';
import getDate from 'utils/date';
import trash from './trash.png';

export default connect()(props => {
  const {
    i,
    classN,
    id,
    order,
    active,
    setRemovingOrder,
    setAlert,
    setActiveOrder
  } = props;
  const clickHandler = e => {
    if (e.target.tagName === 'IMG') return;
    setActiveOrder();
  };

  const getTotalPrice = type => {
    const products = order.products;
    switch (type) {
      case '$':
        return products.reduce((tot, cur) => +tot + +cur.price[0].value, 0);
      case 'UAH':
        return products.reduce((tot, cur) => +tot + +cur.price[1].value, 0);
      default:
        return null;
    }
  };
  return (
    <li key={i} className={classN} id={id} onClick={clickHandler}>
      {active ? null : <div>{order.title}</div>}

      <div>
        {order.products.length} <br />
        {order.products.length > 1 ? 'Products' : 'Product'}
      </div>
      <div>
        {getDate(order.date, 'numeric')}
        <br /> {getDate(order.date)}
      </div>

      {active ? null : (
        <>
          <div>
            {getTotalPrice('$')} $<br /> {getTotalPrice('UAH')} UAH
          </div>
          <img
            src={trash}
            alt="trash"
            className="trash"
            onClick={() => {
              setRemovingOrder({ id: order.id, title: order.title });
              setAlert(true);
            }}
          />
        </>
      )}
    </li>
  );
});
