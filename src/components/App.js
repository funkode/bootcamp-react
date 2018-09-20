import React from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';

export const App = ({ message }) =>
  <Container>
    <Row>
      <Col>
        <Jumbotron className="margin-top-10px">
          <h1>{message}</h1>
          <p>If you can see the text "Hello World!" above then everything worked correctly.</p>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;


