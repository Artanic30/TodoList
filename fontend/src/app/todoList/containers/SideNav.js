import '../styles/index.css'
import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap'
import { Icon } from 'antd'
import store from '../../../shared/store/todoListStore'

class SideNav extends React.Component {
      render () {
        return (
          <React.Fragment>
            <Row >
              <Col md={{ span: 11, offset: 1 }}>
                <ListGroup defaultActiveKey="Ongoing" variant="flush">
                  <ListGroup.Item
                    action
                    eventKey={'Ongoing'}
                    className={'eliminate-focus'}
                    onClick={() => {store.update_current('Ongoing')}}>
                    <Row>
                      <Col md={{ span: 4 }}><Icon type="calendar" /></Col>
                      <Col md={{ span: 8 }}>Ongoing</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    eventKey={'History'}
                    className={'eliminate-focus'}
                    onClick={() => {store.update_current('History')}}>
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
