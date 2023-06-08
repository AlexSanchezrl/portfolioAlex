import { Outlet } from "react-router-dom"
import Nav from "./pages/nav"
import Footer from "./pages/footer"
import ParticlesBg from "../components/PariclesBg"
import Portfolio from "./pages/portafolio"





function Authlayout() {
  return (
    
    <>
    <ParticlesBg/>
    
    <Nav />

    <Portfolio />

    <Outlet />

    <Footer/>

    
    </>
  )
}

export default Authlayout