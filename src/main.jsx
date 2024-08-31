import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import { ParallaxProvider } from 'react-scroll-parallax';




const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ParallaxProvider>
   <RouterProvider router={router}>
    <App />
    </RouterProvider>
   </ParallaxProvider>
  </StrictMode>,
)
