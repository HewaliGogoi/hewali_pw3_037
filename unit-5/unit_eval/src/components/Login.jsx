import React from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
    display: flex;
    flex-direction:column;
    width:30%;
    margin: auto;

    input, button{
        padding:2%;
        margin:2%;
    }
`;

const Login = () => {

  return (
    <>
        <h1>Enter your Log In Details</h1>
        <LoginWrapper>
            <input type="text" placeholder="Enter your username" />
            <input type="text" placeholder="Enter the password"/>
            <button style ={{width:"50%", margin:"auto", marginTop:"5%"}}>Log In</button>
        </LoginWrapper>
    </>
  )
}

export default Login;