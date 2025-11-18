import "../css/MapImageDot.css"
import React, { useEffect, useState } from "react";
/*This is a dot that positions itself on the map It takes an X and Y position to place
itself. It's also passed an Onclick to handle opening and closing the picture that's
attatched to it
*/
export default function MapImageDot({ X, Y, onClick, url, openID }) {
  const [visible, setVisible] = useState(() => false);
  //console.log(X,Y,url);
  const dotStyle = {
    postition: "Absolute",
    cx: X,
    cy: Y,
  };

  useEffect(() => {
    setVisible(url === openID);
  },[openID])


  const pictureStyleVis = {
    top: Y,
    left: X,
    visibility:" visible"
  };

  const pictureStyleInvisVis = {
    top: Y,
    left: X,
    visibility:"hidden"
  };

  return (
    <>
      <circle className="Dot" style={dotStyle} onClick={onClick} />
        <foreignObject>
          <img  style={(visible) ? pictureStyleVis : pictureStyleInvisVis} src={url} className="photos"></img>     
        </foreignObject>

      
    </>
  );
}
