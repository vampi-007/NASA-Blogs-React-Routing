import { Col, Row } from "react-bootstrap";
import "./Blog.css";

export default function Blog(props) {
  return (
    <div className="blog">
      <Row>
        <Col>
          <h1>{props.heading}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{props.postDetails}</p>
        </Col>
        <Col>
          <p>{props.blogDetails}</p>
        </Col>
      </Row>
    </div>
  );
}
