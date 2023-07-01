import { Navigate, Route, Routes } from "react-router-dom"
import PageHome from "./pages/PageHome"
import PageService from "./pages/PageProduct"
import PageKontakt from "./pages/PageKontakt"
import PageAbout from "./pages/PageAbout"



const Router = () => {
  return (
    <nav>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<PageHome />} />
        <Route path="/product" element={<PageService />} />
        <Route path="/kontakt" element={<PageKontakt />} />
        <Route path="/about" element={<PageAbout />} />
      </Routes>
    </nav>
  )
}

export default Router
