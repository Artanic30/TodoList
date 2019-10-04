import './styles/index.css'
import React from 'react';
import Header from '../../shared/header/header'
import { Row, Col } from 'react-bootstrap'
import SideNav from './containers/SideNav'
import ShowEvents from './containers/ShowEvents'
import store from "../../shared/store/todoListStore";
import {observer} from 'mobx-react';


@observer
class TodoList extends React.Component {
      state = {
      };

      render () {
            const current = store.current;
            return (
              <React.Fragment>
                <Row>
                  <Col><Header /></Col>
                </Row>
                <Row>
                  <Col md={{ span: 3 }} className={'nav-color padding-top'}>
                    <SideNav />
                  </Col>
                  <Col md={{ span: 6 }} className={'padding-top'}>
                    <ShowEvents />
                  </Col>
                  <Col md={{ span: 3 }} className={'nav-color padding-top'} />
                </Row>
              </React.Fragment>
            )
          }
}

export default TodoList;
