import React from 'react';
import '../../styles/header.css'
import { Form, Button } from 'react-bootstrap'
import DatePicker from './DatePicker';



class EventForm extends React.Component {
  state = {
    value: ''
  };

  render () {
    return (
      <React.Fragment>
        <Form>
          <Form.Group>
            <Form.Label column={''}>Title</Form.Label>
            <Form.Control type="txt" placeholder="Enter title" ref={this.props.refs[0]} />
          </Form.Group>
          <Form.Group>
            <Form.Label column={''}>Detail</Form.Label>
            <Form.Control as="textarea" rows="2" ref={this.props.refs[1]} placeholder="Enter detail" />
          </Form.Group>
          <Form.Group md="2">
            <Form.Label column={''}>Priority</Form.Label>
            <Form.Control as="select" ref={this.props.refs[2]}>
              <option>P1</option>
              <option>P2</option>
              <option>P3</option>
              <option>P4</option>
            </Form.Control>
            <Form.Text className="text-muted">
              P1 means the most urgent issue.
            </Form.Text>
          </Form.Group>
          <Form.Group>
              <DatePicker />
          </Form.Group>
        </Form>
      </React.Fragment>
    )
  }
}


export default EventForm;
