import React from "react";
import "../css/FeaturedProjects.css"
import projectData from "../data/projects.json" with {type:"json"}
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects (){

    return( 
        <div className="featured-projects-container">
            <h3 className="subtitle">Featured Projects</h3>
            <div className="featured-projects">
                {projectData.map((data) => {
                    if (data.featured){
                        return <ProjectCard key={data.title} title={data.title} description={data.description} ghLink={data.githubLink} viewLink={data.viewLink}  />
                }})}
            </div>
        </div>
         );
}