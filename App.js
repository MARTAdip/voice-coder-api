import React, { Component } from 'react';
import VoiceSynthetizer from './components/VoiceSynthetizer';

import 'materialize-css';
import './App.css';

class App extends Component {
  state = {
    voice: 'Fiona',
    text: 'Hello i am Fiona, your new fantastic voice coder. Write something and i will speak to you!',
    textToAdd: '',
    pitch: 1.4,
    rate: 1
  }

  addText = (e) => {
    const textToAdd = e.target.value;
    this.setState({textToAdd})
  }

  sayMyText = () => {
    const textToAdd = this.state.textToAdd;
    this.setState({
      text : textToAdd,
      textToAdd : ''
    })
  }
  
  render() {
    return (
      <div className="App" >
        <header>
          <h1 className="App-title">Fiona's Voice Coder</h1>
        </header>
        
        <div className="input-field col s12">
            <input 
              type="text" 
              className="validate"
              value={this.state.addToText}
              onChange={this.addText}
              />
            <button className="btn waves-effect waves-light" type="submit" onClick={this.sayMyText}>Click</button>
          </div> 
          <VoiceSynthetizer 
            text={this.state.text}
            voice={this.state.voice}
            pitch={this.state.pitch}
            rate={this.state.rate}
            /> 
            <footer className="text thin grey-text">&copy; Marta 2018</footer>
     
      </div>
    );
  }
}

export default App;
