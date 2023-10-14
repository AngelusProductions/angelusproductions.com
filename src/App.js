import React, { useState } from 'react'

import i from './constants/assets'

import './App.scss'
import './home.scss'

const App = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        // Clear the form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert('Email could not be sent. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main id='appContainer'>
      <img id='angelusProductionsLogo' src={i.logos.angelusProductionsLogo} alt='Angelus Productions Logo' />
      <div id='servicesContainer'>
        <img className='service clickable' src={i.images.softwareDevelopment} alt='Software Development' />
        <img className='service clickable' src={i.images.musicProduction} alt='Music Production' />
        <img className='service clickable' src={i.images.audioVisualServices} alt='Audiovisual Services' />
      </div>

       <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contactForm.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contactForm.email}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={contactForm.message}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
    </form>
    </main>
  )
}

export default App
