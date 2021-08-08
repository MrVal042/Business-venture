import React from 'react'
import displayImage from '../assets/images/eduction_img.jpg'

export default function Education(props) {
 return (
   <section id='education'>
     <div className='grid-content'>
       <div className='txtContainer'>
         <h1>EDUCATION</h1>
         <p>
           It is part of our responsibilty to give back to the Economy, and so
           in this Section of Education, we Provide Educational Assistance to
           RURAL communities(schools) lacking any form of
           <br /> eductional infrastructures
         </p>
         <button onClick={props.toggleModal}>get started</button>
       </div>
       <div className='imgCon'>
         <img src={displayImage} alt='investment-images' />
       </div>
     </div>
   </section>
 )
}
