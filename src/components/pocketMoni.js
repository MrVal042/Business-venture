import React from 'react'
import displayImage from '../assets/images/poketMoni_img.jpg'

export default function PocketMoni(props) {
  return (
    <section id='poketMoni'>
      <div className='grid-content'>
        <div className='imgCon'>
          <img src={displayImage} alt='investment-images' />
        </div>
        <div className='txtContainer'>
          <h1>POKET MONI</h1>
          <p>
            Yes, Poket moni is not only for students, its for everyone.
            <br />
            To access this founds of up to 500,000 naira, these
            <br /> Founds are non refundable to the company.
            <br />
            You must contact us as soon as possible
            <br />
            @<br />
            Businessventur@gmail.com
            <br />
            <br />
            Starting your need and amount needed. if <br />
            successfull BUSINESS VENTURES will contact you <br />
            within 2 weeks of application.
            <br />
            A non refundable Registration fee is 1000 naira
            <br />
            only &#129309;
            <br />
            Multiply Regidtration is allowed.
          </p>
          <button onClick={props.toggleModal}>get started</button>
        </div>
      </div>
    </section>
  )
}
