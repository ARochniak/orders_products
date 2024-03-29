import React from 'react';
import { createPortal } from 'react-dom';
import trash from './trash_red.png';
import './style.css';

const Popup = props => {
  const { title } = props;
  const onRemove = () => {
    props.remove();
    props.close();
  };
  const onClose = () => {
    props.close();
  };
  const content = (
    <div className="popup">
      <div className="popup_alert">
        <h4>Are you sure you want to remove this order?</h4>
        <div className="order_title">{title || 'Order removing'}</div>
        <div className="alert_btns">
          <button onClick={onClose}>CANCEL</button>
          <button onClick={onRemove}>
            <img
              src={trash}
              alt="trash"
              width="15"
              height="15"
              style={{ marginRight: '10px' }}
            />
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.querySelector('main'));
};

export default Popup;
