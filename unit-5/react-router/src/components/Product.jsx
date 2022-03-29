import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
    const {idNum} = useParams();
    // console.log(idNum);

    let navigate = useNavigate();

    const [singleProd, setSingleProd] = useState({}); 

    useEffect(() => {
      getReq();
    }, []);

    const getReq = async() => {
      let data = await fetch('http://localhost:3004/product');
      data = await data.json();
      let item = data.filter((prod)=> prod.id == idNum);

      if(item.length <= 0){
        navigate('/error');
      }

      console.log(item)
      setSingleProd(...item);
    }

  return (
    <>
      <h4>Product</h4>
      {
        <div className="card" style={{width: "18rem"}}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{singleProd.name}</li>
          <li className="list-group-item">{singleProd.price}</li>
          <li className="list-group-item"><button type="button" className="btn btn-success">Add To Cart</button></li>
        </ul>
      </div>
      }
    </>
  )
}

export default Product;