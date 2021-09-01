import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap"

const detail = ({details}) => {
 return (
     <Container>
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={details.Poster} />
  <Card.Body>
    <Card.Title>{details.Title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
     </Container>
 )
}
export default detail 