import Navbar from '../componants/WebsiteNavbar.jsx'
import Profile from "../componants/Profile.jsx"
import FeaturedProjects from '../componants/FeaturedProjects.jsx';
import React from 'react';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Profile />
            <FeaturedProjects />
            
        </>
    )
}