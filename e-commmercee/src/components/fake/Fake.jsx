import React, { useState } from 'react'
import './fake.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Fake = ({addToCart}) => {
    const[products , setProducts] =useState([]);
//     const[price , setPrice] =useState(0);
//     const[count , setCount] =useState(0);
    
//     function incrementP(){
//          setPrice(price + 1)
//     }
//     function incrementC(){
//         setCount(price + 1)
//    }

useEffect(() => {
fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {
    setProducts(data);
    });
}, []);



  return (
    <div className="fake container" id='products'>
      <h2>Fake Products</h2>
      <div className="products">
      {products.map(function (product) {
       return (
         <div className="product" key={product.id}>
            <img src={product.image} alt="" />
            <h3>{product.title.slice(0, 20)}</h3>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
            <Link to={`/singleFake/${product.id}`}>
            <button className='h'>More Details</button>
            </Link>
          </div>
         );
      })}
        {/* <button onClick={incrementP}>price</button>
        <h2>{price}</h2>
        <button onClick={incrementC}>count</button>
        <h2>{count}</h2> 
 */}
 
      </div>
    </div>
  );
};

   
   
 
 

export default Fake
