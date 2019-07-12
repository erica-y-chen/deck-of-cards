import React from 'react';
import './css/instructions.css'

// component used in setting up your profile page--displaying the different avatars the user can choose from
const Profile = props => (
    <div className="instruction-box">
        <img className="step-img" src ={props.stepImg} />
    </div> 
);

export default Profile; 