import ProjectCard from '../componants/ProjectCard.jsx';
import Navbar from '../componants/WebsiteNavbar.jsx'
import React from 'react';
import "../css/Projects.css"
import projectData from "../data/projects.json" with {type : "json"}

// projectData.map((d) => 
// {
//     console.log(d.viewLink,d.title,d.description,d.githubLink,d.viewLink)
// })


/* This template just exists to make my life easier when making new pages*/
export default function Projects() {
    return (
        <>
            <Navbar />
            <div className='projects'>
                {projectData.map((data) => {
                    return <ProjectCard key={data.title} title={data.title} description={data.description} ghLink={data.githubLink} viewLink={data.viewLink}  />
                })}
            </div>
        </>
    )
}