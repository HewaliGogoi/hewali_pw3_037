import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RegisterWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: auto;
    align-items: left;
`;

const Register = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name : '',
    email : '',
    mobile : '',
    age : '',
    password : ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setUser(
      {...user, 
        [name] : value
      }
    )
    // console.log(user.name);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = await fetch('http://localhost:3004/data',{
      method : 'POST',
      body : JSON.stringify(user),
      headers : {"Content-Type": 'application/json'}
    });
    data = await data.json();
    setUser(data);
    navigate("/login");
    // getData();
  }
  
  // const getData = async () => {
  //   let data = await fetch('http://localhost:3004/data');
  //   data = await data.json();
  //   console.log(data);
  // }

  return (
    <RegisterWrapper>
      <div>Register</div>
      <input name="name" onChange={handleChange} type="text" placeholder="Name"/>
      <input name="email" onChange={handleChange} type="text" placeholder="Email ID"/>
      <input name="mobile" onChange={handleChange} type="text" placeholder="Mobile No."/>
      <input name="age" onChange={handleChange} type="text" placeholder="Age"/>
      <input name="password" onChange={handleChange} type="text" placeholder="Password"/>
      <button onClick = {handleSubmit}>Submit</button>
    </RegisterWrapper>
  )
}

export default Register;