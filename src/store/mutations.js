import { ADD_TODO, ADD_ID } from "./mutation-types";

export default {
  [ADD_TODO](state, { todo }) {
    console.log("mutations - todo", todo);
    // console.log('mutations - a', a)
    state.todos.unshift(todo);
  },
  [ADD_ID](state, num) {
    setTimeout(() => {
      state.id += num;
    }, 1000);
  }
};
