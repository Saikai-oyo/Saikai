import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <span className='text-muted'>
          <div className='text-center text-dark p-3 copyright'>
            © 2021 Copyright:
            <a
              className='text-dark'
              href='https://www.linkedin.com/in/idanlevian/'
            >
              {' '}
              Saikai - Idan Levian
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
