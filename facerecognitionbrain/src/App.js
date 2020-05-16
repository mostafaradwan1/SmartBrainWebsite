import React from 'react';
import { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css';
import Rank from './components/Rank/Rank';
import Particles  from 'react-particles-js'
import particles from './particles';


class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
    }
  }

  onInputChange=(e)=>{
    console.log(e.target.value)
  }

  onSubmit=()=>{
    console.log('click')
  }
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <Particles className='particles' params={particles}/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        {/* 
        <FaceRecognition/> */}
      </div>
    );
  }
}


export default App;
