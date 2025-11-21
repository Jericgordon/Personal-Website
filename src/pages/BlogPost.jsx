import React from 'react';
import Navbar from '../componants/WebsiteNavbar.jsx'
import { useParams } from 'react-router-dom';


export default function BlogPost() {  
    const { id } = useParams();
    console.log("ID is", id);

    return (
        <>
            <Navbar />
            
        </>
    )
}