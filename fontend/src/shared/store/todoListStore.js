import {observable, computed, action} from "mobx";


class TodoListStore {
  @observable expire_date = null;
}

export default new TodoListStore();
