import React from 'react'

export default function Showcase(props) {
  return (
    <section id='home' className='showcase'>
        <h1>BUSINESS VENTURES</h1>
        <p>
          Is a multiple purpose company that generate its revenue from investing
          in Agriculture, transportation, Consultation and General Merchandise.
        </p>
        <button id='showcasbtn' onClick={props.toggleModal}>
          get started
        </button>
    </section>
  )
}
