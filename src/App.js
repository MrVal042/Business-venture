import React, { useState } from 'react'

import './App.css'
import Modal from './components/modal'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Showcase from './components/showcase'
import Education from './components/education'
import Investment from './components/investment'
import PocketMoni from './components/pocketMoni'
import Consultancy from './components/consultancy'
import BusinessSupport from './components/businessSupport'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContents, setModalContents] = useState({
    header: '',
    paragraph: '',
  })

  const toggleModal = (e) => {
    let header = e.currentTarget.parentElement.firstElementChild.innerHTML;
    const paragraph = e.currentTarget.parentElement.children[1].innerHTML;
    setModalContents({ header, paragraph })
    console.log(header)
    console.log(paragraph)
    setIsOpen(!isOpen)
  }

  return (
    <React.Fragment>
      <Navbar />
      <Showcase toggleModal={toggleModal} />
      <Investment toggleModal={toggleModal} />
      <Consultancy toggleModal={toggleModal} />
      <PocketMoni toggleModal={toggleModal} />
      <Education toggleModal={toggleModal} />
      <BusinessSupport toggleModal={toggleModal} />
      <Footer />

      {/* HIDDEN MOODAL******** */}
      <Modal
        isOpen={isOpen}
        modalContents={modalContents}
        onClose={() => setIsOpen(!isOpen)}
      />
    </React.Fragment>
  )
}
