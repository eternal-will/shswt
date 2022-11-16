import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://www.twitter.com/_shswt' target='_blank' rel="noopener noreferrer">
            <div>
                <BsTwitter />
            </div>
        </a>
        <a href='https://www.instagram.com/_shswt' target='_blank' rel="noopener noreferrer">
            <div>
                <BsInstagram />
            </div>
        </a>
        <a href='https://www.github.com/eternal-will' target='_blank' rel="noopener noreferrer">
            <div>
                <BsGithub />
            </div>
        </a>
        <a href='https://www.linkedin.com/in/shswt' target='_blank' rel="noopener noreferrer">
            <div>
                <BsLinkedin />
            </div>
        </a>
    </div>
  )
}

export default SocialMedia