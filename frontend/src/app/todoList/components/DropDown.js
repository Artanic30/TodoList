import '../styles/index.css'
import React from 'react';
import { Dropdown } from 'react-bootstrap'
import store from '../../../shared/store/todoListStore'


class DropDown extends React.Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sorted by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => {store.update_current('Sorted by Priority')}}>Priority</Dropdown.Item>
          <Dropdown.Item onClick={() => {store.update_current('Sorted by Expire Date')}}>Expire Date</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}


export default DropDown;
