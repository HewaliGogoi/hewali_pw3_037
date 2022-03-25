import React from 'react';
import styled, {css} from 'styled-components';

const Button = styled.button`
    border : none;
    border-radius : 2px;
    background-color : white;
    padding : 5px 10px;
    margin-top : 10px;
    margin-right : 10px;
    cursor : pointer;

    ${
        ({primary}) => primary && css `
            border: 2px solid #2490FE;
            background-color : #2490FE;
            color:white;
         `
    }
    ${
        ({def}) => def && css `
            border: 2px solid #cecece;
            background-color : white;
         `
    }
    ${
        ({dashed}) => dashed && css `
            border: 2px dashed #cecece;
            background-color : white;
         `
    }
    ${
        ({link}) => link && css `
            color : #2490FE;
         `
    }
`;
export default Button;
