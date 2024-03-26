import { MapPin, ShoppingCart } from 'phosphor-react';
import '../navbar/navbar.css'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { PRODUCTS } from '../shop/products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './Cart-item';
import Logo from '../../assets/logo.png'
import './cart.css'

 const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate()
  const checkout = async () => {
    
    await fetch('http://localhost:4000/checkout', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cartItems.items})
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.url) {
        window.location.assign(response.url)
      }
    })
  }


  

    const [toggleMenu, setToggleMenu] = useState(false);
  return (
      // Navbar
      <div>
      <div className='gpt3__navbar'>
        <div className="gpt3__navbar-links">
          <div className='gpt3__navbar-links_logo'>
            {/* <h5>Watches</h5> */}
            <img src={Logo} alt="logo" />
          </div>
          <div className='gpt3__navbar-links_container'>
            {/* <Menu /> */}
            <Link to={"/"}>
              <p>Home</p>
            </Link>
            <Link to={"/shop"}>
              <p>Shop</p>
            </Link>
            {/* <Link to={"/cart"}><p>Nav</p></Link> */}
          </div>
        </div>
        <div className='gpt3__navbar-sign'>
          {/* <p>Sign in</p>
          <button type='button'>Sign Up</button> */}
          <Link to={"/cart"}>
            <ShoppingCart size={32} color="#fff" />
          </Link>
        </div>
        <div className='gpt3__navbar-menu'>
          {toggleMenu 
          ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              {/* <Menu /> */}
              <Link to={"/"}><p>Home</p></Link>
              <Link to={"/shop"}><p>Shop</p></Link>
              <Link to={"/cart"}><ShoppingCart size={32} color='#fff' /></Link>
              <div className='gpt3__navbar-menu_container-links-sign'>
          {/* <p>Sign in</p>
          <button type='button'>Sign Up</button> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="cart">
        <div>
          <h1> Your cart Items </h1>
        </div>
        <div className="cartItems">
          {PRODUCTS.map((product, idx) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={idx} data={product} />;  // PABLO
              }
            })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: £{totalAmount} </p>
            <button onClick={() => navigate("/shop")}> Continue Shopping </button>
            <button onClick={checkout} > Checkout </button>
          </div>
        ) : (
          <h1> Your Cart is Empty </h1>
        )}
      </div>
    </div>
  );
}

export default Cart;
