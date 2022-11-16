import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://www.twitter.com/_shswt' target='_blank'>
            <div>
                <BsTwitter />
            </div>
        </a>
        <a href='https://www.instagram.com/_shswt' target='_blank'>
            <div>
                <BsInstagram />
            </div>
        </a>
        <a href='https://www.github.com/eternal-will' target='_blank'>
            <div>
                <BsGithub />
            </div>
        </a>
        <a href='https://www.linkedin.com/in/shswt' target='_blank'>
            <div>
                <BsLinkedin />
            </div>
        </a>
    </div>
  )
}

export default SocialMedia