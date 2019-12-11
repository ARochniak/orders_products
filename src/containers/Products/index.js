import React, { useState } from 'react';
import { connect } from 'react-redux';
import ProductList from 'components/ProductList';
import './style.css';

const Products = props => {
  const [optionSelected, setOption] = useState(null);

  const changeHandler = e => {
    setOption(e.currentTarget.value);
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
      <ul className="products">
        <ProductList list={props.productList} option={optionSelected} />
      </ul>
    </>
  );
};

function mapStateToProps(state) {
  return { productList: state.productList };
}

export default connect(mapStateToProps)(Products);
