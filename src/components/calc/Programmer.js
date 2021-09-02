import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Button, FormControl } from 'react-bootstrap';

export default function Programmer() {
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="calc rounded py-2"
        >
          <Container>
            <Row className="mb-2">
              <Col className="my-2">
                <FormControl type="text" readOnly></FormControl>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Row className="mb-2">
                  <Col xs={6}>
                    <Button>0</Button>
                  </Col>
                  <Col xs={6}>
                    <Button>1</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
