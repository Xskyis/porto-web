import './member.css'
import { FaGoogleDrive } from 'react-icons/fa'

const Members = () => {
  return (
    <div id='members' className='container members-container'>
      <span className='member-text'>My Portofolio</span>

      <div className='member member-1'>
        <div className='member-img'></div>
        <div className='member-info'>
          <h1 className='name'>Certificate</h1>
          <h4 className='about'>
            This is one of my certificate, For more you can click the button
            below
          </h4>
          <a href='https://drive.google.com/drive/folders/1w5soJXHEIj9i5KWrk17ugQycMWDCDt1-?usp=share_link' className='contact-member'>
            <FaGoogleDrive /> <span> More</span>
          </a>
        </div>
      </div>

      <div className='member member-2'>
        <div className='member-img'></div>
        <div className='member-info'>
          <h1 className='name'>3D Model</h1>
          <h4 className='about'>
            This is one of my 3d model, For more you can click the button below
          </h4>
          <a href='https://drive.google.com/drive/folders/1zI6SseCBqx6BLVFXENF40EpgPPX0WHyg?usp=share_link' className='contact-member'>
            <FaGoogleDrive /> <span> More</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Members
