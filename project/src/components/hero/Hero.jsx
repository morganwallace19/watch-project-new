import React from 'react'
import './hero.css'
import { Button } from './Button'

const Hero = () => {
  return (
    <div className='hero-container'>
      <h1>View our Collection</h1>
      <p>See the shop</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>View Shop</Button>
      </div>
    </div>
  )
}

export default Hero