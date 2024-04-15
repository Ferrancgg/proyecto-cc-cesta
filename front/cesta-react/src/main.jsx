import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Routes,Route
} from "react-router-dom"
import Home from './Pages/Home/Home.jsx'
import Cesta from './Pages/Cesta/Cesta.jsx'
import About from './Pages/About/About.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        
        <Route path='/' element={ <App />} >
          <Route index element={<Home/>}/>
          <Route path='/cesta' element={<Cesta/>}/>
          <Route path='/about' element={<About/>}/>
          

         
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
