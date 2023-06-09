import './home.css'
import logonya from '../props/Logoo.jpg'
import Buttons from '../button/button'
import { BsMouse } from 'react-icons/bs'

function Home () {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='main-img'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={logonya} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
        Hi Everyone! My name is Achmad Nabil Afgareza and I'm a Student At SMK Telkom Malang,from Indonesia.I like Javascript Because its challenging and have a beautiful syntax.I want to be Front End Web Developer.
        </p>
      </h2>
      <Buttons />
    </div>
  );
}

// const toggle = document.querySelector('.main-img')
// toggle.addEventListener('click', () => {
//   toggle.classList.toggle('active')
// });


export default Home;
