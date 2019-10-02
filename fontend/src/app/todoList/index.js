import './styles/index.css'
import React from 'react';
import Header from '../../shared/header/header'
import { Row, Col, Button, Jumbotron, Accordion, Card } from 'react-bootstrap'

class TodoList extends React.Component {
      constructor (props) {
        super(props);
        this.state = {}
      }

      render () {
        return (
          <React.Fragment>
            <Header />
            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </React.Fragment>
        )
      }
}

export default TodoList;
