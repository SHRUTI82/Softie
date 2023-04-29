
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import {useState, useEffect} from "react";
import axios from 'axios'
import {Link} from "react-router-dom";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(()=>{
    const getRandomContent = async() =>{
      try{
        const res = await axios.get(`/movies/random?type=${type}`,
        {
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDk0OTkwOGNhZTUzOGM4YTU1MGFiOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjY2NzE4MCwiZXhwIjoxNjgyODM5OTgwfQ.YE2X9Xrxrwl-V5GemO2cJZle04fKvg_FSpJCnDWOG2k"
          }
        });
        setContent(res.data[0]);
      }catch(err){
        console.log(err);
      }
    }
    getRandomContent();
  },[type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre"
          onChange={(e) => setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="romance">Horror</option>
            <option value="comedy">Comedy</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="animation">Action</option>
          </select>
        </div>
      )}
      {/* <img
src="https://pbs.twimg.com/media/C1N_8R2WEAABYWK.jpg"        alt=""
      /> */}
      <img src={content.img}/>
      <div className="info">
        {/* <img src={content.imgTitle}/> */}
        {/* <span className="desc">
          The movie is based on the tragedy that happened 
          in 1969 when the world turned upside down. A team of 
          five members is on the mission to find the fault and 
          restore the order in society. 
        </span> */}
        <span className="desc">{content.desc}</span>
        <div className="buttons">
        <Link to="/watch" state={{movie:content}}>
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
        </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
