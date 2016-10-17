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
    <tbody>
      <tr>
        <th className='tableHead'><h2> Images </h2></th>
      </tr>
      {images.map(function(image, index) {
        return (
          <tr key={image.id}>
            <td onClick={()=>{clickFn(image, index)}} >{image.title}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);


export default ImageList