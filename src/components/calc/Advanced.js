import React from 'react'
import NumPad from './NumPad';
import OpsPad from './OpsPad';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, FormControl } from 'react-bootstrap';

export default function Advanced() {
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          sm={9}
          md={6}
          lg={5}
          xl={4}
          className="calc rounded py-2"
        >
          <Container>
            <Row className="mb-2">
              <Col className="my-2">
                <FormControl type="text" readOnly></FormControl>
              </Col>
            </Row>
            <Row>
              <NumPad width={5} />
              <OpsPad width={2} />
              <Col xs={5}>
                <Row className="mb-2">
                  <Col xs={4}>
                    <Button>x<sup>y</sup></Button>
                  </Col>
                  <Col xs={4}>
                    <Button>&#8730;</Button>
                  </Col>
                  <Col xs={4}>
                    <Button>log</Button>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={6}>
                    <Button>cos</Button>
                  </Col>
                  <Col xs={6}>
                    <Button>sin</Button>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={6}>
                    <Button>tan</Button>
                  </Col>
                  <Col xs={6}>
                    <Button>log</Button>
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
