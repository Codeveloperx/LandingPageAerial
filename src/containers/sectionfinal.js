import React, { Component } from "react";
import { Button, ContainerTitle, Input, SeccionFinal, Title, UL } from "../styles/stylesComponent";
import styled from 'styled-components';
// import ButtonComponent from "../components/Button";
import MiniCards from "../components/MiniCards";

const ContainerCards = styled.div`
    max-width: 90%;
    margin: 0 auto;
    display:flex;
    gap: 1rem;
    margin-top: 3rem;
    justify-content: center;`

export default class SectionFinal extends Component{
    render(){
        return(
            <SeccionFinal>
                <div>
                    <UL>
                        <li>Trusted by the world's<br/>leading companies</li>
                        <li><img src="https://i.ibb.co/sFKw76Z/HAREE.png" alt="" /></li>
                        <li><img src="https://i.ibb.co/fpyH4rW/JOBQO.png" alt="" /></li>
                        <li><img src="https://i.ibb.co/GT5b80t/logo-perman.png" alt="" /></li>
                        <li><img src="https://i.ibb.co/71YbcPs/logo-jobona.png" alt="" /></li>
                        <li><img src="https://i.ibb.co/w60Xx71/logo-workctrl.png" alt="" /></li>
                        
                    </UL>
                </div>
                <ContainerTitle>
                    <Title>Search for your area of interest</Title>
                    <p>Please enter your desired industry, job title, and skills</p>
                    <form>
                        <Input placeholder="engineer, Internet and Web Industry"/>
                        <Button color="#333" Cwhite>Search</Button>
                    </form>
                </ContainerTitle>
                <ContainerCards>
                    <MiniCards/>
                    <MiniCards/>
                    <MiniCards/>
                    <MiniCards/>
                </ContainerCards>
            </SeccionFinal>
        )
    }
}