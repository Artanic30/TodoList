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
            <Form.Label column={''}>Email address</Form.Label>
            <Form.Control type="txt" placeholder="Enter title" ref={this.props.refs[0]} />
          </Form.Group>
          <Form.Group>
            <Form.Label column={''}>Detail</Form.Label>
            <Form.Control as="textarea" rows="2" ref={this.props.refs[1]} placeholder="Enter detail" />
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
