import './contact.css'

import { AiOutlineYoutube } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'

function Contact () {
  return (
    <div id='contact' className='container contact-container'>
      <h1>Contact Me</h1>
      <div className='contact-links'>
        <a
          href='https://www.youtube.com/@nabilfgrza'
          className='contact youtube'
        >
          <AiOutlineYoutube className='icon' />
          <h2>
            youtube <span>nabilfgrza</span>
          </h2>
        </a>

        <a href='https://wa.me/6281332160514' className='contact whatsapp'>
          <BsWhatsapp className='icon' />
          <h2>
            whatsapp <span>+62 8133 216 0514</span>
          </h2>
        </a>

        <a
          href='https://www.instagram.com/nabilfgrza_'
          className='contact instagram'
        >
          <AiOutlineInstagram className='icon' />
          <h2>
            instagram <span>nabilfgrza_</span>
          </h2>
        </a>
      </div>
    </div>
  )
}

export default Contact
