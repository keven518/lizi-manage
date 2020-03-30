/**
 * 更新所有的状态
 */
import { ADD_TODO } from "./mutation-types";

export default {
  // 添加一条记录
  addTodo({ commit }, todo) {
    console.log("actions - todo: ", todo);
    commit(ADD_TODO, { todo });
  }
};
