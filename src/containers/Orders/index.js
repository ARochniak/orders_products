import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import OrderProducts from 'components/OrderProducts';
import Popup from 'components/Popup';
import OrderItem from 'components/OrderItem';
import removeOrder from 'store/thunk';
import { CLOSE_ACTIVE_ORDER, SET_ACTIVE_ORDER } from 'store/types';
import './style.css';

const Orders = props => {
  const [removingOrder, setRemovingOrder] = useState(null);
  const [alert, setAlert] = useState(false);
  const setActiveOrder = i => {
    props.dispatch({ type: SET_ACTIVE_ORDER, order: i });
  };

  const renderOrders = list => {
    const ordersList = list.map((order, i) => {
      // if some order is active
      const active = !(props.activeOrder === null);
      const classN = active ? 'active_li' : 'order_li';
      let activeId;
      if (active && props.activeOrder === i) activeId = 'active';
      return (
        <OrderItem
          setActiveOrder={() => setActiveOrder(i)}
          key={i}
          classN={classN}
          id={activeId}
          order={order}
          setRemovingOrder={setRemovingOrder}
          i={i}
          active={active}
          setAlert={setAlert}
        />
      );
      // render ordersList depend it's state
    });

    return ordersList;
  };

  const closeOrderProducts = () => {
    props.dispatch({ type: CLOSE_ACTIVE_ORDER });
  };

  return (
    <>
      {removingOrder && (
        <CSSTransition
          in={alert}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <Popup
            remove={() => props.dispatch(removeOrder(removingOrder.id))}
            close={() => setAlert(false)}
            title={removingOrder.title}
          />
        </CSSTransition>
      )}
      <h1>Orders / {props.ordersList.length}</h1>
      <div className="ordersPanel">
        <ul className="orders">{renderOrders(props.ordersList)}</ul>
        {props.activeOrder === null ? null : (
          <OrderProducts
            ordersList={props.ordersList}
            activeOrder={props.activeOrder}
            close={closeOrderProducts}
          />
        )}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { ordersList: state.ordersList, activeOrder: state.activeOrder };
}

export default connect(mapStateToProps)(Orders);
