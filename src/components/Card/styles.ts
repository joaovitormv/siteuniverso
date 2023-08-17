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

`