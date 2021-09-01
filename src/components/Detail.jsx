import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"
const Detail = ({movie, comments}) => {
 return (
     <Container>
         <Link>
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.Poster} />
  <Card.Body>
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
        {
            comments.map(c => (
                <p key={c._id}>{c.comment}</p>
            ))
        }
    </ListGroupItem>
   
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
</Link>
     </Container>
 )
}
export default Detail