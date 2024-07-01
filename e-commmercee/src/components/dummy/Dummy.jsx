import React, { useEffect, useState } from 'react'
import './dummy.css'
import { Link } from 'react-router-dom';
const Dummy = ({addToCart}) => {
    const[products , setProducts] =useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data.products);
            });
        }, []);
        
  return (
      <div className="dummy container">
        <h2 className='dummy-title'>Dummy Products</h2>
        <div className="products">
      {products.map(function (product) {
       return (
         <div className="product" key={product.id}>
            <img src={product.thumbnail} alt="" />
            <h3>{product.title.slice(0 , 20)}</h3>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
            <Link to={`/singleDummy/${product.id}`}>
            <button className='h'>More Details</button>
            </Link>
          </div>
         );
      })}
      </div>
    </div>
 );
};

export default Dummy
