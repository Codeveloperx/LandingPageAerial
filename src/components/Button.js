import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #24B26B;
  color: white;
  padding: 10px 32px;
  text-align: center;
  border: none;
`

export default class ButtonComponent extends Component{   
    render(){
        return(
            <>
            {
            <Button></Button>
        }</>
        )

    }


}
