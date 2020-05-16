import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css';
import Rank from './components/Rank/Rank';
import Particles  from 'react-particles-js'
import particles from './particles';




function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Particles className='particles' params={particles}/>
      <Rank/>
      <ImageLinkForm/>
      {/* 
      <FaceRecognition/> */}
    </div>
  );
}

export default App;