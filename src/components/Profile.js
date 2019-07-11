import React from 'react';
import './css/instructions.css'

const Profile = props => (
    <div className="instruction-box">
        <img className="step-img" src ={props.stepImg} />
    </div> 
);

export default Profile; 