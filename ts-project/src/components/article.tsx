import { Container, Col, Row, Card } from "react-bootstrap";
import { Iarticle } from "../interfaces/Iarticle";

interface articleProps {
  article: Iarticle;
}

const Article = ({ article }: articleProps) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={article.imgeUrl} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.summary}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{article.publishedAt}</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Article;
