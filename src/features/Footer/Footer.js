import React from 'react';
import './footer.css';

const Footer = () => {

  const toTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <div className='footer'>
      <div>
        <div className='link'>
          <a 
          href='https://richiehalesportfolio.netlify.app/'
          className='linkButton'
          target="_blank"
          rel="noreferrer">
              Richie Hales
          </a>
        </div>
        <div>
          Web Developer
        </div>
        <button 
          onClick={() => toTop()}
          className='home'>
            Home           
        </button>
      </div>
    </div>
  )
}

export default Footer;