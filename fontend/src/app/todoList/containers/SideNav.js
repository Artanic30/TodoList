import '../styles/index.css'
import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap'
import { Icon } from 'antd'

class SideNav extends React.Component {
      render () {
        return (
          <React.Fragment>
            <Row >
              <Col md={{ span: 11, offset: 1 }}>
                <ListGroup defaultActiveKey="1" variant="flush">
                  <ListGroup.Item
                    action
                    eventKey={'Today'}
                    className={'eliminate-focus'}
                    onClick={() => {this.props.changeDisplay('Today')}}>
                    <Row>
                      <Col md={{ span: 4 }}><Icon type="calendar" /></Col>
                      <Col md={{ span: 8 }}>Today</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    eventKey={'In a week'}
                    className={'eliminate-focus'}
                    onClick={() => {this.props.changeDisplay('In a week')}}>
                    <Row>
                      <Col md={{ span: 4 }}><Icon type="calendar" /></Col>
                      <Col md={{ span: 8 }}>In a Week</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    eventKey={'Coming Soon'}
                    className={'eliminate-focus'}
                    onClick={() => {this.props.changeDisplay('Coming Soon')}}>
                    <Row>
                      <Col md={{ span: 4 }}><Icon type="calendar" /></Col>
                      <Col md={{ span: 8 }}>Coming Soon</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    eventKey={'History'}
                    className={'eliminate-focus'}
                    onClick={() => {this.props.changeDisplay('History')}}>
                    <Row>
                      <Col md={{ span: 4 }}><Icon type="carry-out" /></Col>
                      <Col md={{ span: 8 }}>History</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </React.Fragment>
        )
      }
}

export default SideNav;
