import React from 'react';
import Navbar from '../componants/WebsiteNavbar';
import StoryNetwork from '../componants/hdg/StoryNetwork'
import networkData from '../data/blogposts/hdg/networkData.json'
import stories_by_year from '../data/blogposts/hdg/stories_by_year.json'
import StoriesByYearGraph from '../componants/hdg/StoriesByYearGraph'


export default function Hdg() {
    return (
        <>
            <Navbar />
            <StoryNetwork data={networkData} />
            <StoriesByYearGraph data={stories_by_year}/>
        </>
    )
}