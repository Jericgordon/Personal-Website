import React from 'react';
import Navbar from '../componants/WebsiteNavbar';
import StoryNetwork from '../componants/hdg/StoryNetwork'
import networkData from '../data/blogposts/hdg/networkData.json'

export default function Hdg() {
    return (
        <>
            <Navbar />
            <StoryNetwork data={networkData} />
        </>
    )
}