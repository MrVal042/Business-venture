import React, { useState } from 'react'

function Social(props) {
  const { checked, name } = props
  const handleSocial = (e) => {
    let name = e.currentTarget.name
    switch (name) {
      case 'telegram':
        return window.open('https://telegram.me/username', '_blank')
      case 'instagram':
        return window.open('https://www.instagram.com/direct/inbox/', '_blank')
      case 'whatsapp':
        return window.open(
          'https://api.whatsapp.com/send?phone=+2347065208250&text=Hi,%20I%20would%20like%20to%20get%20more%20information..',
          '_blank'
        )
      default:
        console.log(name)
    }
  }
  return (
    <button
      disabled={!checked}
      name={name}
      onClick={handleSocial}
      style={{ color: checked ? 'var(--showcaseBtn)' : '#b4b4b4' }}
    >
      <i className={`fa fa-${name} fa-3x`} />
    </button>
  )
}

export default function Modal(props) {
  const { modalContents } = props
  const [checked, setChecked] = useState(false)
  const { isOpen, onClose } = props
  // Render nothing if the "show" prop is false
  if (!isOpen) {
    return null
  }
  return (
    <div className='TandCbackdrop'>
      {/* TERMS AND CONDITION SECTION ******************/}
      <fieldset className='TandC'>
        <h3>{modalContents.header} TERMS AND CONDITION</h3>
        <p>
          Please read these terms and condition before using any of our
          services. by accessing or using the services we provide, you agree to
          be bound by these terms which is conditioned by your compliance with
          this terms. This terms and conditions applies to all visitors, users
          and others who access our services. if you disagree with any part of
          the terms and conditions, please do not access the services.
        </p>
        <p>
          {modalContents.header}: {modalContents.paragraph}
        </p>

        <p className='checkbox'>
          <input type='checkbox' onChange={() => setChecked(!checked)} />
          Accept terms and condition
        </p>

        <div className='TandCbtn'>
          <h3>Contact us @:</h3>
          <Social name='whatsapp' checked={checked} />
          <Social name='telegram' checked={checked} />
          <Social name='instagram' checked={checked} />
        </div>
        <div className='closeBtn'>
          <button onClick={onClose}>Close</button>
        </div>
      </fieldset>
    </div>
  )
}
