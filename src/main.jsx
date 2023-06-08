import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Authlayout from "./layout/Authlayout"
import Portfolio from "./layout/pages/portafolio"
import AboutMe from "./layout/pages/AboutMe"
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/",
    element: <Authlayout />,
    children: [
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
