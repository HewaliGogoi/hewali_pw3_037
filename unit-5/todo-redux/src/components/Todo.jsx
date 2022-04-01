import React from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const ItemWrapper = styled.div`
    cursor: pointer;
    border : 2px solid #cecece;
    margin : 5px 2px;
    padding: 5px 30px;

    button{
      margin: 
    }
`;

const Todo = ({item, toggleTodo, deleteTodo}) => {
  const {title, status, id} = item;
  const navigate = useNavigate();

  return (
    <ItemWrapper>
      <h4 onClick={()=>navigate(`/items/${id}`)}>{title}</h4>
      <p>{status? "CHECKED" : "UNCHECKED"}</p>
      <button onClick = {() => toggleTodo(id, status)}>TOGGLE</button>
      <button onClick = {() => deleteTodo(id)}>DELETE</button>
     </ItemWrapper>
  )
}

export default Todo;