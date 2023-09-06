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
          href='https://richiehales.github.io/portfolio_richie/'
          className='linkButton'>
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