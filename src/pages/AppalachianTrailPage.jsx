import Navbar from '../componants/WebsiteNavbar.jsx'
import React from 'react';
import Map from '../componants/Map.jsx';
import data from "../../public/export.json" with{type: "json"}

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Map data={data} />
        </>
    )
}