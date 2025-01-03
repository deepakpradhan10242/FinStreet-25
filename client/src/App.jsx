
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <>
        <Toaster />
        <Navbar/>
        
          <Outlet/>
        
        <Footer/>
    </>
  )
}

export default App
