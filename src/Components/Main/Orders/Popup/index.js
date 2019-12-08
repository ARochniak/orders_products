import React from 'react';
import { connect } from 'react-redux';
import { REMOVE_ORDER } from 'types';
import trash from './trash_red.png';
import './style.css';

const Popup = (props) => {
  const {order, title} = props;
  const onRemove = () => {
    props.dispatch({type: REMOVE_ORDER, order})
    props.close();
  }
  const onClose = () => {
    props.close();
  }
  return (
    <div className='popup'>
      <div className='popup_alert'>
        <h4>Are you sure you want to remove this order?</h4>
        <div className='order_title'>{title}</div>
        <div className='alert_btns'>
          <button onClick={onClose}>CANCEL</button>
          <button onClick={onRemove}>
            <img src={trash} 
              alt='trash' 
              width='15' 
              height='15'
              style={{marginRight: '10px'}}/>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  )
}

export default connect()(Popup);