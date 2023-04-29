import "./listitem.scss"

import * as React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';


export default function Listitem({index , item}) {
  const [isHovered, setIsHovered]=useState(false);
  const [movie, setMovie]=useState({});
  // const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  
  useEffect(() => {
    const getMovie = async() =>{
      try{
        const res = await axios.get("/movies/find/" + item,
        {
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDk0OTkwOGNhZTUzOGM4YTU1MGFiOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjY2NzE4MCwiZXhwIjoxNjgyODM5OTgwfQ.YE2X9Xrxrwl-V5GemO2cJZle04fKvg_FSpJCnDWOG2k"
          }
        }
        );
        console.log(res.data)
        setMovie(res.data)
      }catch(err){
        console.log(err)
      }
    };
    getMovie();
},[item])

  return (
    // <Link to={{pathname: "/watch",movie:movie}}>
    // <Link to="/watch" state={{movie:movie}}>
    <div className="listitem" state={{movie:movie}}
    style={{ left: isHovered && index * 330}}
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}
    >


        <img 
        //src="https://www.boredpanda.com/blog/wp-content/uploads/2022/06/aesthetically-pleasing-movies-18-62975cb878436__880.jpg"
        src = {movie.img} 
        alt="" 
        />

        {isHovered && (
          <>
             <video src = {movie.trailer} autoPlay={true} loop />
             <div className="itemInfo">
              <div className="icons">
              <Link to="/details" state={{movie:movie}}>
               <PlayCircleOutlineOutlinedIcon className="eachicon"/>
              </Link>
              {/* to add to wishlist */}
              
               <AddCircleOutlineOutlinedIcon className="eachicon"/>
               <ThumbUpAltOutlinedIcon className="eachicon"/>
               <ThumbDownOffAltOutlinedIcon className="eachicon"/>
              </div>
            <div className="itemInfoTop">
             {/* <span>1 hour 20 minutes</span> */}
             <span>{movie.duration}</span>
             <span className="Age Limit">{movie.limit}+</span>
             <span>{movie.year}</span>
             {/* <span>1995</span> */}
            </div>
            {/* <div className="desc">
             This movie is based on the real events that 
             took place in 1960 and the trials that happened 
             after.
            </div> */}

            <div className="desc">{movie.desc}</div>
          <div className="genre">{movie.genre}</div>
      </div>
    </>
    
  )}
</div>
// </Link>
);
}


