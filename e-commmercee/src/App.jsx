import React, { useState } from 'react'
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import HomePage from './HomePage';
import SingleFake from './components/fake/SingleFake';
import SingleDummy from './components/dummy/SingleDummy';
import NotFound from './components/NotFound';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import Navbar from './components/navbar/Navbar';
import Swal from "sweetalert2";  


const App = () => {
const [cartItems , setCartItems] = useState([]);

function addToCart(item){
const selectedItem = cartItems.find((product) => product.id == item.id )
if(selectedItem){
  Swal.fire({
    position: "center",
    icon: "warning",
    title: "This Product Is Added To Cart",
    showConfirmButton: false,
    timer: 1500
  });

}else{
    setCartItems([...cartItems , item]);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "The product added in the cart successfully",
      showConfirmButton: false,
      timer: 1500
    });
}

}
function deleteProduct(product){
  setCartItems(cartItems.filter(item => item.id !=product.id));
  Swal.fire({
    title: "Good job!",
    text: "The Product Is Removed From Cart!",
    icon: "success",
    showConfirmButton: false,
    timer: 1500
  });

}

const [dark , setDark] = useState(false);

function isDark(){
  setDark(!dark)
}

  return (
   <div className={dark ? 'app-dark':'app'}>
     <BrowserRouter>
      <Navbar cartItems={cartItems} dark ={dark} isDark = {isDark}  />
    <Routes>
      <Route path='/'element={<HomePage addToCart = {addToCart}/>} />
      <Route path='/singleFake/:id' element={<SingleFake addToCart = {addToCart}/>}/>
      <Route path='/singleDummy/:id' element={<SingleDummy addToCart = {addToCart}/>}/>
      <Route path='/cart' element={<Cart cartItems = {cartItems} deleteProduct = {deleteProduct}  />} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
     <Footer/>
      </BrowserRouter>
    
   </div>
  );
};

export default App
