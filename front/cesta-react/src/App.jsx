
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Product from './Pages/Product/Product'

const App=() =>{
 

  return (
    <> <h1>Hola mundo</h1>
    <Header/>
    <Product/>
    <Outlet/>
    <Footer/>
   

    </>
  )
}

export default App
