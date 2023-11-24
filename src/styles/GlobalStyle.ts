import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    overflow-y: hidden;
    overflow-x: hidden;
  }
`
export const colors = {
  primary: "#DC14A4",
  secondary: "#000070",
  primarydark: "#52073D",
  black: "#000",
  white: "#fff"
}
