import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
  const [list, setList] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    let data = await fetch('http://localhost:3004/product');
    data = await data.json();
    setList([...data])
    // console.log(list)
  } 

  const handleProduct = (e) => {
    // console.log(e);
    navigate(`/allproducts/${e.id}`);
  }

  return (
    <>
      <h4>AllProducts</h4>
      <div>
        <table>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Link to buy</th>
            </tr>
          </thead>
          <tbody>
            {
            list.map((e, ind)=> {return <tr key = {e.id}>
              <td>{ind+1}</td>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td onClick = {() => handleProduct(e)}><button type="button" className="btn btn-outline-primary">Buy</button></td>
            </tr>
            })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AllProducts;