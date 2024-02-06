import React, { useState, useEffect, useRef } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import '../../components/about/about.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import '../../components/navbar/navbar.css';
import  AboutImg  from '../../assets/watch01.png'
import '../../components/shop/shop.css'

import { ShoppingCart } from 'phosphor-react';

import '../../containers/header/header.css'
import people from '../../assets/people.png'
import cover from '../../assets/cover1.png'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import Question from '../services/Question'
import { questions } from '../services/data'
import '../../components/services/services.css'
import '../../containers/footer/footer.css'

import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { PRODUCTS } from '../../components/shop/products'

import emailjs from '@emailjs/browser'

import '../shop/shop.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Product } from '../shop/Product';
import { Button } from '../hero/Button';

// BEM -> Block Element Modifier

// const Menu = () => (
//   <>
//   <p><a href="#home">Home</a></p>
//   <p><a href="#about">About us</a></p>
//   <p><a href="../shop/Shop">Shop</a></p>
//   {/* <p><a href="#features">Case Studies</a></p>
//   <p><a href="#blog">Library</a></p> */}
//   </>
// )

const Home = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_n1r5xwc';
    const templateID = 'template_x4ferwm';
    const publicKey = '1VpKZQRIOcGCxBoFO';

    const templateParams = {
      from_email: email,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      console.log('Email send successfully!', response);
      setEmail('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  }

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_n1r5xwc', 'template_x4ferwm', form.current, '1VpKZQRIOcGCxBoFO')
  //   .then((result) => {
  //     console.log(result.text)
  //   }, (error) => {
  //     console.log(error.text);
  //   });
  // };

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

{/* Header */}  

{/* // const Header = () => {
    return ( */}
       <div className='gpt3__header section__padding' id='home'>
             <div className='gpt3__header-content'>
                 <h1 className='gradient__text'>The home of amazing watches</h1>
                 <p>We at Punter Watches sell amazing swiss made watched and have sponsers with famous brand such as Rolex, Omega, and others.</p>
                 <div className='gpt3__header-content__input'>
                  
                     <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email Address' />
                     <button onClick={handleSubmit} type='submit'>Newsletter</button>
                     
                 </div>
    
                 {/* <div className='gpt3__header-content__people'>
                     <img src={people} alt="people" />
                     <p>1,600 people requested access a visit in last 24 hours</p>
                 </div> */}
             </div>
             <div className='gpt3__header-image'>
                     <img src={cover} alt="ai" />
                 </div>
         </div>

         {/* About */}

         <section id='about'>
      <h4>Get to know</h4>
      <h1>About Our Business</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImg} alt="Aboutimg" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam doloribus nobis velit repellat iste temporibus iure, exercitationem, in beatae quos consequuntur praesentium cum culpa odit, officiis facilis eum unde non?</p>

          <a href="# " className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>


         {/* Services */}

         <section id='services'>
      <div className="container services">
        <div className="u-title" data-aos="fade-up">
          <MdOutlineLibraryBooks size={40} color='#fff' />
          <h2>Services</h2>
          <p className='u-text-small'>
            These are our Services
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => (
              <Question
              key={question.id}
              title={question.title} 
              answer={question.answer}
              />
            ))}
        </div>
      </div>
    </section>

     {/* overlay */}

     <div className='hero-container'>
      <h1>View our Collection</h1>
      <p>See the shop</p>
      <div className="hero-btns">
        <Link to={"/shop"}>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>View Shop</Button>
        </Link>
      </div>
    </div>

     {/* Shop */}

     {/* <section id='shop'>
      <div className='shop'>
        <div className='shop-heading'>
        <h2>Shop</h2>
        </div>

        <div className="products">
          {" "}
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
     </section> */}

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

export default Home