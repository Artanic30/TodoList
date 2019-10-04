import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import store from '../../store/todoListStore'


const { RangePicker } = DatePicker;
class ControlledRangePicker extends React.Component {
  state = {
    mode: ['date', 'date'],
    value: [],
  };

  handlePanelChange = (value, mode) => {
    this.setState({
      value,
      mode: [mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]],
    });
  };

  componentDidMount() {
    let now = new Date();
    this.setState({ value: [moment(now, "YYYY-MM-DD"), null]})
  }

  handleChange = value => {
    this.setState({ value });
    if (value[1]) {
      store.update_date(value[1].format())
    }
  };

  render() {
    const { value, mode } = this.state;
    return (
      <RangePicker
        placeholder={['Start date', 'End date']}
        format="YYYY-MM-DD"
        value={value}
        mode={mode}
        onChange={this.handleChange}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}

export default ControlledRangePicker;
