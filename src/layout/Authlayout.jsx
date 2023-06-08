import { Outlet } from "react-router-dom"
import Nav from "./pages/nav"
import Footer from "./pages/footer"
import ParticlesBg from "../components/PariclesBg"





function Authlayout() {
  return (
    
    <>

    
    <ParticlesBg/>
    
    <Nav />

    <Outlet />

    <Footer/>

    
    </>
  )
}

export default Authlayout