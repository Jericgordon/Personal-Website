import React from "react";

import map from "../resources/APPA_Map-1.png";
import mappify from "../modules/mappify";
import MapImageDot from "./MapImageDot";
import { useRef, useEffect, useState } from "react";
import "../css/Map.css"

export default function Map({
  url,
  openPic,
  setOpenPic,
  setCurrentPercent,
}) {
  //const [openPic,setOpenPic] = useState(() => -1)
  const [mapDots, setMapDots] = useState([]);
  const mapImg = useRef(null);
  const trail = useRef(null);
  //console.log("Starting Map componant for url", url);

  //convert the data in the JSON to real things on the page
  const processJson = (json) => {
    const convertertedCooodinates = json.map((data) => {
      const onMap = {};
      const length = trail.current.getTotalLength();
      const point = trail.current.getPointAtLength(
        length * (data.percent / 100)
      );
      onMap.X = point.x;
      onMap.Y = point.y;
      onMap.ID = data._id;
      onMap.url = data.url;
      onMap.percent = data.percent;
      return onMap;
    });
    setMapDots(convertertedCooodinates);
  };
  //getAPIitems from URL
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => processJson(data));
  }, [url]);

  function onClickHandlerDots(ID, percent) {
    if (openPic === ID) {
      setOpenPic(-1); //no pic is showing
      setCurrentPercent(-1);
    } else {
      setOpenPic(ID);
      setCurrentPercent(percent);
    }
  }

  const scale = 0.908;
  return (
    //709.549 3355.049"
    <div className="map">
      <img ref={mapImg} className="map-background" src={map}></img>
      <svg className="svg-container" viewBox={`0 0 ${700.549 * scale} ${3652.86 * scale}`}>
        {mapDots.map((dot) => (
          <MapImageDot
            openID={openPic}
            myID={dot.ID}
            key={dot.ID}
            X={dot.X}
            Y={dot.Y}
            url={dot.url}
            onClick={() => onClickHandlerDots(dot.ID, dot.percent)}
          />
        ))}
        <path
          className="map-path"
          ref={trail}
          transform="translate(-36,-20)"
          stroke="green"
          fill="none"
          strokeWidth="0"
          d={mappify.ATPath}
        ></path>
      </svg>
    </div>
  );
}
