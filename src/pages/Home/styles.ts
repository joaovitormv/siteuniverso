import styled from 'styled-components'

export const Section = styled.section`
  img {
    width: 100%;
    height: 100%;
  }
  display: flex;
  margin: 3rem;
  @media(max-width: 1500px){
    flex-direction: column;
    img{
      width: 60%;
      height: 60%;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media(max-width: 1000px){
    flex-direction: column;
    img{
      width: 80%;
      height: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  
`


