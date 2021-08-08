import React from 'react'
import displayImage from '../assets/images/businessSupport_img.jpg'

export default function BusinessSupport(props) {
  return (
    <section id='businessSupport'>
      <div className='grid-content'>
        <div className='imgCon'>
          <img src={displayImage} alt='investment-images' />
        </div>
        <div className='txtContainer'>
          <h1>BUSINESS SUPPORT</h1>
          <p>
            Are you a business person, Do you ned support, hurry
            <br />
            now and get that needed FINACIAL to
            <br />
            boost your business.
            <br />
            <br />
            Contact us at
            <br />
            Businesventur@gmail.com
            <br />
            None refundable Registration fee is 2000...
            <br />
            TNC applies.
          </p>
          <button onClick={props.toggleModal}>get started</button>
        </div>
      </div>
    </section>
  )
}
