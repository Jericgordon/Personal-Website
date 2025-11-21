import React from "react";
import "../css/Profile.css"
import jen_portrait from "../icons/Jen_Portrait.jpg"

export default function Profile (){

    return( 
        <div className="profile-background">
            <div className="profile-card">
                <img className="portrait" src={jen_portrait}></img>
                <div className="about-me-card">
                    <p>{"Jen Gordon,"}</p>
                    <p>Software Engineer</p>
                    <p>MCS Dec. 2025</p>
                </div>
            </div>
        </div>

         );
}