import React from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {

    const selector = useSelector(state => state.cart.cartItems);
    console.log(selector);
  return (
   <div className='navbar'>
   <h1>Product App</h1>
   <h2>cart {selector.length}</h2>
   </div>
  )
}

export default Navbar

















// const Navbar = () => {
//     return (
//       <div className="navbar">
//         <h1>My Online Store</h1>
//       </div>
//     )
//   }
  
//   export default Navbar;
  