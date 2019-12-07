import React from 'react';
import Guarantee from './Guarantee';

export default (props) => {
  const { product} = props;
  return(
    <li>
      <div>{product.title}</div>
      <div>{product.type}</div>
      <Guarantee 
        from={product.guarantee.start}
        to={product.guarantee.end}
      />
      <div>
        <div className='small'>{`${product.price[0].value} ${product.price[0].symbol}`}</div>
        <div>{`${product.price[1].value} ${product.price[1].symbol}`}</div>
      </div>
      <div>{product.orderTitle}</div>
    </li>
  )
}