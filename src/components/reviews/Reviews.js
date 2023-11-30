import {useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import api from '../../api/axiosConfig';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {
    const reviewText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(()=>{
        getMovieData(movieId);
    },[])

    const addReview = async (e) =>{
        e.preventDefault();
        const review = reviewText.current;
        try
        {
            const response = await api.post("/api/v1/reviews",{reviewBody:review.value,imdbId:movieId});
            const updatedReviews = [...reviews, {body:review.value}];
            review.value = "";
            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }
    }
    return (
        <Container>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} reviewText={reviewText} labelText = "Add a review" />  
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map((review) => {
                            return(
                                <>
                                    <Row>
                                        <Col>{review.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>                                
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>        
        </Container>
    )
}

export default Reviews