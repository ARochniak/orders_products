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
        <div className="orderTitle">{title}</div>
        <div className="alert_btns">
          <button onClick={onClose}>
            <span className="btn__content" tabIndex="-1">
              CANCEL
            </span>
          </button>
          <button onClick={onRemove}>
            <img src={trash} alt="trash" width="15" height="15" />
            <span className="btn__content" tabIndex="-1">
              REMOVE
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.querySelector('main'));
};

export default Popup;
