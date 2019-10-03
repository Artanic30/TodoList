import React from 'react';
import '../styles/header.css'
import { Row, Col, Button, Modal } from 'react-bootstrap'
import EventForm from './components/newEvent'
import Provider from '../../utils/provider'
import store from '../store/todoListStore'


class Header extends React.Component {
  state = {
    show: false
  };
  FormRefs = ['title', 'detail', 'priority'].map((name) => {
    name = React.createRef();
    return name
  });

  submitForms = () => {
    this.handleClose();
    let data = {
      'title': this.FormRefs[0].current.value,
      'detail': this.FormRefs[1].current.value,
      'priority': this.FormRefs[3].current.value,
      'expire_time': store.newEvent.expire_date,
      'is_done': false
    };
    Provider.post(`${store.baseApi}/api/`, data).then(response => {
      console.log(response)
    })
  };

  handleClose = () => {
    this.setState({
      show: false
    })
  };

  handleShow = () => {
    this.setState({
      show: true
    })
  };

  render () {
    return (
      <React.Fragment>
        <Row className={'header'}>
          <Col md={{ span: 4, offset: 1 }} className={'align-center'}>
            <h2 className={'title'}>TodoList</h2>
          </Col>
          <Col md={{ span: 2, offset: 5 }} className={'align-center'}>
            <Button className={'button'} variant="light" onClick={this.handleShow}>+</Button>
          </Col>
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title>Add new event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EventForm refs={this.FormRefs} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.submitForms}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </React.Fragment>
    )
  }
}

export default Header;
