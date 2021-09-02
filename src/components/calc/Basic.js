import React from 'react'
import NumPad from './NumPad';
import OpsPad from './OpsPad';
import { Container, Row, Col } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

export default function Basic() {
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
              <NumPad width={9} />
              <OpsPad width={3} />
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
