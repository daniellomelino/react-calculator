import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function OpsPad(props) {
  return (
    <Col xs={props.width}>
      <Row>
        <Col xs={12} className="mb-2">
          <Button>/</Button>
        </Col>
        <Col xs={12} className="mb-2">
          <Button>x</Button>
        </Col>
        <Col xs={12} className="mb-2">
          <Button>-</Button>
        </Col>
        <Col xs={12} className="mb-2">
          <Button>+</Button>
        </Col>
      </Row>
    </Col>
  )
}
