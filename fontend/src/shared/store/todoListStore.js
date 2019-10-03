import {observable, action} from "mobx";


class TodoListStore {
  @observable newEvent = {
    expire_date: ''
  };

  @observable editEvent = null;

  @observable baseApi = 'http://127.0.0.1:8000/api';

  @action update_date = (date) => {
    this.newEvent.expire_date = date;
  };

  @action update_event = (event) => {
    this.editEvent = event;
  };

  @action remove_event = () => {
    this.editEvent = null;
  }
}

export default new TodoListStore();
