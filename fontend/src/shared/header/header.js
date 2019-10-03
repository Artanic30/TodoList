import React from 'react';
import '../styles/header.css'
import { Row, Col, Button, Modal } from 'react-bootstrap'
import EventForm from './components/newEvent'


class Header extends React.Component {
  state = {
    show: false
  };
  FormRefs = ['title', 'detail', 'expire_time', 'priority'].map((name) => {
    name = React.createRef();
    return name
  });

  submitForms = () => {
    console.log(this.FormRefs[2])
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
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </React.Fragment>
    )
  }
}

export default Header;
