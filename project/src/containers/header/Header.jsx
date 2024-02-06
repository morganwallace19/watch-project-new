import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
            <h1 className='gradient__text'>The home of amazing watches</h1>
            <p>We at Watches sell amazing swiss made watched and have sponsers with famous brand such as Rolex, Omega, and others.</p>
            <div className='gpt3__header-content__input'>
                <input type="email" placeholder='Your Email Address' />
                <button type='button'>Newsletter</button>
            </div>

            <div className='gpt3__header-content__people'>
                <img src={people} alt="people" />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>
        <div className='gpt3__header-image'>
                <img src={ai} alt="ai" />
            </div>
    </div>
  )
}

export default Header