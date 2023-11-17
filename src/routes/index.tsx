import { Routes, Route } from "react-router-dom"
import { AdmPage, RegisterPage, LoginPage, PageHome, PageList, PageLayout } from "../pages"
import ProtectedRoute from "./ProtectedRoute"
const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="list" element={<PageList />} />
        <Route path="/cadastrar" element={<RegisterPage/>}/>
        <Route path="/logar" element={<LoginPage/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="adm" element={<LoginPage/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export function RouteSoftware() {

}

export default Rotas