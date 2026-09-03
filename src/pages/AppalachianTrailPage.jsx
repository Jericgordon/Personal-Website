import Navbar from '../componants/WebsiteNavbar.jsx'
import React from 'react';
import Map from '../componants/Map.jsx';
import data from "../data/export.json" with {type: "json"}
import ReactGA from 'react-ga4';

export default function HomePage() {
    ReactGA.initialize('G-JJ3LCVWMFP');
    ReactGA.pageview(window.location.pathname);

    return (
        <>
            <Navbar />
            <Map data={data} />
        </>
    )
}