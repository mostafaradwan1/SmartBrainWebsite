import React from 'react';
import { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css';
import Rank from './components/Rank/Rank';
import Particles  from 'react-particles-js'
import particles from './particles';
import Clarifai from 'clarifai'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'

const app = new Clarifai.App({apiKey: '75255e80cfe048c4aef9f22db5f3e680'}); 

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{},
    }
  }

  calculateFaceLocation=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box
    const image= document.getElementById('input')
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox(box){
    this.setState({box:box})
  }
  onInputChange=(e)=>{
    this.setState({input:e.target.value})
  }

  onSubmit=()=>{
    this.setState({imageUrl:this.state.input})

      app.models.predict( Clarifai.FACE_DETECT_MODEL,this.state.input).then(response => this.displayFaceBox(this.calculateFaceLocation(response))
      .catch(err => console.log(err))
      );
  }
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <Particles className='particles' params={particles}/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/> 
      </div>
    );
  }
}


export default App;
