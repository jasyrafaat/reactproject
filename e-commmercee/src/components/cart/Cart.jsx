import React from 'react'
import './cart.css';


const Cart = ({cartItems, deleteProduct}) => {
  let total=0;
  return (
    <div className='cart container'>
{cartItems.map(function(item){
  total += item.price
  return(
    <div className="cart-item">
      <img src={item.image ? item.image : item.thumbnail} alt="" />
      <h4>Price ${item.price}</h4>
      <button onClick={() =>deleteProduct(item)}>Remove Product</button>
    </div>

  )


})}
    <div className="total">
      <h2>Total : {total}</h2>
    </div>
    </div>
  )
}

export default Cart
