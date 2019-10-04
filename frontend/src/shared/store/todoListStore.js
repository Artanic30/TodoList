import { observable, action } from "mobx";


class TodoListStore {
  @observable newEvent = {
    expire_date: ''
  };

  @observable current = 'Ongoing';

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
  };

  @action update_current = (cate) => {
    this.current = cate;
    console.log('store updated', cate)
  }
}

export default new TodoListStore();
