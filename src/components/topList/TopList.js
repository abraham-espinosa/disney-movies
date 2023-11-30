import {Container} from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import './TopList.css';

const TopList = ({movies}) => {
  return (
    <Container>
        <div className='movies-container'>
            {
                movies?.map((movie) =>{
                    return(
                        <div className='.movie-item'>
                            <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                <img src={movie.poster} alt={movie.title} />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
  </Container>
  )
}

export default TopList