import github_image from "../icons/github-mark/github-mark-white.png"
import rightArrow from "../icons/google-icons/arrow_forward_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png"
import React from "react";
import { Button } from "react-bootstrap";
import "../css/ProjectCard.css"
import ReactGA from 'react-ga4';

export default function ProjectCard ({title,description,ghLink,viewLink}){
    ReactGA.initialize('G-JJ3LCVWMFP');
    function registerClick(link){
        ReactGA.event('Click',{
        action: '-> ' + link,
        label: 'Project Card'
        });
    }    
    return( 
        <div className="card-style">
            <h3>{title}</h3>
            <div className="card-description">
                {description}
            </div>
            <Button onClick={registerClick(ghLink)} size="sm" href={ghLink} variant="dark" className="github-button">
                <img height={15} width={15} src={github_image}></img>
            </Button>

            <Button onClick={registerClick(viewLink)}size="sm" href={viewLink} variant="success" className="view-button">
                <img height={15} width={15} src={rightArrow}></img>
                view
            </Button>
        </div>
    );
}