import React from 'react';
import { connect } from 'react-redux';
import { SET_ACTIVE_ORDER } from 'types';
import getDate from '../../date';
import trash from './trash.png';

export default connect()( (props) => {
  const {i, classN, id, order, active, setRemovingOrder, setAlert} = props;
  const setActiveOrder = (e, order) => {
    if (e.target.tagName === 'IMG') return;
    props.dispatch({type: SET_ACTIVE_ORDER, order});
  }

  const getTotalPrice = (type, order) => {
    const products = order.products;
    switch(type) {
      case '$':
        return products.reduce( (tot, cur) => +tot + +cur.price[0].value, 0)
      case 'UAH':
        return products.reduce( (tot, cur) => +tot + +cur.price[1].value, 0)
      default: return
    }
  }
  return (
    <li key={i} className={classN} id={id} onClick={(e) => setActiveOrder(e, i)}>

      { active ? null: <div>{order.title}</div> }

      <div>{order.products.length}  <br/>
        {order.products.length > 1 ? 'Products' : 'Product'}
      </div>
      <div>{getDate(order.date, 'numeric')} 
        <br/> {getDate(order.date)}
      </div>

      {active ? null: 
        <>
          <div>{getTotalPrice('$', order)} $<br/> {getTotalPrice('UAH', order)} UAH</div>
          <img src={trash} 
            alt='trash' 
            className='trash'
            onClick={() => {
              setRemovingOrder(order.id);
              setAlert(true);
            }}/>
        </>
      }
    </li>
  )
})