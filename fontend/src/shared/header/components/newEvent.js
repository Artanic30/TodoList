import React from 'react';
import '../../styles/header.css'
import { Form } from 'react-bootstrap'
import DatePicker from './DatePicker';
import store from '../../store/todoListStore'



class EventForm extends React.Component {
  state = {
    event: {
      title: '',
      detail: '',
      priority: '',
      expire_date: ''
    }
  };

  componentDidMount() {
    if (store.editEvent) {
      this.setState({
        event: store.editEvent
      })
    }
  }


  render () {
    return (
      <React.Fragment>
        <Form>
          <Form.Group>
            <Form.Label column={''}>Title</Form.Label>
            <Form.Control defaultValue={this.state.event.title} type="txt" placeholder="Enter title" ref={this.props.refs[0]} />
          </Form.Group>
          <Form.Group>
            <Form.Label column={''}>Detail</Form.Label>
            <Form.Control defaultValue={this.state.event.detail} as="textarea" rows="2" ref={this.props.refs[1]} placeholder="Enter detail" />
          </Form.Group>
          <Form.Group md="2">
            <Form.Label column={''}>Priority</Form.Label>
            <Form.Control defaultValue={this.state.event.priority} as="select" ref={this.props.refs[2]}>
              <option>P1</option>
              <option>P2</option>
              <option>P3</option>
              <option>P4</option>
            </Form.Control>
            <Form.Text className="text-muted">
              P4 means the most urgent issue.
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
