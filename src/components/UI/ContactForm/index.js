import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'

import { sendContactForm } from '../../../api/contact'

import './styles/index.scss'

const t = {
  title: 'Contact Us',
  name: 'Name',
  email: 'Email',
  message: 'Message',
  submit: 'Submit',
  emailPattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  thankYou: 'Thank you for reaching out!'
}

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState(null)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  }

  const handleSubmit = async () => {
    if(!t.emailPattern.test(contactForm.email)) {
      setError('Please enter a valid email address!')
    } else if (!contactForm.name) {
      setError('Please enter your name!')
    } else if (!contactForm.message) {
      setError('Please enter a message!')
    } else {
      setError(null)
      await sendContactForm(contactForm)
      setShowThankYou(true)
    }
  }

  return (
    <main id='contactFormContainer'>
      <h1 id='contactFormTitle'>{t.title}</h1>
      <div id='contactFormFormContainer'>
        {showThankYou ? (
          <div id='contactFormThankYou'>
            <FontAwesomeIcon id='contactFormResetButton' className='clickable' icon={faUndo} onClick={() => {
              setShowThankYou(false)
              setContactForm({
                name: '',
                email: '',
                message: ''
              })
            }} />
            <div id='thankYouContainer'>
              {t.thankYou}
            </div>
          </div>
        ) : (
          <section>
            <div className='contactFormGroup'>
              <label>{t.name}</label>
              <input
                type="text"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
              />
            </div>
            <div className='contactFormGroup'>
              <label>{t.email}</label>
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
              />
            </div>
            <div className='contactFormGroup'>
              <label>{t.message}</label>
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
              />
            </div>
            <button className='clickable' onClick={handleSubmit}>{t.submit}</button>
            {error && <p>{error}</p>}
          </section>
        )}
      </div>
    </main>
  )
}

export default ContactForm
