import {observable, computed, action} from "mobx";


class TodoListStore {
  @observable newEvent = {
    expire_date: ''
  };

  @observable baseApi = 'http://127.0.0.1:8000';

  @action update_date = (date) => {
    this.newEvent.expire_date = date;
  };
}

export default new TodoListStore();
