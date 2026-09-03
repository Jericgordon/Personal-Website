import Navbar from '../componants/WebsiteNavbar.jsx'
import Profile from "../componants/Profile.jsx"
import FeaturedProjects from '../componants/FeaturedProjects.jsx';
import React from 'react';
import ReactGA from 'react-ga4';
export default function HomePage() {
    ReactGA.initialize('G-JJ3LCVWMFP');
    ReactGA.pageview(window.location.pathname);
    return (
        <>
            <Navbar />
            <Profile />
            <FeaturedProjects />
            
        </>
    )
}