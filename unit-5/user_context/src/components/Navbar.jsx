import React, { useContext } from 'react';
import styled from 'styled-components';
import {AuthContext} from '../context/AuthContext';

const NavbarWrapper = styled.nav`
    background-color: black;
    // border: 2px solid black;
    display: flex;
    color:white;
    height:100px;
    justify-content: space-between;

    button{
        // justify-self: center;
        background-color: yellow;
        width:15%;
        height : 40%;
        cursor:pointer;
        font-weight:bold;
        margin: auto 2%;
    }

    h3{
      font-weight:normal;
      font-style:${({isAuth}) => (isAuth? 'italic': 'normal')};
      margin: auto;
    }
`;

const Navbar = () => {
const {isAuth, toggleAuth, token} = useContext(AuthContext);

console.log(isAuth)
  return (
    <NavbarWrapper isAuth= {isAuth}>
        <button onClick={toggleAuth}>{isAuth? "Log Out": "Log In"}</button>
        <h3>{isAuth? `Token : ${token}`: 'Please login to get token!'}</h3>
    </NavbarWrapper>   
  )
}

export default Navbar;