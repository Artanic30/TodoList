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
    let now = new Date()
    console.log(moment(now, "YYYY-MM-DD"))
    this.setState({ value: [moment(now, "YYYY-MM-DD"), null]})
  }

  handleChange = value => {
    store.commit()
    this.setState({ value });
  };

  render() {
    const { value, mode } = this.state;
    return (
      <RangePicker
        placeholder={['Start date', 'End date']}
        defaultValue={moment('2015/01/01', "YYYY-MM-DD")}
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
