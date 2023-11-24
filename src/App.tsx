import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles/GlobalStyle"
import Routes from "./routes"
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/authContext";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App