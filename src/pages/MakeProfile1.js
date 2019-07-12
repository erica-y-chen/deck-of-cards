import React, { Component } from "react";
import './onboarding.css'
import './makeprofile.css'
import { Link } from 'react-router-dom'

//images
import Logo from '../images/high-low-logo.svg'
import profile1 from '../images/profiles/boy.svg'
import profile2 from '../images/profiles/boy2.svg'
import profile3 from '../images/profiles/girl.svg'
import profile4 from '../images/profiles/girl2.svg'

class MakeProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatars: [false, false, false, false],
      avatar2: [false, false, false, false],
      profileSelected: 0,
      profileSelected2: 0,
      player1Name: '',
      player2Name: '',
    }
  
  }
 
  selectProfile = (key) => {
    const selectedAvatar = [false, false, false, false];
    selectedAvatar[key] = !selectedAvatar[key];
    this.setState ({ 
      avatars: selectedAvatar,
      profileSelected: key,
    })
  }

  selectProfile2 = (key) => {
    const selectedAvatar = [false, false, false, false];
    selectedAvatar[key] = !selectedAvatar[key];
    this.setState ({ 
      avatar2: selectedAvatar,
      profileSelected2: key,
    })
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render () {
    
    return (
      <div>
        <div className="onboarding-header" >
            <div className = "high-low-logo">
                <img className="logo" src ={Logo} alt = "high-low game logo"/>
                <div className="game-title">high/low</div>
            </div>

            <div className = "header-buttons">
              <Link to="/"><div className= "how-to-play">How to Play</div></Link>
            </div>

        </div>

        <div className="header">Player 1: Name </div>
        <div className="name-input-container">
          <input 
          className="player-name-input"
          value={this.state.player1Name}
          name = "player1Name"
          onChange = {this.changeHandler} />
        </div>

        <div className="header">Choose your avatar</div>
        <section className="instructions">
          
          {/* TODO: Make this a component */}




          
          <div className={this.state.avatars[0] ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile1} onClick={() => this.selectProfile(0)} alt = "avatar of a person with dark hair"/></div>
          <div className={this.state.avatars[3] ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile4} onClick={() => this.selectProfile(3) } alt = "avatar of a person with red hair"/></div>
          <div className={this.state.avatars[1] ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile2} onClick={() => this.selectProfile(1) } alt = "avatar of a person with grey hair"/></div>
          <div className={this.state.avatars[2] ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile3} onClick={() => this.selectProfile(2) } alt = "avatar of a person with long brown hair"/></div>
        </section>

        <div className = "linebr" />

        <div className="header">Player 2: Name </div>
        <div className="name-input-container">
          <input 
            className="player-name-input"
            value={this.state.playerName}
            name = "player2Name"
            onChange = {this.changeHandler} />
        </div>

        <div className="header">Choose your avatar</div>
          <section className="instructions">
            <div className={this.state.avatar2[0] ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile1} onClick={() => this.selectProfile2(0) } alt = "avatar of a person with dark hair"/></div>
            <div className={this.state.avatar2[3] ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile4} onClick={() => this.selectProfile2(3) } alt = "avatar of a person with red hair"/></div>
            <div  className={this.state.avatar2[1] ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile2} onClick={() => this.selectProfile2(1) } alt = "avatar of a person with grey hair"/></div>
            <div className={this.state.avatar2[2] ? "avatar-wrapper-selected" : "avatar-wrapper" }><img className="profile-avatar" src = {profile3} onClick={() => this.selectProfile2(2) } alt = "avatar of a person with long brown hair"/></div>
          </section>

       <Link to="/high-low"><button className="get-started" onClick={() => this.props.makeAvatar(this.state.profileSelected,  this.state.profileSelected2, this.state.player1Name, this.state.player2Name)}>Play</button></Link>
      </div>
    );
  }
}

export default MakeProfile;
