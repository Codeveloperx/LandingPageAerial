import React, {Component} from 'react';
import styled from 'styled-components'

const Card = styled.div`
     background-color: white;
     display: flex;
     flex-direction: column;
     align-items: center;
     border-radius: 10px;
     gap: .5rem;
     text-align: center;
     width: fit-content;
     padding: 1rem 0;
     box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
     `

const CardTitle = styled.h2`
font-size: .9rem;
font-weight:400;
color: #333333;` 

const CardSubtitle = styled.h4`
color: #333333;
font-size: .8rem;
font-weight: 300;`

const CardParph =  styled.p`
font-weight: 300;
max-width:12rem;
text-align: center;
font-size: 12px;
color: #666666;
margin-top: .5rem;
`


export default class Cards extends Component{
    render(){
        return(
            <Card>
                <div>
                    <img src='https://i.ibb.co/DQ7YrDB/user1.png' alt='Avatar'/>
                </div>
                <div>
                    <CardTitle>Earl Dunst</CardTitle>   
                    <CardSubtitle>housy</CardSubtitle>
                </div>
                <CardParph>We have a number of CTO positions available.</CardParph>
            </Card>
        )
    }

}