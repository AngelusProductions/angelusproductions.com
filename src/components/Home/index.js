import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import ContactForm from '../UI/ContactForm'

import i from '../../constants/assets'

import './styles/index.scss'

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(true)
  return (
    <main id='homeContainer'>
      {showPopUp && (
        <>
          <div className='blackdrop' />
          <div id='homePopUpContainer'>
            <div id='homePopUp'>
              <div id='homePopUpCloseButton' onClick={() => setShowPopUp(false)}>
                <FontAwesomeIcon icon={faTimes} className='clickable' />
              </div>
              <h1 id='homePopUpTitle'>Welcome to Angelus Productions</h1>
              <div id='homePopUpBody'>
                We are a software development, audiovisual production, and music production company based in Los Angeles, CA.
                <br /><br />
                We specialize in creating custom 21st century digital media solutions.
                <br /><br />
                Our site is currently under construction, but please feel free to reach out to us using the contact form below!
              </div>
            </div>
          </div>
        </>
      )}
      <img id='angelusProductionsLogo' src={i.logos.angelusProductionsLogo} alt='Angelus Productions Logo' />
      <div id='servicesContainer'>
        <img className='service clickable' src={i.images.softwareDevelopment} alt='Software Development' />
        <img className='service clickable' src={i.images.musicProduction} alt='Music Production' />
        <img className='service clickable' src={i.images.audioVisualServices} alt='Audiovisual Services' />
      </div>
      <ContactForm />
    </main>
  )
}

export default Home
