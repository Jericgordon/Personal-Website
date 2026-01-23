import React from 'react';
import rightDouble from "../icons/google-icons/keyboard_double_arrow_right_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
import right from "../icons/google-icons/keyboard_arrow_right_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
import leftDouble from "../icons/google-icons/keyboard_double_arrow_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
import left from "../icons/google-icons/keyboard_arrow_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"

import "../css/PostTravelBar.css"

/* This template just exists to make my life easier when making new pages*/
export default function PostTravelBar({first,last,id,setID}) {
    function updateURL(){
        console.log("updating URL");
    }

    function goToPost(post_number){
        /* This function takes in a post_number which is the naive navigation, and bounds it. 
        It also handles changing the URL
        */
       console.log("recieved request to go to post", post_number);
        if (post_number < first){
            setID(first);
        } else if (post_number > last){
            setID(last);
        } else {
            setID(post_number);
        }
        console.log("set ID to ", post_number);
    }


    return (
        <div className="post-travel-bar">
                <img onClick={() => goToPost(first)} src={leftDouble} alt="Go to earliest post" />
                <img onClick={() => goToPost(id - 1)} src={left} alt="Go to previous post" />
                <img onClick={() => goToPost(id + 1)} src={right} alt="Go to next post" />
                <img onClick={() => goToPost(last)} src={rightDouble} alt="Go to Latest post" />
        </div>
    )
}