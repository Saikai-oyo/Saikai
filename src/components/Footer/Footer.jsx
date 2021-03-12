import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <span className='text-muted'>
          <div className='text-center text-dark p-3 copyright'>
            <small>
              Copyright: © 2021{' '}
              <a
                className='text-dark'
                href='https://github.com/eidan66/Saikai/'
              >
                {' '}
                Saikai.
              </a>
              <a
                className='text-dark'
                href='https://www.linkedin.com/in/idanlevian/'
              >
                {' '}
                Idan Levian.
              </a>
            </small>
          </div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
