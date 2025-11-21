import React from 'react';
import Navbar from '../componants/WebsiteNavbar.jsx'
import { useParams } from 'react-router-dom';
import blogPosts from "../data/blogPosts.json" with {type : "json"}

export default function BlogPost() {  
    const { id } = useParams();
    console.log("ID is", id);
    

    return (
        <>
            <Navbar />
            <div dangerouslySetInnerHTML={{__html: blogPosts[parseInt(id)]["html"]}}>

            </div>
            

        </>
    )
}