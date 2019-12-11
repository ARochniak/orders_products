import React from 'react';
import ProductItem from 'components/ProductItem';

const ProductList = props => {
  const { list, option } = props;
  let productList = [...list];
  if (option) {
    productList.sort((a, b) => {
      let res;
      if (a[option] > b[option]) {
        res = 1;
      } else if (a[option] < b[option]) {
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

export default ProductList;
