import React from "react";
import "../css/FlipCard.css"

export default function FlipCard (){

    return( 
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                 <h2 className="card-title">Hanabi Research</h2>
                    <img src="https://cdn.britannica.com/82/203482-050-E2ABDA79/People-fireworks.jpg" alt="Avatar"/>
                </div>
                <div className="flip-card-back">
   
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </div> );
}