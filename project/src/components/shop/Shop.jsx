import React, { useEffect, useState } from 'react'
import '../navbar/navbar.css'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
// import { Button } from '../hero/Button'
import { Product } from './Product'
import { PRODUCTS } from './products'
import { ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.png';
import Aos from 'aos'
import '../../containers/footer/footer.css'
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Shop = () => {


    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
     Aos.init({
       duration: 1000,
     });
   }, [])


  return (
    // Navbar
    <div>
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className='gpt3__navbar-links_logo'>
          {/* <h5>Watches</h5> */}
          <img src={logo} alt="logo"/>
        </div>
        <div className='gpt3__navbar-links_container'>
          {/* <Menu /> */}
          <Link to={"/"}><p>Home</p></Link>
          <Link to={"/shop"}><p>Shop</p></Link>
          {/* <Link to={"/cart"}><p>Nav</p></Link> */}
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        {/* <p>Sign in</p>
        <button type='button'>Sign Up</button> */}
        <Link to={"/cart"}><ShoppingCart size={32} color='#fff' /></Link>
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

    {/* overlay */}

    <div className='hero-container'>
      <h1>Watch Collection</h1>
      <p>See the finest watches</p>
    </div>

    {/* shop */}

    <section id='shop'>
      <div className='shop'>
        <div className='shop-heading'>
        <h2>Shop</h2>
        </div>

        <div className="products">
          {/* {" "} */}
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
     </section>

     {/* Footer */}

     <div className="footerContainer">
      <div className="footerWrap">
        <div className="footerLinksContainer">
          <div className="footerLinksWrapper">
            <div className="footerLinkItems">
              <div className="footerLinkTitle"><h1>More Info</h1></div>
              <div className="footerLink">About Us</div>
              <div className="footerLink">Accessibility</div>
              <div className="footerLink">Privacy Notice</div>
              <div className="footerLink">Terms of Service</div>
            </div>

            <div className="footerLinkItems">
              <div className="footerLinkTitle"><h1>Contact Us</h1></div>
              <div className="footerLink">Contact Number</div>
              <div className="footerLink">Store Location</div>
              {/* <div className="footerLink">Destinations</div>
              <div className="footerLink">Sponsorship</div> */}
            </div>
          </div>

          <div className="footerLinksWrapper">
            {/* <div className="footerLinkItems">
              <div className="footerLinkTitle"><h1>Videos</h1></div>
              <div className="footerLink">Submit Videos</div>
              <div className="footerLink">Ambassadors</div>
              <div className="footerLink">Agency</div>
              <div className="footerLink">Influencer</div>
            </div> */}

            <div className="footerLinkItems">
              <div className="footerLinkTitle"><h1>Follow Our Socials below for more Info:</h1></div>
              {/* <div className="footerLink">Instagram</div>
              <div className="footerLink">Facebook</div>
              <div className="footerLink">YouTube</div>
              <div className="footerLink">Twitter</div> */}
            </div>
          </div>
        </div>

        <div className="socialMedia">
          <div className="socialMediaWrap">
            <div className="socialLogo">Punter Watches
            </div>
            <div className="websiteRights">Punter Watches &copy; 2024 All Rights Reserved</div>
            <div className="socialIcons">
              <div className="socialIconLink"><a href="/" target="_blank" aria-label="Facebook">
                <FaFacebook /></a>
                </div>
                <div className="socialIconLink"><a href="/" target="_blank" aria-label="Instagram">
                <FaInstagram /></a>
                </div>
                <div className="socialIconLink"><a href="/" target="_blank" aria-label="YouTube">
                <FaYoutube /></a>
                </div>
                <div className="socialIconLink"><a href="/" target="_blank" aria-label="Twitter">
                <FaXTwitter /></a>
                </div>
                <div className="socialIconLink"><a href="/" target="_blank" aria-label="Pinterest">
                <FaPinterest /></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Shop
