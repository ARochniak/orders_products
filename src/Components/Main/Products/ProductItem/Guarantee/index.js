import React from 'react';
import getDate from '../../../date';

const Garantee = (props) => {
  const {from, to} = props;
  return (
    <div>
      <div>
        <span className='small'>С </span><br/>
        <span className='small'>По </span>
      </div>
      <div style={{marginLeft: '5px'}}>
        {getDate(from, 'longNumeric')} <br/>
        {getDate(to, 'normal')}
      </div>
    </div>
  )
}

export default Garantee;