import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductId = () => {
  let {name} = useParams();
  
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/product')
    .then((data) => data.json())
    .then((data) => setItem([...data]))
    .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      {
        item.filter((e) => e.name == name).map((e) => <h1 key = {e.name}>{e.name}</h1>)
      }
    </div>
  )
}

export default ProductId;