import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {todo} from "../redux/action"
import Todo from './Todo';

const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // border : 2px solid black;
    width: 50%;
    margin:auto;
`;

const Home = () => {
    const [item, setItem] = useState('');
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todo);
    // console.log(todoList)

    useEffect(() => {
        getData();
    }, [])
    
    const handleChange = (e) => {
        // console.log(e.target.value);
        setItem(e.target.value);
    };

    const createPayload = () => {
        let payload = {
            title : item,
            status: false
        }

        fetch("https://hewali-fakeserver.herokuapp.com/todo/",{
            method : "POST",
            body: JSON.stringify(payload),
            headers: {"Content-Type": "Application/json"}
        })
        .then(()=>getData())
    }

    const getData = () => {
        fetch("https://hewali-fakeserver.herokuapp.com/todo/")
        .then((data) => data.json())
        .then((data) => dispatch(todo(data)))
    }

    const toggleTodo = (id, stat) => {
        
        fetch(`https://hewali-fakeserver.herokuapp.com/todo/${id}`,{
            method : "PATCH",
            body: JSON.stringify({status : !stat}),
            headers: {"Content-Type": "Application/json"}
        })
        .then(()=>getData())
    }

    const deleteTodo = (id) => {
        
        fetch(`https://hewali-fakeserver.herokuapp.com/todo/${id}`,{
            method : "DELETE"
        })
        .then(()=>getData())
    }

  return (
    <TodoWrapper>
        <h1>TODO</h1>
        <div>
            <input onChange={handleChange} value={item} type="text" placeholder="Type your items"/>
            <button onClick = {() => createPayload()}>ADD</button>
        </div>
        <h3>Items</h3>
        {todoList.map((item) => <Todo toggleTodo = {toggleTodo} deleteTodo = {deleteTodo} item = {item} key={item.id}/>)}
        
    </TodoWrapper>
  )
}

export default Home;