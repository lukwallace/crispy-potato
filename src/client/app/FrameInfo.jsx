import React from 'react'

let FrameInfo = ({image, changeRate}) => (
  <h2>{image.title} 
    <div className='dropdown rating'>
      <button className='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>
        Rating: {image.rating} <span className='caret'></span>
      </button>
      <ul className='dropdown-menu'>
        {
          [0,1,2,3,4,5].map(function(rate) {
            return (
              <li key={rate}><a onClick={()=>{changeRate(rate)}}>{rate}</a></li>
            );
          })
        }
      </ul>
    </div> 
  </h2>
);

export default FrameInfo