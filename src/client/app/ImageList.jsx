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
let ImageList = ({images, clickFn}) => (
  <table> 
    <tr>
      <th className='tableHead'><h2> Images </h2></th>
    </tr>
    {images.map(function(image) {
      return (
        <tr>
          <td onClick={()=>{clickFn(image)}} key={image.id}>{image.title}</td>
        </tr>
      );
    })}
  </table>
);


export default ImageList