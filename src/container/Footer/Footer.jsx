import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = e => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setIsFormSubmitted(true)
      })
    
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_PUBKEY
    )

    setLoading(false)
  }

  return (
    <>
      <h2 className='head-tex'>Get in touch</h2>

      <div className='app__footer-cards'>
        <a href="https://www.instagram.com/_shswt" target="_blank" rel="noopener noreferrer">
          <div className='app__footer-card'>
            <img src={images.instagram} alt='instagram' />
            <p className='p-text' >@_shswt</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/shswt" target="_blank" rel="noopener noreferrer">
          <div className='app__footer-card'>
            <img src={images.linkedin} alt='mobile' />
            <p className='p-text' >Shashwat Shukla</p>
          </div>
        </a>
      </div>

      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Email'
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>
        :
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)