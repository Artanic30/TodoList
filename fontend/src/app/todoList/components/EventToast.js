import '../styles/index.css'
import React from 'react';
import { Row, Col, Toast, Accordion, Button, Card, ButtonToolbar, Badge } from 'react-bootstrap'
import moment from 'moment';
import Provider from '../../../utils/provider'
import store from '../../../shared/store/todoListStore'

class EventToast extends React.Component {
      state = {
        event: {}
      };

      componentDidMount() {
        this.setState({
          event: this.props.event
        })
      }

      getBadges = () => {
        let pri = this.state.event.priority;
        if (pri) {
          if (pri > 4) {
            pri = 4
          } else if (pri <= 0) {
            pri = 1
          }
          const reflection = [
            {},
            {
              'var': 'success',
              'name': 'P1'
            },
            {
              'var': 'primary',
              'name': 'P2'
            },
            {
              'var': 'warning',
              'name': 'P3'
            },
            {
              'var': 'danger',
              'name': 'P4'
            }
          ];
          return (
            <Badge variant={reflection[pri]['var']}><span className={'sub-title'}>{reflection[pri]['name']}</span></Badge>
          )
        } else {
          return null
        }
      };

      TriggerEditDetail = () => {
        store.update_event(this.state.event);
        this.props.EditDetail(this.state.event.id);
      };

      DeleteEvent = () => {
        Provider.delete(`${store.baseApi}/${this.state.event.id}/`).then(response => {
          alert('Event Deleted!');
          this.setState({
            event: null
          })
        })
      };

      EditPriority = (signal) => {
        if (signal === 1) {
          let data = {
            'priority': this.state.event.priority + 1
          };
          Provider.patch(`${store.baseApi}/${this.state.event.id}/`, data).then(response => {
            this.setState({
              event: {...this.state.event, 'priority': this.state.event.priority + 1}
            })
          })
        } else {
          let data = {
            'priority': this.state.event.priority - 1
          };
          Provider.patch(`${store.baseApi}/${this.state.event.id}/`, data).then(response => {
            this.setState({
              event: {...this.state.event, 'priority': this.state.event.priority - 1}
            })
          })
        }
      };

      EditDone = () => {
        let data = {
            'is_done': true
        };
        Provider.patch(`${store.baseApi}/${this.state.event.id}/`, data).then(response => {
            alert('Mark resolved!');
            this.setState({
              event: null
            })
          })
      };

      render() {
        if (this.state.event) {
          return (
            <Row className={'padding-left padding-top'}>
              <Col>
                <Toast onClose={this.DeleteEvent} className={'eliminate-focus event-width'}>
                  <Toast.Header>
                    { this.getBadges() }
                    <strong className="mr-auto padding-left">{ this.state.event.title }</strong>
                    <small>{ moment(this.state.event.expire_time).format('YYYY/MM/DD')}</small>
                  </Toast.Header>
                  <Toast.Body className={'bottom-zero'}>
                    <Row>
                      <Col className={'detail-height'}>{ this.state.event.detail }</Col>
                    </Row>
                    <Row>
                      <Col className={'padding-zero'}>
                        <Accordion>
                          <Card>
                            <Card.Header className={'padding-zero'}>
                              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <span>Edit!</span>
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body className={'card-padding'}>
                                <Row>
                                  <Col>
                                    <ButtonToolbar>
                                      <Button variant="dark" size={'sm'} onClick={this.TriggerEditDetail}>Edit content</Button>
                                      <Button variant="dark" size={'sm'} onClick={this.EditPriority.bind(this, 1)}>Add priority</Button>
                                      <Button variant="dark" size={'sm'} onClick={this.EditPriority.bind(this, 0)}>Reduce priority</Button>
                                      <Button variant="dark" size={'sm'} onClick={this.EditDone}>Mark resolved!</Button>
                                    </ButtonToolbar>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Col>
                    </Row>
                  </Toast.Body>
                </Toast>
              </Col>
            </Row>
          )
        } else {
          return (
            <Row className={'padding-left padding-top'} />
          )
        }
      }
}

export default EventToast;
