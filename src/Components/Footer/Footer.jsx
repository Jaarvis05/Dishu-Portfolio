import React from 'react';
import './Footer.css';
import logo from '../../assets/logo1.svg';
import user_icon from '/src/assets/user.png';
import linkedin_icon from '/src/assets/linkdein.png';  
import github_icon from '/src/assets/github.png';  
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt="none" />
            <p>I am a frontend developer from Gurugram with 0.4 years of experience in companies like Maruti Suzuki & Lumax Auto Technology.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="none" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Dishu Kumar. All Rights Reserved.</p>
        <div className="footer-bottom-right">
            <a href="https://www.linkedin.com/in/dishu-singh-6a73b324a" target="_blank" rel="noopener noreferrer">
                <img src={linkedin_icon} alt="LinkedIn" className="footer-icon"/>
            </a>
            <a href="https://github.com/Jaarvis05" target="_blank" rel="noopener noreferrer">
                <img src={github_icon} alt="GitHub" className="footer-icon"/>
            </a>
            <AnchorLink className='anchor-lin' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Footer;
