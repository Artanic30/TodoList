import '../styles/index.css'
import React from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap'
import EventToast from '../components/EventToast'
import EventForm from "../../../shared/header/components/newEvent";
import store from "../../../shared/store/todoListStore";
import Provider from "../../../utils/provider";

class ShowEvents extends React.Component {
      state = {
        current: '',
        show: false,
        editId: '',
        events: [
            {
                "id": 1,
                "title": "partial_update",
                "priority": 2,
                "detail": "Detail for test_event1!!!",
                "expire_time": "2020-09-30T12:30:00Z",
                "is_done": false
            },
            {
                "id": 2,
                "title": "asd",
                "priority": 1,
                "detail": "asdasdasdasd",
                "expire_time": "2019-10-11T17:30:00Z",
                "is_done": false
            },
            {
                "id": 4,
                "title": "test_4",
                "priority": 1,
                "detail": "test_4",
                "expire_time": "2019-10-22T06:00:00Z",
                "is_done": false
            },
            {
                "id": 5,
                "title": "test_5",
                "priority": 2,
                "detail": "test_5",
                "expire_time": "2019-10-02T07:47:40Z",
                "is_done": false
            },
            {
                "id": 6,
                "title": "test_6",
                "priority": 1,
                "detail": "test_6",
                "expire_time": "2019-10-02T12:00:00Z",
                "is_done": false
            },
            {
                "id": 7,
                "title": "test_7",
                "priority": 5,
                "detail": "test_5",
                "expire_time": "2019-10-02T07:47:40Z",
                "is_done": false
            },
            {
                "id": 9,
                "title": "test_9",
                "priority": 5,
                "detail": "test_6",
                "expire_time": "2019-10-02T12:00:00Z",
                "is_done": false
            },
            {
                "id": 11,
                "title": "test_11",
                "priority": 3,
                "detail": "test_5",
                "expire_time": "2019-10-02T07:47:40Z",
                "is_done": false
            },
            {
                "id": 12,
                "title": "test_12",
                "priority": 5,
                "detail": "test_6",
                "expire_time": "2019-10-02T12:00:00Z",
                "is_done": false
            }
        ]
      };

      FormRefs = ['title', 'detail', 'priority'].map((name) => {
        name = React.createRef();
        return name
      });

      componentDidMount() {
        this.setState({
          current: this.props.current
        })
      };

      shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.current !== this.state.current) {
          this.setState({
            current: nextProps.current
          });
        }
        return true
      };

      EditDetail = (id) => {
        console.log(id);
        this.setState({
          editId: id
        });
        this.handleShow()
      };

      submitForms = () => {
        this.handleClose();
        let data = {
          'title': this.FormRefs[0].current.value,
          'detail': this.FormRefs[1].current.value,
          'priority': this.FormRefs[2].current.value,
          'expire_time': store.newEvent.expire_date + 'z',
          'is_done': false
        };
        Provider.put(`${store.baseApi}/${this.state.editId}/`, data).then(response => {
          console.log('put new data!')
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

      render() {
        const events = this.state.events.map((event, index) => {
              return (
                <EventToast event={event} key={event.id} EditDetail={this.EditDetail}/>
              )
            });
        return (
          <React.Fragment>
            <Row className={'padding-left padding-top'}>
              <Col><h2>{ this.state.current }</h2></Col>
            </Row>
            <Row className={'padding-left padding-top'}>
              <Col><h5>Events</h5></Col>
            </Row>
            { events }
            <Row ><Col></Col></Row>
            <Modal
            show={this.state.show}
            onHide={this.handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit event</Modal.Title>
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
          </React.Fragment>
        )
      }
}

export default ShowEvents;
