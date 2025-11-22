import React, { useEffect,useState } from 'react';
import Navbar from '../componants/WebsiteNavbar.jsx'
import { useParams} from 'react-router-dom';
import blogPosts from "../data/blogPosts.json" with {type : "json"}
import PostTravelBar from '../componants/postTravelBar.jsx';
import "../css/BlogPosts.css"
import seriesPosts from "../data/blogSeries.json"

export default function BlogPost() {
    const { id } = useParams();
    const [series, setSeries]  = useState(() => "");
    const [first, setFirst]  = useState(() => 1);
    const [last, setLast]  = useState(() => 1);

    useEffect(() => {
        setSeries(blogPosts[parseInt(id)]["series"]);
    },[]);

    useEffect(() => {
        if (series){
            console.log("series",series);
            setFirst(seriesPosts[series]["first"]);
            setLast(seriesPosts[series]["last"]);
        }


    },[series]);

    return (
        <>
            <Navbar />
            <div className="blog-container" dangerouslySetInnerHTML={{__html: blogPosts[parseInt(id)]["html"]}}></div>
            <PostTravelBar first={first} last={last} current ={id} />
        </>
    )
}