import React, { Component, useRef, useState } from "react";
import  "./index.css";
import source from "./126149333_380527723199057_624273093093858616_n.mp4";
import VideoControls from "./VideoControls.js"
import VideoFooter from "./VideoFooter.js";
import "./index.css";
function Video({audioone,channelone, descriptionone }) {
    const [playing, setPlaying] = useState(false);

    const videoRef = useRef(null);
    const onvideoPress = () => {
        // videoRef.current.play();
        // console.log("sunnyleone")
        if (playing) {

              videoRef.current.pause();
              setPlaying(false);
        } else {
              videoRef.current.play();
               setPlaying(true);
        }
    
    };
    return (
        <div className = "userio">
        {/* <img src="logo.svg"/> */}
      
    <video src={source} className="orientation" loop  onClick= {onvideoPress} ref={videoRef} />
      <VideoFooter audio={audioone} channel={channelone} description={descriptionone} />
   
        </div>
    );

}
export default Video;