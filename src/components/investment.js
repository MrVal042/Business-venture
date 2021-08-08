import React from 'react'
import investImg from '../assets/images/investment_img.jpg'

export default function Investment(props) {
  return (
    <section id='investment'>
      <div>
        <h4>SELECT ONE OF OUR SERVICE</h4>
      </div>
      <div className='grid-content'>
        <div className='imgCon'>
          <img src={investImg} alt='investment-images' />
        </div>
        <div className='txtContainer'>
          <h1>INVESTMENT</h1>
          <p>
            This is where you INVEST your money with a Guarantee of receiving
            your capital with a 20% Roi
            <br /> + bonuses for 3 months after which your capital drops on the
            4th months, No multiple registration
            <br />
            using 1 details. You can top up your <br />
            INVESTMENTs. &#9997;&#127996;
            <br />
            &#128071; &#128071; &#128071; &#128071; &#128071; &#128071;
          </p>
          <h3>&#11035; INTERESTING FEATURES</h3>
          <ul>
            <li>&#129309;No Task.</li>
            <li>&#129309;You get paid within 48 hours of withdrawal.</li>
            <li>&#129309;Referrals are not Compulsory.</li>
          </ul>
          <p>
            {' '}
            You stand a chance of making more money if you choose to refer
            <span>&#9997;&#127996;</span>
          </p>
          <button onClick={props.toggleModal}>get started</button>
        </div>
      </div>
    </section>
  )
}
