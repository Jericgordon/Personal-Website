import React from 'react';
import Navbar from '../componants/WebsiteNavbar';
import StoryNetwork from '../componants/hdg/StoryNetwork'
import networkData from '../data/blogposts/hdg/networkData.json'
import stories_by_year_data from '../data/blogposts/hdg/stories_by_year.json'
import StoriesByYearGraph from '../componants/hdg/StoriesByYearGraph'
import WordcountByAuthorGraph from '../componants/hdg/WordcountByAuthorGraph.jsx'
import author_wordcount_data from '../data/blogposts/hdg/author_wordcounts.json'
export default function Hdg() {
    return (
        <>
            <Navbar />
            <StoriesByYearGraph data={stories_by_year_data}/>
            <WordcountByAuthorGraph data={author_wordcount_data}/>
            <StoryNetwork data={networkData} />
        </>
    )
}