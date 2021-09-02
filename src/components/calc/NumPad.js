import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function NumPad(props) {
  return (
    <Col xs={props.width}>
      <Row className="mb-2">
        <Col xs={4}>
          <Button>7</Button>
        </Col>
        <Col xs={4}>
          <Button>8</Button>
        </Col>
        <Col xs={4}>
          <Button>9</Button>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={4}>
          <Button>4</Button>
        </Col>
        <Col xs={4}>
          <Button>5</Button>
        </Col>
        <Col xs={4}>
          <Button>6</Button>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={4}>
          <Button>1</Button>
        </Col>
        <Col xs={4}>
          <Button>2</Button>
        </Col>
        <Col xs={4}>
          <Button>3</Button>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={4}>
          <Button>0</Button>
        </Col>
        <Col xs={4}>
          <Button>.</Button>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={4}>
          <Button variant="outline-primary" className="bg-white">C</Button>
        </Col>
        <Col xs={8} className="d-grid">
          <Button>=</Button>
        </Col>
      </Row>
    </Col>
  )
}
