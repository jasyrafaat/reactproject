
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaStar ,FaStarHalf} from "react-icons/fa";



const SingleDummy = ({addToCart}) => {
    const[product , setProduct] =useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
            });
        }, []);

  return (
  <div className="fake-productSingle container">
  <div className="fake-left">
      <img src={product.thumbnail} alt="" />
  </div>
  <div className="fake-right">
    <h2>{product.category}</h2>
    <h3>{product.title}</h3>
    <div>
      <FaStar   className="star-icon" />
      <FaStar  className="star-icon" />
      <FaStar  className="star-icon" />
      <FaStar className="star-icon" />
      <FaStar  className="star-icon" />
      <FaStarHalf  className="star-icon" />
    </div>
    <p>{product.description}</p>
    <h2>Price : {product.price}$</h2>
    <button onClick={() => addToCart(product)}>Add To Cart</button>
  </div>
  </div>
)
 
};

export default SingleDummy
