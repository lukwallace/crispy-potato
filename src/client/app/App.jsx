import React from 'react'
import Frame from './Frame.jsx'
import ImageList from './ImageList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {id: 0, title: 'Whatever'},
      {id: 1, title: 'Wat'}
    ]; 
    //Thoughts -- how to use nodefs to readdir for
    //the images you want displayed and have the app render
    //them dynamically. Server-side thing right? 
  }


  render() {
    return (
      <div className='rows'>
        <h1> ReadR </h1>
        <div className='col-xs-4'>
          <ImageList images={this.data}/>
        </div>
        <div className='col-xs-8'>
          <Frame />
        </div>
      </div>
    );
  }
}

export default App