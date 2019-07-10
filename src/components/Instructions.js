import React from 'react';
import './css/instructions.css'

const Instructions = props => (
    <div className="instruction-box">
        <img className="step-img" src ={props.stepImg} />
        <div className="instruction-step">{props.title}</div>
        <div className="instruction-details">{props.description}</div>
    </div> 
);

export default Instructions; 