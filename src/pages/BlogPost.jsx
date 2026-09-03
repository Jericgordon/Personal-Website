import React, { useEffect,useState,useRef } from 'react';
import Navbar from '../componants/WebsiteNavbar.jsx'
import { useParams} from 'react-router-dom';
import blogPosts from "../data/blogPosts.json" with {type : "json"}
import PostTravelBar from '../componants/postTravelBar.jsx';
import "../css/BlogPosts.css"
import seriesPosts from "../data/blogSeries.json"
import ReactGA from 'react-ga4'

export default function BlogPost() {
    const topOfPageRef = useRef();
    const { id } = useParams();
    const [postID, setPostID] = useState(() => undefined)
    const [post,setPost] = useState(() => 1)
    const [series, setSeries]  = useState(() => undefined);
    const [first, setFirst]  = useState(() => 1);
    const [last, setLast]  = useState(() => 1);

    ReactGA.initialize('G-JJ3LCVWMFP');
    ReactGA.pageview(window.location.pathname);
    useEffect(() => {
        if (id){
            setPostID(parseInt(id));
            //console.log("recieved ID",id);
        }
    },[id])




    useEffect(() => {
        if (postID){
            console.log("Setting post for ID",postID);
            let found_post = blogPosts.find(p => p.id == postID);
            setPost(found_post)
            if (found_post["series"] != series){
                setSeries(found_post["series"]);
            }
        }
    },[postID]);

    useEffect(() => {
        if (series){
            console.log("setting series",series);
            let thisSeries = seriesPosts.find(s => s.series_name == series)
            setFirst(parseInt(thisSeries.first));
            setLast(parseInt(thisSeries.last));
            console.log("series Params",thisSeries.first,thisSeries.last);
        }
    },[series]);

    useEffect(() => {
        //set new ID
        const oldURL = window.location.href;
        let lastSlash = 0;
        for (let i = oldURL.length;i>0;i--){
            if (oldURL.charAt(i) == "/"){
                lastSlash = i;
                break;
            }
        }
        let newURL = oldURL.slice(0,lastSlash + 1);
        console.log(String(postID));
        for (let i = 0;i<String(postID).length;i++){
            newURL = newURL + String(postID).charAt(i);
        }
        window.history.pushState({id:id},null,oldURL);
        window.history.replaceState({id:id},"personal-webstie",newURL);
            
        setTimeout(() => {
            window.scrollTo(0,0);
        }, 50);

    },[post]);

    return (
        <>
            <Navbar />
            <div ref={topOfPageRef}></div>
            <div className="blog-container" dangerouslySetInnerHTML={{__html: post["html"]}}></div>
            <PostTravelBar first={first} last={last} id ={postID} setID={setPostID} topOfPageRef={topOfPageRef} />
        </>
    )
}