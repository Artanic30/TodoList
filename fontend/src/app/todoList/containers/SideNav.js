import '../styles/index.css'
import React from 'react';
import { Row, Col, ListGroup, Jumbotron, Accordion, Card } from 'react-bootstrap'

class SideNav extends React.Component {
      render () {
        return (
          <React.Fragment>
            <Row >
              <Col md={{ span: 8, offset: 4 }}>
                <ListGroup defaultActiveKey="1" variant="flush">
                  <ListGroup.Item
                    action
                    eventKey={'Today'}
                    className={'eliminate-focus'}
                    onClick={() => {this.props.changeDisplay('Today')}}>
                    Today
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    eventKey={'In a week'}
                    className={'eliminate-focus'}
                    onClick={() => {this.props.changeDisplay('In a week')}}>
                    In a Week
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    eventKey={'Coming Soon'}
                    className={'eliminate-focus'}
                    onClick={() => {this.props.changeDisplay('Coming Soon')}}>
                    Coming Soon
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    eventKey={'History'}
                    className={'eliminate-focus'}
                    onClick={() => {this.props.changeDisplay('History')}}>
                    History
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </React.Fragment>
        )
      }
}

export default SideNav;
