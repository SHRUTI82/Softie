import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./details.scss"
import StarRateIcon from '@mui/icons-material/StarRate';
import { PlayArrow } from "@material-ui/icons";
const Details = () => {

    const location = useLocation();
    const movie = location.state.movie;

    console.log(movie.title);

    const item = {
        id: 1,
        name: movie.title,
        time: movie.hour,
        desc: movie.desc,
        genres: movie.genre,
        cover:movie.img,
        trailer: movie.trailer,
        video: movie.video,
        date: movie.year,
        min: movie.min,
    }

    return (
        <>
            <div className='box'>
                <div className='coverImage'>
                    <img src={item.cover} alt='' />
                </div>
                <div className='content flex'>
                    <div className='details row'>
                        <h1 className="movie_name" >{item.name}</h1>
                        <div className='rating flex'>
                          
                            <br />
                            <br />
                            <span className="plytime">Duration : </span>
                            <label className="ratelabel">{item.time}</label>
                        </div>
                        <br />
                        <p className="desc">{item.desc}</p>
                        <br />
                        <div className='cast'>
                            <h4>
                                <span className="ratelabel">Genres </span>
                                <label className="ratelabel"> {item.genres}</label>
                               
                            </h4>
                           
                        </div>
                        <br />
                        <div className="btns">
                            <Link style={{ textDecoration: 'none' }} to="/watch" state={{ video: movie.trailer }}> 
                        <button className='primary-btn'>
                            <i><PlayArrow /></i> TRAILER
                        </button>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to="/watch" state={{ video: movie.video }}> 

                        <button className='primary-btn2'>
                            <i><PlayArrow /></i> PLAY
                        </button>
                            </Link>

                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Details