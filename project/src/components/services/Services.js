import React, { useEffect } from 'react'
import './services.css'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import Question from './Question'
import { questions } from './data'
// import ServicesSlider from './ServicesSlider'
// import styled from 'styled-components'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Services = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
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
  );
};

 export default Services