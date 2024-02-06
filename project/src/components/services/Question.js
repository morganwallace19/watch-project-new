import React, { useState } from 'react'
import './question.css'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Question = ({title, answer}) => {
    const [showAnswer, setShowAnswer] = useState(false)

    const handleClick = () => {
        setShowAnswer(!showAnswer);
    };

  return (
    <div className='container question'>
        <div className="question-title">
            <h4>{title}</h4>
            <button className='question-icons' onClick={handleClick}>
                {showAnswer ? (
                <AiOutlineMinus color='red' />
                 ) : ( 
                    <AiOutlinePlus color='#1f93ff' />
                )}
            </button>
        </div>
        <div className="question-answer">
            {showAnswer && <p className="u-text-small">{answer}</p>}
        </div>
    </div>
  )
}

export default Question;

// import React from 'react'
// import styled from 'styled-components'
// import { IoIosQuote } from 'react-icons/io'
// import {AiOutlineStar} from 'react-icons/ai'

// const ServicesSlider = (props) => {
//   const {name, position, img_url, stars, disc} = props.item;
//   return (
//     <Container>
//         <Header>
//             <span className='quote'><IoIosQuote/></span>
//             <div>
//                 {Array(stars).fill().map((_, i) => (
//                     <span className='star' key={i}>
//                         <AiOutlineStar/>
//                     </span>
//                 ))}
//             </div>
//         </Header>
//         <Body>
//             {disc}
//         </Body>
//         <Footer>
//             <img src={img_url} alt={name} />
//             <div className="details">
//                 <h1>{name}</h1>
//                 <p>{position}</p>
//             </div>
//         </Footer>
//     </Container>
//   )
// }

// export default ServicesSlider

// const Container = styled.div`
//     background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
//     padding: 1.5rem 1rem;
//     margin: 0 1rem;
// `

// const Header = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     .quote{
//         font-size: 3rem;
//         color: #01be96;
//         opacity: 0.7;
//     }

//     .star{
//         color: #ffcd3c;
//         font-size: 1.3rem;
//     }
// `
// const Body = styled.p`
//     font-size: 0.8rem;
//     margin-bottom: 1.5rem;
// `
// const Footer = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     img{
//         width: 4rem;
//         height: 4rem;
//         border-radius: 50px;
//         object-fit: cover;
//     }

//     h1{
//         font-size: 1.2rem;
//         font-weight: 700;
//         @media(max-width: 580px){
//             font-size: 1rem;
//         }
//         @media(max-width: 538px){
//             font-size: 0.9rem;
//         }
//     }

//     p{
//         font-size: 0.8rem;
//         color: rgba(255,255,255,0.500);
//         @media(max-width: 538px){
//             font-size: 0.6rem;
//         }
//     }
// `