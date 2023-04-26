import "./listitem.scss"

import * as React from 'react';

import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';


import { useState } from "react";

export default function Listitem({index}) {
  const [isHovered, setIsHovered]=useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  
  return (
    <div className="listitem" 
    style={{ left: isHovered && index * 330}}
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}
    >


        <img 
        src="https://www.boredpanda.com/blog/wp-content/uploads/2022/06/aesthetically-pleasing-movies-18-62975cb878436__880.jpg" 
        alt="" 
        />

        {isHovered && (
          <>
             <video src = {trailer} autoPlay={true} loop />
             <div className="itemInfo">
              <div className="icons">
               <PlayCircleOutlineOutlinedIcon className="eachicon"/>
               <AddCircleOutlineOutlinedIcon className="eachicon"/>
               <ThumbUpAltOutlinedIcon className="eachicon"/>
               <ThumbDownOffAltOutlinedIcon className="eachicon"/>
              </div>
            <div className="itemInfoTop">
             <span>1 hour 20 minutes</span>
             <span className="Age Limit">13+</span>
             <span>1995</span>
            </div>
            <div className="desc">
             This movie is based on the real events that 
             took place in 1960 and the trials that happened 
             after.
            </div>
          <div className="genre">Thriller</div>
      </div>
    </>
  )}
</div>
);
}

