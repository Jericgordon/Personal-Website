import React from "react";
import "../css/Profile.css"
import jen_portrait from "../icons/Jen_Portrait.jpg"
import linkedinIcon from "../icons/in-logo/InBug-Black.png"
import githubIcon from "../icons/github-mark/github-mark.png"
import ReactGA from 'react-ga4'

export default function Profile (){
    ReactGA.initialize('G-JJ3LCVWMFP'); 
    function registerClick(link){
        ReactGA.event({
        category: 'Click',
        action: '-> ' + link,
        label: 'Profile'
        });
    }    

    return( 
        <div className="profile-background">
            <div className="profile-card">
                <img className="portrait" src={jen_portrait}></img>
                <div className="about-me-card">
                    <p>{"Jen Gordon,"}</p>
                    <p>Software Engineer</p>
                    <p>MCS Dec. 2025</p>
                    <div className="icons">
                    <a onClick={registerClick('Github Profile')} href="https://github.com/Jericgordon">
                        <img src={githubIcon} alt="Github Link" />
                    </a>
                    <a onClick={registerClick('Linkedin Profile')} href="https://www.linkedin.com/in/jen-gordon-northeastern/">
                        <img src={linkedinIcon} alt="Linkedin Link" />
                    </a>
                    </div>
                </div>
            </div>
        </div>

         );
}