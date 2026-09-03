import Navbar from '../componants/WebsiteNavbar.jsx'
import Profile from "../componants/Profile.jsx"
import FeaturedProjects from '../componants/FeaturedProjects.jsx';
import React from 'react';
import ReactGA from 'react-ga4';
export default function HomePage() {
    ReactGA.initialize('G-JJ3LCVWMFP');
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });   
     return (
        <>
            <Navbar />
            <Profile />
            <FeaturedProjects />
            
        </>
    )
}