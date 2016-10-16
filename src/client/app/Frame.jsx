import React from 'react'

// class Frame extends React.Component {
//   render () {
//     return (<div>Frame here </div>);
//   }
// }


let ASSET_DIR = './assets/';
let Frame = ({image}) => (
  <div>
    <h2>{image.title} <span className='rating'> Rating: {image.rating} </span> </h2>
    <img src={ASSET_DIR + image.src} alt="Error loading image" />
  </div>
);

export default Frame