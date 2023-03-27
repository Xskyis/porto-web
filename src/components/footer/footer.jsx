import './footer.css'

import { BsMouse } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { TiSocialYoutube } from 'react-icons/ti'
import { TiSocialGithub } from 'react-icons/ti'

function Footer () {
  return (
    <div id='footer' className='container footer-container'>
      <h1>
        That's all
        <a href='#home'>
          <h2>
            <BsMouse />- scroll up-
          </h2>
        </a>
      </h1>
      <div className="social-links">

        <a href="https://www.instagram.com/nabilfgrza_">
            <BsInstagram className='social' />
        </a>
        <a href="https://web.facebook.com/achmad.afgareza/">
            <BsFacebook className='social' />
        </a>
        <a href="https://www.linkedin.com/in/achmad-nabil-afgareza-6333b0247/">
            <BsLinkedin className='social' />
        </a>
        <a href="https://www.youtube.com/@nabilfgrza">
            <TiSocialYoutube className='social' />
        </a>
        <a href="https://github.com/Xskyis">
            <TiSocialGithub className='social' />
        </a>
      </div>
    </div>
  );
}

export default Footer;
