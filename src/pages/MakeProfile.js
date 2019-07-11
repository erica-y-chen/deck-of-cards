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

class MakeProfile extends Component {
 
  state = {
    selected1: false,
    selected2: false,
    selected3: false,
    selected4: false,
  }

  selectProfile = (index) => {
    console.log("selected this one" + index)
  }

  render () {
    AOS.init();
    
    return (
      <div>
        <div className="onboarding-header" data-aos="zoom-out-up" data-aos-duration="1200">
            <div className = "high-low-logo">
                <img className="logo" src ={Logo} />
                <div className="game-title">high/low</div>
            </div>
            <Link to="/"><button className="get-started-header">Instructions</button></Link>

        </div>

        <div className="header">Player 1: Choose your avatar</div>
        <section className="instructions">
            <div className={this.state.selected1 ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile1} onClick={() => this.setState({ selected1: !this.state.selected1, selected2: false, selected3: false, selected4: false })} /></div>
            <div className={this.state.selected3 ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile3} onClick={() => this.setState({ selected3: !this.state.selected3, selected1: false, selected2: false, selected4: false })} /></div>
            <div className={this.state.selected2 ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile2} onClick={() => this.setState({ selected2: !this.state.selected2, selected1: false, selected3: false, selected4: false })} /></div>
            <div className={this.state.selected4 ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile4} onClick={() => this.setState({ selected4: !this.state.selected2, selected1: false, selected3: false, selected2: false })} /></div>
        </section>

      

        <Link to="/high-low"><button className="get-started" onClick={this.saveAvatar}>Next</button></Link>
      </div>
    );
  }
}

export default MakeProfile;
