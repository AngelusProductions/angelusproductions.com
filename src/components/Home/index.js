import React from 'react'

import ContactForm from '../UI/ContactForm'

import i from '../../constants/assets'

import './styles/index.scss'

const Home = () => {
  return (
    <main id='homeContainer'>
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
