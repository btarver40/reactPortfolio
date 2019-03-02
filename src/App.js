import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

// class RegularClass {}
// class ComponentClass extends Component{}

// const RegularClassInstance = new RegularClass();
// const ComponentClassInstance = new ComponentClass();

// console.log('RegularClassInstance', RegularClassInstance);
// console.log('componentClassInstance', ComponentClassInstance);

class App extends Component {
  state = { displayBio: false };

  // DO NOT NEED CONSTRUCTOR ANYMORE BECAUSE WE CAN USE INITIAIZERS
  // constructor() {
  //   super();
  //   this.state = {displayBio: false};

  //   console.log('Component this', this);

  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }
  
  // AN EXAMPLE OF EACH METHOD SEPARATELY, BUT THIS IS NOT NEEDED.
  // YOU CAN PUT THEM BOTH INTO ONE METHOD(ToggleDisplayBio)
  // readMore() {
  //   // console.log('readMore this', this);
  //   this.setState({displayBio: true});
  // }

  // showLess() {
  //   this.setState({displayBio: false});
  // }

  toggleDisplayBio = () =>  {
    this.setState({displayBio: !this.state.displayBio});
  }

  render(){
    
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Bianca. I am a software engineer.</p>
        <p>I am always looking to better my skills and work on meaningful projects</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Utah and I love to code</p>
              <p>My favorite language is JavaScript and all things front end!</p>
              <p>Besides coding, I also love traveling, food, my husband Jacoby, and our baby pitbull Blue!</p>
              <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>
          )
        }
        <hr />
        <Projects />
        <hr/>
        <SocialProfiles/>
      </div>
    )
  }
}

export default App;