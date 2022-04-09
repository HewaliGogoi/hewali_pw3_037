import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
    display:flex;
    justify-content:space-evenly;
    background-color:black;
    color:skyblue;
`;
const Navbar = () => {

  const navigate = useNavigate();

  

  return (
    <NavbarWrapper>
        <h1 onClick={() => navigate("/")}>Home</h1>
        <h1 onClick={() => navigate("/register")}>Register</h1>
        <h1 onClick={() => navigate("/login")}>Log In</h1>
        <h1 onClick={() => navigate("/employees")}>Employees</h1>
    </NavbarWrapper>
  )
}

export default Navbar;