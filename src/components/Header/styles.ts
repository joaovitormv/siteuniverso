import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  background-image: linear-gradient(${colors.primary}, black);
  display: flex;
  height: 6rem;
  picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
    img {
      height: 100%;
    }
  }
  @media(max-width: 640px){
    img{
      max-width: 60px;
      max-height: 60px;
    }
    height: 4rem;
  }

`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: white;
        font-family: arial;
        font-weight: bold;
        font-size: 1.5rem;
      }
      button{
        display: flex;
        align-items: center;
        text-decoration: none;
        font-size: 1.2rem;
        colors: ${colors.primary};
        border: 0;
        background-color: transparent;
        cursor: pointer;
      }
    }
    li:hover {
      background-color: ${colors.primarydark};
    }
  }
  @media(max-width: 640px){
    ul li a {
      font-size: 1rem;
    }
  }
`