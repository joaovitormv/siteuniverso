import styled from "styled-components"

export const Text = styled.text`
    color: white;
    font-family: Arial;
    font-weight: bold;
    margin-left: 3rem;
    div{
        margin-top: 20rem;
        font-size: small;
    }
    @media (max-width: 1500px){
        div {
            margin-top: 0rem;
        }
        margin-top: 2rem;
    }
    @media (max-width: 1500px){
        div {
            margin-top: 0rem;
            font-size: 1.5rem;
        }
        margin-top: 2rem;
        font-size: 2rem;
    }
`