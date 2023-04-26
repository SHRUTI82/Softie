
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./feature.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="romance">Romance</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="rom-com">Rom-Com</option>
            <option value="thriller">Thriller</option>
            <option value="period">Period</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
src="https://pbs.twimg.com/media/C1N_8R2WEAABYWK.jpg"        alt=""
      />
      <div className="info">
     
        <span className="desc">
          The movie is based on the tragedy that happened 
          in 1969 when the world turned upside down. A team of 
          five members is on the mission to find the fault and 
          restore the order in society. 
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
