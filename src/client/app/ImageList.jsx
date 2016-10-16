import React from 'react'
// //ES6 lets you right it in this way as well
// class ImageList extends React.Component {
//   render () {
//     return (
//       <ul>
//       </ul>
//     );
//   }
// } 

//Assuming babel transpiles this correctly because of "(props)"
let ImageList = ({images}) => (
  <ul> 
    <li className='listHead'> Images </li>
    {images.map(function(image) {
      return (
        <li key={image.id}>{image.title}</li>
      );
    })}
  </ul>
);


export default ImageList