import "../css/MapImageDot.css"
import React, { useEffect, useState } from "react";
/*This is a dot that positions itself on the map It takes an X and Y position to place
itself. It's also passed an Onclick to handle opening and closing the picture that's
attatched to it
*/
export default function MapImageDot({ X, Y, onClick, url, openID,percent }) {
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

  function setPercent(percent,x,y){
    if ((percent <= 73.56440287070333) && (percent >= 26.235172895564595)){
      return {
        top: y,
        left: x -300
      };
    }
    if (percent <= 4.421959533550187) {
      return {
        top: y - 200,
        left: x + 50
      };
    }
    return {
        top: y,
        left: x
    };
  }
  const pictureStyleVis = setPercent(percent,X,Y);


  return (
    <>
      <circle className="Dot" style={dotStyle} onClick={onClick} />
        <foreignObject>
          <img  style={(visible) ? {visibility:"visible",...pictureStyleVis} : {visibility:"hidden",...pictureStyleVis}} src={url} className="photos"></img>     
        </foreignObject>

      
    </>
  );
}
