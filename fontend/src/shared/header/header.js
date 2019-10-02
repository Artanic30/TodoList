import React from 'react';
import '../styles/header.css'
import { Row, Col, Button, Modal } from 'react-bootstrap'



class Header extends React.Component {
  state = {
    show: false
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
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add new event</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
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
