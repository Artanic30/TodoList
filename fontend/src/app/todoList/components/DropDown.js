import '../styles/index.css'
import React from 'react';
import { Dropdown } from 'react-bootstrap'


class DropDown extends React.Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sorted by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={this.props.handleSort.bind(this, 'Priority')}>Priority</Dropdown.Item>
          <Dropdown.Item onClick={this.props.handleSort.bind(this, 'Expire Date')}>Expire Date</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}


export default DropDown;
