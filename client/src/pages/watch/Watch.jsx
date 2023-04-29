import { ArrowBackOutlined } from "@material-ui/icons";
import {Link,useLocation} from "react-router-dom"
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.state.video;
  return (
    <div className="watch">
      <Link to="/">  
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        src={movie}
      />
    </div>
  );
}
