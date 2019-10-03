import './styles/index.css'
import React from 'react';
import Header from '../../shared/header/header'
import { Row, Col } from 'react-bootstrap'
import SideNav from './containers/SideNav'
import ShowEvents from './containers/ShowEvents'

class TodoList extends React.Component {
      state = {
        current: 'Ongoing',
      };

      changeDisplay = (cate) => {
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
                  <Col md={{ span: 6 }} className={'padding-top'}>
                    <ShowEvents current={this.state.current} />
                  </Col>
                  <Col md={{ span: 3 }} className={'nav-color padding-top'} />
                </Row>
              </React.Fragment>
            )
          }
}

export default TodoList;
