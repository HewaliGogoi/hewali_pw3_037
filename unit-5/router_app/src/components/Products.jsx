import React from 'react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
  border:2px solid black;

  a{
    margin: 2%;
  }
`;

const Products = () => {
  
  return (
    <ProductWrapper>
      <div>Products</div>
      <a href="">Electronics</a>
      <a href="">Clothing</a>
      <a href="">Food</a>
      <a href="">Stationary</a>
    </ProductWrapper>
  )
}

export default Products;