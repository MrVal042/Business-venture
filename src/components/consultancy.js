import React from 'react'
import displayImage from '../assets/images/consultancy_img.png'

export default function Consultancy(props) {
  return (
      <section id='consultancy'>
        <div className='grid-content'>
          <div className='txtContainer'>
            <h1>CONSULTANCY</h1>
            <p>
              Management CONSULTING
              <br />
              As Consultants, we specialise on these core <br />
              areas
              <br />
              MOTIVATIONAL SPEAKING
              <br />
              JOB ENPLOYMENT
              <br />
              SKILLS ACQUISITION
              <br />
              <br />
              please feel free to email us @ Businesventure@gmail.com
            </p>

            <button onClick={props.toggleModal}>get started</button>
          </div>
          <div className='imgCon'>
            <img
              src={displayImage}
              height={200}
              width={200}
              alt='investment-images'
            />
          </div>
        </div>
      </section>
  )
}
