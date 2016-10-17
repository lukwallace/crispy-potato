import React from 'react'
import FrameInfo from './FrameInfo.jsx'
// class Frame extends React.Component {
//   render () {
//     return (<div>Frame here </div>);
//   }
// }


let ASSET_DIR = './assets/';
let Frame = ({image, changeRate}) => (
  <div>
    {console.log('Rendering', image)}
    <FrameInfo image={image} changeRate={changeRate}/>
    <img src={ASSET_DIR + image.src} alt="Error loading image" />
  </div>
);

export default Frame