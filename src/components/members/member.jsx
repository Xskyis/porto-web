import './member.css'
import { FaGoogleDrive } from 'react-icons/fa'

const Members = () => {
  return (
    <div id='members' className='container members-container'>
      <h1 className='member-txt'>My Portofolio</h1>

      <div className='member member-1'>
        <div className='member-img'></div>
        <div className='member-info'>
          <h1 className='name'>Certificate</h1>
          <h4 className='about'>
            This is one of my certificate, For more you can click the button
            below
          </h4>
          <a href='#contact' className='contact-member'>
            <FaGoogleDrive /> <span> More</span>
          </a>
        </div>
      </div>

      <div className='member member-2'>
        <div className='member-img'></div>
        <div className='member-info'>
          <h1 className='name'>Dummy</h1>
          <h3 className='position'>Leader</h3>
          <h4 className='about'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            vitae.
          </h4>
          <a href='#contact' className='contact-member'>
            <FaGoogleDrive /> <span> More</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Members