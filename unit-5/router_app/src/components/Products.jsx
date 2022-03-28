import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProductWrapper = styled.div`
  // border:2px solid black;
  
  a{
    margin: 2%;
  }
`;

  const ProWrap = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    div{
      border:2px solid red; 
      width: 20%;
      margin : 2% 2%;
      border-radius: 10px;
      padding: 2%;
    }
  `;

const Products = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let data = await fetch('http://localhost:3004/product');
      data = await data.json();
      setList([...data]);
    } catch (error) {
      console.log(error);
    }
  }

  const handlePro = (val) => {
    navigate(`/productid/${val}`);
  }

  return (
    <ProductWrapper>
      <div>Products</div>
      <div>
        <a href="">Electronics</a>
        <a href="">Clothing</a>
        <a href="">Food</a>
        <a href="">Stationary</a>
      </div>
      <ProWrap>
        {
          list.map((ele)=><div key = {ele.name}>
            <p>{ele.name}</p>
            <p>{ele.category}</p>
            <p>{ele.price}</p>
            <button onClick = {() => handlePro(ele.name)}>Product</button>
          </div>)
        }
      </ProWrap>
    </ProductWrapper>
  )
}

export default Products;