import React, { Component } from "react";
// import ButtonComponent from "../components/Button";
import Cards from "../components/Cards";
import { Button, ContainerButton, ContainerCards, Parrafo, SectionHome, Titulo } from "../styles/stylesComponent";
import styled from 'styled-components'

const ContainerDescripcion = styled.div`
display: flex;
flex-direction: column;
gap: 1.4rem;`

export default class Home extends Component{
    render(){
        return(
            <SectionHome>
                <ContainerDescripcion>
                    <Titulo>We support yout challenge in new areas.</Titulo>
                    <Parrafo>Our highly qualified headhunters, who have passed a rigorous screening process, will introduce you to your new career opportunity.</Parrafo>
                    <ContainerButton>
                        <Button Bgreen Cwhite>Try it Free</Button>
                        <Button color="#fff">Explore</Button>
                    </ContainerButton>
                </ContainerDescripcion>

                <ContainerCards>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </ContainerCards>
            </SectionHome>
            
        )
    }
}