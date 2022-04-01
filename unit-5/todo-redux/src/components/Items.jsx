import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";


const Items = () => {
    const {id} = useParams();
    const item = useSelector((state) => state.todo);
    // const [to, setTo] = useState();

    // console.log(item.filter((e) => e.id == id && e));
    // useEffect( () => {
    //     setTo(item.filter((e) => e.id == id))
    // }, [])
    // console.log(item)

  return (
    <h1>{item.filter((e) => e.id == id).map((ele) => (ele.title))}</h1>
  )
}

export default Items;