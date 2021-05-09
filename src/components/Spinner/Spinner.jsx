import React from 'react';

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div
        className='spinner-border text-dark'
        style={{ width: '5rem', height: '5rem' }}
        role='status'
      ></div>
    </div>
  );
};

export default Spinner;
