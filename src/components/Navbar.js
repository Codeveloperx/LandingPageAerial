import React, { Component } from "react";
import { Button, Container, ContainerButton, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from "../styles/stylesComponent";
import { FaBars,FaTimes,FaHome,FaUserAlt,FaBriefcase,FaGlasses } from "react-icons/fa";
// import ButtonComponent from './Button'



export default class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            showMobileMenu : false
        };

        this.open = this.open.bind(this);
    }
    open = () =>{
        const { showMobileMenu } = this.state;
        this.setState({
            showMobileMenu: !showMobileMenu,
        });
    }
    render(){
        return (
            <Container>
              <Wrapper>
                  <LogoContainer>
                    <img src="https://i.ibb.co/CBhqkqg/logo-aerial.png" alt="Logo Aerial" />
                    <p>Aerial</p>
                  </LogoContainer>
        
                  <MobileIcon onClick={this.open}>
                    {this.state.showMobileMenu ? <FaTimes /> : <FaBars />}
                  </MobileIcon>
        
                  <Menu open={this.state.showMobileMenu}>
                    <MenuItem>
                      <MenuItemLink onClick={() => this.state.setShowMobileMenu(!this.state.showMobileMenu)}>
                        <div>
                          <FaHome />
                          Job Search
                        </div>
                      </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                      <MenuItemLink onClick={() => this.state.setShowMobileMenu(!this.state.showMobileMenu)}>
                        <div>
                          <FaUserAlt />
                          About
                        </div>
                      </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                      <MenuItemLink onClick={() => this.state.setShowMobileMenu(!this.state.showMobileMenu)}>
                        <div>
                          <FaBriefcase />
                          Pricing
                        </div>
                      </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                      <MenuItemLink onClick={() => this.state.setShowMobileMenu(!this.state.showMobileMenu)}>
                        <div>
                          <FaGlasses />
                          Contact
                        </div>
                      </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                      <MenuItemLink>
                      <ContainerButton>
                        <Button color="#fff">Log in</Button>
                        <Button Bgreen Cwhite>Try it Free</Button>
                        </ContainerButton>
                      </MenuItemLink>
                    </MenuItem>
                  </Menu>
              </Wrapper>
            </Container>
          );
    }

}