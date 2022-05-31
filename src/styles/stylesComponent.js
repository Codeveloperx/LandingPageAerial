import styled from 'styled-components';


// ESTILOS PARA EL NAVBAR
export const Container = styled.div`
  width: 100%;
  height: 70px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  p {
    &:nth-child(2) {
      color: #666666;
      font-weight: 400;
      margin-left: 1rem;
    }    
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 960px) {
    background-color: #23394d;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #333333;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    color:#fff;
    div {
      width: 30%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      margin-right: 0.5rem;
    }
  }
`;

// FIN ESTILOS DEL NAVBAR


// ESTILOS DEL HOME PAGE
export const SectionHome = styled.section`
display: grid;
grid-template-columns: 40% 1fr;
max-width: 90%;
margin: 0 auto;
align-items: center;
background: #F0EFE9;
margin-bottom: 3rem;`

export const Titulo = styled.h1`
font-family: 'Helvetica';
font-weight: 700;
font-size: 3rem;
width: 30rem;
`;

export const Parrafo = styled.p`
font-family: 'Helvetica';
max-width: 30rem;
font-weight:300;
font-size: 1rem;
text-align: justify;
line-height: 25px;
`

export const ContainerCards = styled.div`
display:flex;
flex-wrap: wrap;
gap: 1rem;
margin-top: 3rem;
justify-content: flex-end;
`

// ESTILOS DE LA SECCION FINAL

export const SeccionFinal = styled.section`
background: #FAFAFA;
`

export const UL = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 5rem;
list-style: none;
padding-top: 3rem;
margin-bottom: 4rem;`

export const Title = styled.h1`
font-weight: 400;
font-size: 2rem;`

export const ContainerTitle = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
max-width: 30rem;
margin: 0 auto;
margin-top: 5rem;
text-align: center;`

export const Input = styled.input`
  padding: 8px;
  width:70%;
  color: #4D4D4D;
`
export const ContainerButton = styled.div`
display:flex;
gap: 1rem;`


export const Button = styled.button`
  background-color:${props => props.Bgreen ? '#24B26B' : props.color};
  color: ${props => props.Cwhite ? '#fff' : '#333'};
  padding: 10px 32px;
  text-align: center;
  border: none;
`