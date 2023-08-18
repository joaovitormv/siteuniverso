import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Aside = styled.aside`
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
    margin-left: 17rem;
    h3{
        color: white;
        font-family: Arial;
    }
    div{
        background-color: ${colors.secondary};
        border-radius: 1rem;
        padding: 1;
        line-height: 2rem;
        width: 50%; 
        margin-top: 5rem;
    }
    div img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        
    }
    div h3 {
        text-align: center;
    }
    @media(max-width: 1500px){
        div img{
            width: 85%;
            height: 85%;
        }
        div{
            margin-top: 2rem;
        }
        margin-left: 10rem;
    }
    @media(max-width: 1000px){
        grid-template-columns: auto;
        div img{
            width: 85%;
            height: 85%;
        }
    }
    @media(max-width: 780px){
        grid-template-columns: auto;
        div img{
            width: 85%;
            height: 85%;
        }
        font-size: small;
        div{
            padding: 0.5rem;
        }
    }    
`