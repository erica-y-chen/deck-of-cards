import React, { Component } from "react";
import './onboarding.css'
import './makeprofile.css'
import { Link } from 'react-router-dom'

//libraries
import AOS from 'aos'
import 'aos/dist/aos.css';

//images
import Logo from '../images/high-low-logo.svg'
import profile1 from '../images/profiles/boy.svg'
import profile2 from '../images/profiles/boy2.svg'
import profile3 from '../images/profiles/girl.svg'
import profile4 from '../images/profiles/girl2.svg'
import points from '../images/hand.svg'


//components
import Profile from '../components/Profile'

class MakeProfile2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatars: [false, false, false, false],
      profileSelected: 0,
      playerName: '',
    }
  
  }
 
  selectProfile = (key) => {
    console.log("selected this one" + key)
    const selectedAvatar = [false, false, false, false];
    selectedAvatar[key-1] = !selectedAvatar[key-1];
    this.setState ({ 
      avatars: selectedAvatar,
      profileSelected: key,
    })
  }

  changeHandler = e => {
    this.setState({ playerName: e.target.value });
  };

  render () {
    AOS.init();
    
    return (
      <div>
        <div className="onboarding-header" >
            <div className = "high-low-logo">
                <img className="logo" src ={Logo} />
                <div className="game-title">high/low</div>
            </div>
            <Link to="/"><button className="get-started-header">Instructions</button></Link>

        </div>

        <div className="header">Player 1: Choose your avatar</div>
        <section className="instructions">
          <div data-aos-duration="800"  className={this.state.avatars[0] ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile1} onClick={() => this.selectProfile(1) } /></div>
          <div  data-aos-duration="800"  data-aos-delay="100" className={this.state.avatars[3] ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile4} onClick={() => this.selectProfile(4) } /></div>
          <div  data-aos-duration="800"  data-aos-delay="200" className={this.state.avatars[1] ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile2} onClick={() => this.selectProfile(2) } /></div>
          <div data-aos-duration="800"  data-aos-delay="300" className={this.state.avatars[2] ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile3} onClick={() => this.selectProfile(3) } /></div>
        </section>

        <div className="header">Name: </div>
          <input 
            value={this.state.playerName}
            name = "playerName"
            onChange = {this.changeHandler} />

      

       <Link to="/high-low"><button className="get-started" onClick={() => this.props.makeAvatar(this.state.profileSelected, this.state.playerName)}>Next</button></Link>
      </div>
    );
  }
}

export default MakeProfile2;
