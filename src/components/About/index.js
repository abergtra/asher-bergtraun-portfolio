import React from 'react';

function About(){
    return(
        <div>
            <h2 className="component-header"> 
            About
            </h2>
            <img className="profile-image" src ={require(`../../assets/professional-thumbnail-potential.jpg`).default} alt="headshot"/>
           
            <h6 className="about-description"> 
            
            Enthusiastic trilingual (Fluent English, Italian, French) Software Engineer with a background in Mechanical Engineering working in San Francisco. <br></br>
            Experienced in multiple programming languages with experience applying them to real world mechanical applications in fields including manufacturing, construction, and robotics. <br></br>
            A collaborative self starter with a passion for sustainable design that can have a positive impact on the world.

            </h6>

        </div>
    );
}

export default About;