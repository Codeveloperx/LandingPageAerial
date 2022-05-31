import React, {Component} from 'react';
import styled from 'styled-components'

const Container = styled.div`
background-color: white;
     display: flex;
     flex-direction: column;
     align-items: center;
     border-radius: 10px;
     gap: .5rem;
     text-align: center;
     width: fit-content;
     padding: 1rem 1rem;
     box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
const H2 =  styled.h2`
font-weight: 400;
font-size: 1rem;
margin-bottom: .5rem;`

const BodyCards = styled.div`
display: flex;
gap: 1rem;`

const Span = styled.span`
margin-left: .5rem;`


export default class MiniCards extends Component{
    render(){
        return(
            <Container>
                <div>
                    <H2>Leader of iOS engineers for<br/>mobility services</H2>
                </div>
                <BodyCards>
                    <div>
                        <img src='https://i.ibb.co/fCb2X1R/ubication.png' alt='Ubicacion' />
                        <Span>California</Span>
                    </div>
                    <div>
                        <img src='https://i.ibb.co/KqSvCZy/cart.png' alt='Profesion' />
                        <Span>Enginner</Span>
                    </div>
                </BodyCards>
            </Container>
        )
    }
}