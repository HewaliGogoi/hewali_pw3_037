import React, { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    // border:2px solid black;
    width: 30%;
    margin: auto;
    align-items: left;
`;

const Login = () => {
  const navigate = useNavigate();
  const {isAuth, handleState} = useContext(AuthContext);  

  const [log, setLog] = useState({
    email : '',
    password : ''
  });

  const handleLog = (e) => {
    const {name, value} = e.target;

    setLog(
      {...log, 
        [name] : value
      }
    )
    // console.log(user.name);
  }

  const SubmitLog = async (e) => {
    e.preventDefault();

    let data = await fetch('http://localhost:3004/data');

    data = await data.json();

    const {name, password} = data;

    if(name == data.name && password == data.password){
      handleState();
      navigate("/");
    }else{
      prompt('Please provide the valid details')
    }

    console.log(data);
    // getData();
  }

    return (
      <FormWrapper>
        <div>Login</div>
        <input name="email" onChange={handleLog} type="text" placeholder="Email ID"/>
        <input name="password" onChange={handleLog} type="text" placeholder="Password"/>
        <button onClick={SubmitLog}>Log In</button>
      </FormWrapper>
  )
}

export default Login;