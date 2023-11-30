import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Hero = ({movies}) => {

    const navigate = useNavigate();
    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }
    let randomNum = Math.floor(Math.random() * 3);
  return (
    <div className ='carousel-container'>
      <Carousel>
        {
            movies?.map((movie) =>{
                return(
                    <Paper>
                        <div className = 'movie-card-container'>
                            <div className="movie-card" style={{"--img": `url(${movie.backdrops[randomNum]})`}}>
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={movie.poster} alt="" />
                                    </div>
                                    <div className="movie-title">
                                        <h4>{movie.title}</h4>
                                    </div>
                                    <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon 
                                                    className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>
                                        <div>
                                            <Button variant="light" onClick={() => reviews(movie.imdbId)}>Reviews &#127775;</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Hero
