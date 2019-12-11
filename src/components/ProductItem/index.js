import React from 'react';
import getDate from 'utils/date';

const Guarantee = props => {
  const { from, to } = props;
  return (
    <div>
      <div>
        <span className="small">from </span>
        <br />
        <span className="small">to </span>
      </div>
      <div>
        {getDate(from, 'longNumeric')} <br />
        {getDate(to, 'normal')}
      </div>
    </div>
  );
};

const ProductItem = props => {
  const { product } = props;
  return (
    <li>
      <div>{product.title}</div>
      <div>{product.type}</div>
      <Guarantee from={product.guarantee.start} to={product.guarantee.end} />
      <div>
        <div className="small">
          {`${product.price[0].value} ${product.price[0].symbol}`}
        </div>
        <div>{`${product.price[1].value} ${product.price[1].symbol}`}</div>
      </div>
      <div>{product.orderTitle}</div>
    </li>
  );
};

export default ProductItem;
