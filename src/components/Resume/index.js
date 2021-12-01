import React from 'react';

function Resume(){
    return(
        <div>
           <br/>
            <img id="resume1" alt="resume" src ={require(`../../assets/technical-resume-1.png`).default} />
            <img id="resume2" alt="resume" src ={require(`../../assets/technical-resume-2.png`).default} />
        </div>
        

    );
}

export default Resume;