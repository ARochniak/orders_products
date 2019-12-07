import React from 'react';
import { connect } from 'react-redux';
import { CLOSE_ACTIVE_ORDER } from 'types';

const orderProducts = (props) => {
  const { ordersList, activeOrder } = props;
  const closeHandler = () => {
    props.dispatch({type: CLOSE_ACTIVE_ORDER})
  }

  return (
    <div className='orderProducts'>
      <h2>{props.ordersList[props.activeOrder].title}</h2>
      <ul>
        {ordersList[activeOrder].products.map( (product, i) => 
          <li key={i}>{product.title}</li>
        )}
      </ul>
      <div className="order_close" onClick={closeHandler}>+</div>
    </div>
  )
}

function mapStateToProps (state) {
  return {ordersList: state.ordersList, activeOrder: state.activeOrder};
}

export default connect(mapStateToProps)(orderProducts);  