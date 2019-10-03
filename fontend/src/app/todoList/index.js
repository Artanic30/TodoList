import './styles/index.css'
import React from 'react';
import Header from '../../shared/header/header'
import { Row, Col, Button, Jumbotron, Accordion, Card } from 'react-bootstrap'
import SideNav from './containers/SideNav'

class TodoList extends React.Component {
      state = {
        current: 'Today'
      };

      changeDisplay = (cate) => {
        console.log(cate)
        this.setState({
          current: cate
        })
      };

      render () {
        return (
          <React.Fragment>
            <Row>
              <Col><Header /></Col>
            </Row>
            <Row>
              <Col md={{ span: 3 }} className={'nav-color padding-top'}>
                <SideNav changeDisplay={this.changeDisplay} />
              </Col>
              <Col md={{ span: 6 }} className={'padding-top'}>2</Col>
              <Col md={{ span: 3 }} className={'nav-color padding-top'} />
            </Row>
          </React.Fragment>
        )
      }
}

export default TodoList;
