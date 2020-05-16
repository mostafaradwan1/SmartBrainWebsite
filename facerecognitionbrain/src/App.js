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
    }
  }

  onInputChange=(e)=>{
    this.setState({input:e.target.value})
  }

  onSubmit=()=>{
    this.setState({imageUrl:this.state.input})

      app.models.predict( Clarifai.FACE_DETECT_MODEL,this.state.input).then(
        function(response) {
          // do something with response
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
        },
        function(err) {
          // there was an error
        }
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
        <FaceRecognition imageUrl={this.state.imageUrl}/> 
      </div>
    );
  }
}


export default App;
