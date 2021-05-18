import React from 'react';
import './style.css';

const printCircles = () => {
  var rows = [];
  for (let index = 1; index <= 12; index++) {
    rows.push(<div key={index} className={`sk-circle${index} sk-child`}></div>);
  }
  return rows;
};

const Spinner = () => {
  return (
    <div className='spinnerWrapper'>
      <div className='sk-circle'>{printCircles()}</div>
    </div>
  );
};

export default Spinner;
