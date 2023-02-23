import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Article from "../components/Article";
import { Iarticle } from "../interfaces/Iarticle";

/* interface Iarticle {
  title: string;
  imge: string;
} */

const fetchCall = () => {
  const [articles, setArticles] = useState<Iarticle[]>([]);

  useEffect(() => {
    fetchArticle();
  }, []);

  const URL = "https://api.spaceflightnewsapi.net/v3/articles";

  const fetchArticle = async () => {
    try {
      const res = await fetch(URL);
      if (res.ok) {
        const articleData = await res.json();
        console.log(articleData);
        setArticles(articleData);
      } else {
        console.log("qualcosa è andato storto con la chiamata");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <h2> Read the news!</h2>
        <Col>
          {articles?.map((article, id) => {
            return <Article key={id} article={article}></Article>;
          })}
        </Col>
      </Row>
    </Container>
  );
};
export default fetchCall;
