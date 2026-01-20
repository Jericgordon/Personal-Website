import React, { useEffect,useState } from 'react';
import Navbar from '../componants/WebsiteNavbar.jsx'
import { useParams} from 'react-router-dom';
import blogPosts from "../data/blogPosts.json" with {type : "json"}
import PostTravelBar from '../componants/postTravelBar.jsx';
import "../css/BlogPosts.css"
import seriesPosts from "../data/blogSeries.json"

export default function BlogPost() {
    const { id } = useParams();
    const [post,setPost] = useState(() => 1)
    const [series, setSeries]  = useState(() => "");
    const [first, setFirst]  = useState(() => 1);
    const [last, setLast]  = useState(() => 1);


    useEffect(() => {
        blogPosts.forEach(p => {
       
            if (p.id == id){
                console.log("post",p);
                setPost(p)
                setSeries(p["series"]);
            } else {
                console.log("all posts",p,id);
            }
        })
    },[id]);

    useEffect(() => {
        if (series){
            console.log("series",series);
            let thisSeries = seriesPosts.filter(s => s.series_name == series)
            setFirst(thisSeries["first"]);
            setLast(thisSeries["last"]);
        }
    },[series]);

    return (
        <>
            <Navbar />
            <div className="blog-container" dangerouslySetInnerHTML={{__html: post["html"]}}></div>
            <PostTravelBar first={first} last={last} current ={id} />
        </>
    )
}