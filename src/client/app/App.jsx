import React from 'react'
import Frame from './Frame.jsx'
import ImageList from './ImageList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{id: 0, title: 'How-to-computer', src: 'computer-how.jpg', rating: 0},
             {id: 1, title: 'Lego-Starwars', src: 'lego-starwars.jpg', rating: 0},
             {id: 2, title: 'Link', src: 'link.jpg', rating: 0},
             {id: 3, title: 'Space', src: 'space.jpg', rating: 0},
             {id: 4, title: 'Volcano', src: 'volcano.jpg', rating: 0}],
      currentFrame: null
    }; 
    this.state.currentFrame = this.state.data[0];
    //Thoughts -- how to use nodefs to readdir for
    //the images you want displayed and have the app render
    //them dynamically. Server-side thing right? 
  }

  changeFrame (newFrame) {
    this.setState({currentFrame: newFrame}); 
  }

  render() {
    return (
      <div className='container'>
      <div className='rows'>
        <h1 className='title'> ReadR </h1>
        <div className='col-xs-3'>
          <ImageList images={this.state.data} clickFn={this.changeFrame.bind(this)}/>
        </div>
        <div className='col-xs-9'>
          <Frame image={this.state.currentFrame}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App