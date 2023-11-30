import {Form,Button} from 'react-bootstrap';

const ReviewForm = ({handleSubmit,reviewText,labelText,defaultValue}) => {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={reviewText} as="textarea" rows={6} defaultValue={defaultValue} />
        </Form.Group>
        <Button variant="light" onClick={handleSubmit}>Submit Review</Button>
    </Form>   
  )
}

export default ReviewForm