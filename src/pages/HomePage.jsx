import Navbar from '../componants/WebsiteNavbar.jsx'
import Profile from "../componants/Profile.jsx"
import FeaturedProjects from '../componants/FeaturedProjects.jsx';
import React from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router';
export default function HomePage() {
    ReactGA.initialize('G-JJ3LCVWMFP');
    ReactGA.send({ hitType: "pageview",page: useLocation().pathname}); 
         return (
        <>
            <Navbar />
            <Profile />
            <FeaturedProjects />
            
        </>
    )
}