import '../styles/index.css'
import React from 'react';
import { Row, Col, Modal, Button, Pagination } from 'react-bootstrap'
import EventToast from '../components/EventToast'
import DropDown from "../components/DropDown";
import EventForm from "../../../shared/header/components/newEvent";
import store from "../../../shared/store/todoListStore";
import Provider from "../../../utils/provider";
import {observer} from 'mobx-react';

@observer
class ShowEvents extends React.Component {
      state = {
        current: '',
        show: false,
        editId: '',
        active: 1,
        prePage: '',
        nextPage: '',
        count: 0,
        events: []
      };

      FormRefs = ['title', 'detail', 'priority'].map((name) => {
        name = React.createRef();
        return name
      });

      componentDidMount() {
        this.setState({
          current: store.current
        });
        this.InitData();
      };

      InitData = () => {
        if (store.current === 'History') {
            Provider.get(`${store.baseApi}/history/`).then(response => {
              this.setState({
                current: store.current,
                events: response.data
              })
            })
          } else if (store.current === 'Sorted by Priority') {
            Provider.get(`${store.baseApi}/priority/`).then(response => {
              this.setState({
                current: store.current,
                events: response.data
              })
            })
          } else if (store.current === 'Sorted by Expire Date') {
            Provider.get(`${store.baseApi}/expire/`).then(response => {
              this.setState({
                current: store.current,
                events: response.data
              })
            })
          } else {
            this.RequestEvents(`${store.baseApi}/`)
          }
      };


      RequestEvents = (api) => {
        Provider.get(api).then(response => {
            this.setState({
              current: store.current,
              events: response.data.results,
              prePage: response.data.previous,
              nextPage: response.data.next,
              count: response.data.count
            })
          })
      };

      EditDetail = (id) => {
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
          'priority': Number(this.FormRefs[2].current.value.slice(1, 2)),
          'expire_time': store.newEvent.expire_date.slice(0, -6),
          'is_done': false
        };
        Provider.put(`${store.baseApi}/${this.state.editId}/`, data).then(response => {
          alert('put new data!');
          window.location.reload();
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

      handlePag = (id) => {
        this.setState({
          active: id
        });
        let api = '';
        if (id !== 1) {
          api = this.state.nextPage.slice(0,-1) + id
        } else {
          api = `${store.baseApi}/`
        }
        this.RequestEvents(api)
      };

      handleSorted = (method) => {
        store.update_current(method)
      };

      render() {
        const events = this.state.events.map((event, index) => {
              return (
                <EventToast event={event} key={event.id} EditDetail={this.EditDetail}/>
              )
            });

        let items = [];
        let page = 0;
        if (this.state.count % 5 === 0) {
          page = this.state.count / 5
        } else {
          page = this.state.count / 5 + 1
        }
        for (let number = 1; number <= page; number++) {
          items.push(
            <Pagination.Item key={number} active={number === this.state.active} onClick={this.handlePag.bind(this, number)}>
              {number}
            </Pagination.Item>,
          );
        }
        if (this.state.current !== store.current) {
          this.InitData();
          this.setState({
            current: store.current
          });
        }
        let current = store.current;
        return (
          <React.Fragment>
            <Row className={'padding-left padding-top'}>
              <Col><h2>{ current }</h2></Col>
            </Row>
            <Row className={'padding-left padding-top'}>
              <Col md={{ span: 4 }}><h5>Events</h5></Col>
              <Col md={{ span: 4, offset: 4 }}>
                <DropDown handleSort={this.handleSorted} />
              </Col>
            </Row>
            { events }
            { current === 'Ongoing' ?
              <Row className={'padding-top'}><Col className={'align-center'}><Pagination size="sm">{ items }</Pagination></Col></Row>
             : <Row className={'padding-top'} />
            }
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
