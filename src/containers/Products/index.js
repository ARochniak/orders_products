import React, { useState } from 'react';
import { connect } from 'react-redux';
import ProductItem from 'components/ProductItem';
import './style.css';

const Products = props => {
  const [optionSelected, setOption] = useState(null);

  const changeHandler = e => {
    setOption(e.currentTarget.value);
  };

  const renderProducts = list => {
    let productList = [...list];
    if (optionSelected) {
      productList.sort((a, b) => {
        let res;
        if (a[optionSelected] > b[optionSelected]) {
          res = 1;
        } else if (a[optionSelected] < b[optionSelected]) {
          res = -1;
        } else res = 0;
        return res;
      });
    }

    productList = productList.map((product, i) => {
      return <ProductItem product={product} key={i} />;
    });
    return productList;
  };

  return (
    <>
      <div className="products_header">
        <h2>Products / {props.productList.length}</h2>
        <div>
          <span>Sort by: </span>
          <select onChange={changeHandler}>
            <option value="" defaultValue>
              Default
            </option>
            <option value="type">By type</option>
          </select>
        </div>
      </div>
      <ul className="products">{renderProducts(props.productList)}</ul>
    </>
  );
};

function mapStateToProps(state) {
  return { productList: state.productList };
}

export default connect(mapStateToProps)(Products);
