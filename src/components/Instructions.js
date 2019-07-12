import React from 'react';
import './css/instructions.css'

//libraries
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init()

//component that is a container of a single step instructino in the onboarding page
const Instructions = props => (

    <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true" className="instruction-box">
        <img  className="step-img" src ={props.stepImg} alt = "icon explaining the step"/>
        <div className="instruction-step">{props.title}</div>
        <div className="instruction-details">{props.description}</div>
    </div> 
);

export default Instructions; 