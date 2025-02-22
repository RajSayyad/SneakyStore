import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collections from './pages/Collections'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrders from './pages/PlaceOrders'
import Product from './pages/Product'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-{7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='/collection' element={<Collections/>}/> 
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/placeorders' element ={<PlaceOrders/>}/>
        <Route path='/product/:productId' element={<Product/>}/>       
      </Routes>     
      <Footer />
    </div>
  )
} 

export default App