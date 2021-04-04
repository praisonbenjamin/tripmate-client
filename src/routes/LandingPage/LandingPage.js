import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
  state ={
    demo: false
  }
  handleDemo = () => {
    this.setState({demo: !this.state.demo}) 
  }
  render(){

    const demo = 
      <>
        <p>
          Click log in and use the following demo account!
          <br></br>Username: demo
          <br></br>Password: Password1!
        </p>
      </>

    return (
      <div className="landing-container">
        <h1>Welcome to Trip Mate!</h1>
        <p className="intro-para">Plan your next trip easily at one place!</p>
        <div className="landing-btns">
          <Link to="/Register"><button className="signup-btn">Get started now!</button></Link>
          <Link to="/Login"><button className="login-btn">Log In</button></Link>
          <button onClick={() => this.handleDemo()} className="demo-btn">Demo</button>
        
        <div className="demo-section">
          {this.state.demo ? demo : ''}
        </div>

        </div>
      </div>
    )
  }
}

export default LandingPage;