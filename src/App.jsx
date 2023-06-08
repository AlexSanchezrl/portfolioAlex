import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Authlayout from "./layout/Authlayout"
import Portfolio from "./layout/pages/portafolio"
import AboutMe from "./layout/pages/AboutMe"







function App() {
      return (
        <>

     <BrowserRouter>
      

      <Routes>


        <Route path="/" element={<Authlayout />}>

           <Route path="portfolio" element={<Portfolio />}/>

           
            <Route path="about-me" element={<AboutMe />} />

         </Route>

       </Routes>
      
      
      
             </BrowserRouter>


     </>
       )
     }

export default App
