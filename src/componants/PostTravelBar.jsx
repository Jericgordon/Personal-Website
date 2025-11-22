import React from 'react';
import rightDouble from "../icons/google-icons/keyboard_double_arrow_right_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
import right from "../icons/google-icons/keyboard_arrow_right_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
import leftDouble from "../icons/google-icons/keyboard_double_arrow_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
import left from "../icons/google-icons/keyboard_arrow_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"

import "../css/PostTravelBar.css"
const id = 1;

/* This template just exists to make my life easier when making new pages*/
export default function PostTravelBar({first,last,current}) {
    console.log(first,last,parseInt(current));
    return (
        <div className="post-travel-bar">
                <a href={"/#blog/" + first}><img src={leftDouble} alt="Go to earliest post" /></a>
                <a href={"/#blog/" + ((parseInt(current) < last) ? parseInt(current) + 1 : parseInt(current))}><img src={left} alt="Go to previous post" /></a>
                <a href={"/#blog/" + ((parseInt(current) > first) ? parseInt(current) - 1 : parseInt(current))}><img src={right} alt="Go to next post" /></a>
                <a href={"/#blog/" + last}><img src={rightDouble} alt="Go to Latest post" /></a>
        </div>
    )
}