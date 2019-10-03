import {observable, computed, action} from "mobx";


class TodoListStore {
  @observable newEvent = {
    expire_date: ''
  };

  @action update_date = (date) => {
    this.newEvent.expire_date = date;
  }

  @action update_date = (date) => {
    this.newEvent.expire_date = date;
  }
}

export default new TodoListStore();
